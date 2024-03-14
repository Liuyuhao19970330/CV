---
title: 着色器GLSL ES语言
date: 2024-01-10
tags: 
- shader

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

### GLSL ES基础数据类型

着色器语言GLSL的基本数据类型和C语言一样具有常见的整型数`int`、浮点数`float`和布尔值`bool`类型数据。

| 关键字          | 数据类型        | 值        |
| :------------- | :------------- |:------------- |
| bool            | 布尔值          | 布尔变量值为true或false|
| int            | 整型数          | 值为整数，比如0,1,2,3... |
| float          | 单精度浮点数  |浮点数用小数点表示，比如0.6,3.14,2.8 |

这三个关键字的用法，下面就会给大家展示怎么用于声明变量。

### 声明变量

声明变量，并赋值
```javascript
// 整型变量
int count = 10;
// 浮点数变量
float num = 10.0;
// 声明一个布尔值变量
bool lightBool = true;
```

通过上面变量声明，你也可以看出，着色器语言声明变量和TypeScript一样需要注明数据类型，但是JavaScript不用注明变量数据类型。

```javascript
// JavaScript语言声明变量，不用设置数据类型
let count = 10;
```

先声明变量，后赋值或改变。

```javascript
float c;
c = 100.0;
```
改变变量的值
```javascript
float count = 10.0;
count = 20.0;
```


注意: 注意变量的数据类型和值要对应

错误赋值方式
```javascript
float num = 1;
```
正确赋值方式
```javascript
float num = 1.0;
```


### 变量简单运算

```javascript
// 32位浮点数相加
float a = 2.0;
float b = 4.0;
float c = a+b;
```

```javascript
//整数相加
int a = 2;
int b = 4;
int c = a+b;
```

两个变量进行运算，需要保持一样数据类型，否则报错。

### 声明一个常量`const`

着色器语言和C语言、javascript语言一样可以通过关键字`const`声明一个常量。

```javascript
// 着色器语言定义一个整形常量
const int count = 10;
// 定义一个浮点数常量10.0
const float count = 10.0;
```

着色器语言和其它语言一样，声明一个变量，可以重新赋值，如果通过关键字const声明一个常量，顾名思义是常量，在代码中是不可以更改的。

```javascript
const int count = 10;
// 错误写法
count= 20;
```

### 着色器语言GLSL ES声明函数

函数计算后,如果需要返回的值，通过关键字`return`返回，不过注意声明函数时候，函数名称前需要声明`return`返回值的数据类型。
```javascript
// 两个参数是浮点数，相加后返回值自然也是浮点数
float add(float x,float y){
  return x + y
}
```

声明一个无返回值函数,函数前面用`void`关键字即可。
```javascript
void main(){
  float x = 10.0;
}
```

### if语句


着色器语言GLSL中关于if语句、for语句的使用，和javascript语言、C语言中的if语句、for语句执行逻辑规则基本一致，这里默认你已经有一定的编程基础，也就不做过多讲解，只是简单说明一下。

单独使用`if`
```js
float x = 10.0
if(x > 100.0){
  x = 100.0;
}
```
`if-else`形式
```js
float x = 10.0
if(x > 100.0){
  x = 100.0;
} else {
  x = x + 1.0;
}
```
`if-else if-else if-...else`形式
```js
float x = 10.0
if(x<10.0){

}else if (x>=10.0 && x<20.0) {

}else if (x>=20.0 && x<30.0) {

}else {

}
```
### for循环语句

和你平时写JavaScript的for循环语句基本相似，只是注意注明变量i的数据类型即可。

```javascript
for (int i = 0; i < 20; i++) {
  ...
}
```
### `continue`和`break`关键字

着色器语言`continue`和`break`关键字和JavaScript语言习惯也是相似的。

`break`表示终止for循环执行

```javascript
for (int i = 0; i < 20; i++) {
  ...
  if(i==15){
    break;//直接终止循环执行，i=16、17等后面的循环不再执行
  }
  ...
}
```

`continue`表示直接跳到for循环的下一个循环
```javascript
for (int i = 0; i < 20; i++) {
  ...
  if(i==15){
    continue;//进行下次循环，执行i=16对应的循环
  }
  ...
}
```

### 向量表示颜色

在GLSL ES中，向量可以表示多种数据，也能进行多种数学运算，咱们这里先不讲解那么多，说些简单的。

```js
// 四维向量有四个分量，可以用来表示颜色的R、G、B、A
var color:vec4<f32> = vec4<f32>(1.0, 0.0, 0.0, 1.0);//红色不透明
```

```js
// 省略:vec4<f32>数据类型
var color = vec4<f32>(1.0, 0.0, 0.0, 1.0);
```

```js
// 先声明一个四维向量变量，再赋值
var color:vec4<f32>;
color = vec4<f32>(1.0, 0.0, 0.0, 1.0);
```

### 向量表示位置

三维向量`vec3<f32>`表示具有三个分量，可以用来表示顶点的xyz坐标。
```js
var pos:vec3<f32>;
pos= vec3<f32>(1.0, 2.0, 3.0);
```
四维向量表示齐次坐标，在WGSL中，表示一个坐标的的时候，如果用四维向量表示，最后一个分量是1.0。改坐标表示xyz的齐次坐标。
```js
var pos:vec4<f32>;
pos= vec4<f32>(1.0, 2.0, 3.0,1.0);
```

一个三维向量转化为四维向量
```js
var pos:vec3<f32>;
pos = vec3<f32>(1.0, 2.0, 3.0);
//等价于vec4<f32>(1.0, 2.0, 3.0,1.0)
var pos2 = vec4<f32>(pos,1.0);
```

一个二维向量转化为四维向量
```js
var pos:vec2<f32>;
pos = vec2<f32>(1.0, 2.0);
//等价于vec4<f32>(1.0, 2.0, 3.0,1.0)
var pos2 = vec4<f32>(pos, 3.0,1.0);
```
   
### GLSL ES代码注释

 GLSL ES代码注释和JavaScript语言的习惯一样。

- 单行注释符号`//`

- 快级注释符号`/* */`

###  GLSL ES语句结尾分号

在JavaScript中，代码语句结尾的分号可以省略，但是 GLSL ES中分号不能省略。

```javascript
float a = 2.0;//正常
```
分号省略，会报错
```javascript
float a = 2.0//分号省略，会报错
```
