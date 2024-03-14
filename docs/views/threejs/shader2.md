---
title: shader基础语法
date: 2024-01-11
tags: 
- shader

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]
shader基础语法,用的少,还是用替换比较多.
## 坐标系
局部坐标（模型坐标系）：

顶点最初位于物体自身的坐标系中，这个坐标系被称为局部坐标系或模型坐标系。
世界坐标（观察者坐标系）：

通过模型矩阵（model matrix），局部坐标被转换到世界坐标系。这个坐标系是相对于整个场景的，也称为世界坐标系。
视图坐标（相机坐标系）：

通过视图矩阵（view matrix），世界坐标被转换到视图坐标系。这个坐标系是相对于相机的，观察者（相机）位于坐标原点，观察方向通常是 Z 轴的负方向。
裁剪坐标：

通过投影矩阵（projection matrix），视图坐标最终被转换到裁剪坐标。这个坐标系包含了透视效果或正交投影的效果，用于确定在屏幕上的位置。
所以，整个过程可以表示为：

[ \text{裁剪坐标} = \text{projectionMatrix} \times \text{viewMatrix} \times \text{modelMatrix} \times \text{vec4}(\text{position}, 1.0) ]

这样的变换过程是图形渲染中非常常见的，它将物体从局部坐标系转换到最终在屏幕上呈现的裁剪坐标系。

## ShaderMaterial着色器材质
```javascript
const vertexShader = `
void main(){
  // 投影矩阵 * 视图矩阵 * 模型矩阵 * 模型顶点坐标
  // gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
  // 投影矩阵 * 模型视图矩阵 * 模型顶点坐标
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
// 片元着色器代码     
const fragmentShader = `
void main() {
    gl_FragColor = vec4(0.0,1.0,1.0,1.0);
}
`
const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,// 顶点着色器,必须
    fragmentShader: fragmentShader,// 片元着色器,必须
    side: THREE.DoubleSide,//双面显示
    transparent: true,//允许透明,只有打开允许透明才能透明哦
});
const mesh = new THREE.Mesh(geometry, material);
```
## uniform变量传值
在fragmentShader中用uniform定义变量,然后在shadermaterial中赋值
```javascript
const vertexShader = `
void main(){
  // 投影矩阵 * 模型视图矩阵 * 模型顶点坐标
  gl_Position = projectionMatrix*modelViewMatrix*vec4( position, 1.0 );
}
`
// 片元着色器代码
const fragmentShader = `
uniform float opacity;//uniform声明变量opacity表示透明度
uniform vec3 color;//声明一个颜色变量color
void main() {
    gl_FragColor = vec4(color,opacity);
}
`
//在着色器中定义变量,在material中进行赋值
const material = new THREE.ShaderMaterial({
  uniforms: {
    // 给透明度uniform变量opacity传值
    opacity: { value: 0.3 },
    // 给uniform同名color变量传值
    color:{value:new THREE.Color(0x00ffff)}
  },
  vertexShader: vertexShader,// 顶点着色器
  fragmentShader: fragmentShader,// 片元着色器
  side: THREE.DoubleSide,
  transparent: true,//允许透明
});
const mesh = new THREE.Mesh(geometry, material);
```

## 片元屏幕坐标fragCoord.xy
```javascript
const vertexShader = `
void main(){
  // 投影矩阵 * 模型视图矩阵 * 模型顶点坐标
  gl_Position = projectionMatrix*modelViewMatrix*vec4( position, 1.0 );
}
`
// 片元着色器代码
const fragmentShader = `
void main() {
    //1. 所有片元都是同一种颜色 
    // gl_FragColor = vec4(0.0,1.0,1.0,1.0);

    //2.根据片元的x坐标，来设置片元的像素值
    // if(gl_FragCoord.x < 400.0){
    //   gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    // }else {
    //   gl_FragColor = vec4(0.0,0.0,1.0,1.0);
    // }

    // 3.片元沿着x方向渐变
     gl_FragColor = vec4(gl_FragCoord.x/800.0*1.0,0.0,0.0,1.0);
}
`
```
##  顶点颜色varying插值计算
```javascript
const geometry = new THREE.BufferGeometry(); //创建一个几何体对象
const vertices = new Float32Array([//类型数组创建顶点数据
50,50,0,
50,0,0,
0,0,0,
0,0,0,
0,50,0,
50,50,0

]);
// 设置几何体attributes属性的位置属性.position
geometry.attributes.position = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标

//类型数组创建顶点颜色color数据
const colors = new Float32Array([
  1, 0, 0, //顶点1颜色 
  0, 0.33, 0, //顶点3颜色
  0, 0, 0.66, //顶点2颜色
  0, 0, 0.66, //顶点2颜色
  0, 0.33, 0, //顶点3颜色1, 0, 0, //顶点1颜色 
  1, 0, 0, //顶点1颜色 
]);
// 设置几何体attributes属性的颜色color属性
//3个为一组,表示一个顶点的颜色数据RGB
// Function to generate a random number between 0 and 1

// Function to update the colors array with random values
// function updateColors() {
//   for (let i = 0; i < colors.length; i++) {
//     if(colors[i]==0){
//       colors[i]=0
//     }
//     else if(colors[i]>=1){
//       colors[i] = 0.01;
//     }else{
//       colors[i] += 0.01;
//   }  
// }

geometry.attributes.color = new THREE.BufferAttribute(colors, 3); 
// }
// Set an interval to update colors every second (1000 milliseconds)
// setInterval(updateColors, 50);



// 顶点着色器代码
const vertexShader = `
// attribute vec3 color;//默认提供不用手写
varying vec3 vColor;// varying关键字声明一个变量表示顶点颜色插值后的结果
void main(){
  vColor = color;// 顶点颜色数据进行插值计算
  // 投影矩阵 * 模型视图矩阵 * 模型顶点坐标
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 0.5 );
}
`
// 片元着色器代码
const fragmentShader = `
varying vec3 vColor;// 顶点片元化后有多少个片元,顶点颜色插值后就有多少个颜色数据
void main() {
    // gl_FragColor = vec4(0.0,1.0,1.0,1.0);
    gl_FragColor = vec4(vColor,1.0);
}
`
const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,// 顶点着色器
  fragmentShader: fragmentShader,// 片元着色器
  vertexColors:true,//允许设置使用顶点颜色渲染,必须要开允许使用顶点渲染
  side: THREE.DoubleSide,
  transparent: true,//允许透明
});
const mesh = new THREE.Mesh(geometry, material);
export default mesh;
```
## 顶点位置插值(实现渐变色)
```javascript
const geometry = new THREE.PlaneGeometry(100, 50);
// 顶点着色器代码
const vertexShader = `
varying vec3 vPosition;
void main(){
  vPosition = position;// 顶点位置坐标插值计算,这样写颜色会随着mesh移动
  //vPosition = vec3(modelMatrix * vec4( position, 1.0 ));这种不会随着mesh移动
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
// 片元着色器代码
const fragmentShader = `
varying vec3 vPosition;
void main() {
    float per = (vPosition.y + 25.0)/50.0;
    // 几何体顶点y坐标25，颜色值：1  0  0(红色)
    // 几何体顶点y坐标-25，颜色值：0  1  0(绿色)
    gl_FragColor = vec4(per,1.0-per,0.0,1.0);
}
`

const material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,// 顶点着色器
  fragmentShader: fragmentShader,// 片元着色器
});

const mesh = new THREE.Mesh(geometry, material);
```
##  颜色贴图map(顶点UV坐标)
```javascript
// const geometry = new THREE.PlaneGeometry(100, 50);
// const geometry = new THREE.BoxGeometry(100, 100, 100); //立方体
const geometry = new THREE.SphereGeometry(60, 25, 25); //球体
// 顶点着色器代码
const vertexShader = `
// attribute vec2 uv;//默认提供,不用自己写
varying vec2 vUv;
void main(){
  vUv = uv;// UV坐标插值计算
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
// 片元着色器代码
const fragmentShader = `
uniform sampler2D map;//颜色贴图变量
varying vec2 vUv;
void main() {
    // gl_FragColor = vec4(0.0,1.0,1.0,1.0);
    // 通过几何体的UV坐标从颜色贴图获取像素值
    gl_FragColor = texture2D( map, vUv );
}
`
const texture = new THREE.TextureLoader().load('./Earth.png');
const material = new THREE.ShaderMaterial({
  uniforms: {
    // 给着色器中同名uniform变量map传值
    map: { value: texture },
  },
  vertexShader: vertexShader,// 顶点着色器
  fragmentShader: fragmentShader,// 片元着色器
});

const mesh = new THREE.Mesh(geometry, material);

export default mesh;
```
## shader模仿点材质效果(用shader写点材质)
```javascript
const vertexShader = `
void main(){
  gl_PointSize = 20.0;//设置方形点渲染大小
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
// 片元着色器代码
const fragmentShader = `
void main() {
    gl_FragColor = vec4(0.0,1.0,1.0,1.0);
}
`

//一个点根据坐标来渲染
const vertexShader = `
void main(){
  gl_PointSize = 20.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
// 片元着色器代码
const fragmentShader = `
void main() {
    if(gl_PointCoord.x<0.5 && gl_PointCoord.y<0.5){
      gl_FragColor = vec4(1.0,0.0,0.0,1.0);
    }else{
      gl_FragColor = vec4(0.0,0.0,1.0,1.0);
    }
}
`

//圆点
const vertexShader = `
void main(){
  gl_PointSize = 20.0;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
// 片元着色器代码
const fragmentShader = `
void main() {
  // vec2(0.5, 0.5)是方形点的圆心
  //计算当前点到0.5,0.5的距离
  float r = distance(gl_PointCoord, vec2(0.5, 0.5));
  if(r < 0.5){
    // 方形区域片元距离几何中心半径小于0.5，像素颜色设置红色
    gl_FragColor = vec4(0.0,1.0,1.0,1.0);
  }else {
    // 方形区域距离几何中心半径不小于0.5的片元剪裁舍弃掉：
    discard;
  }
}
`

//不同size的点
const sizes = new Float32Array([
    1.0, //顶点1对应方形点尺寸缩放倍数
    0.8, //顶点2
    0.6, //顶点3
    0.4, //顶点4
    0.2, //顶点5
]);
// 1个数为一组表示对应顶点gl_PointSize的缩放倍数
geometry.attributes.size = new THREE.BufferAttribute(sizes, 1);

// 顶点着色器代码
const vertexShader = `
attribute float size;
void main(){
  gl_PointSize = 20.0 * size;
  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
`
// 片元着色器代码
const fragmentShader = `
void main() {
    gl_FragColor = vec4(0.0,1.0,1.0,1.0);
}
`
```
