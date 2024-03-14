---
title: CSS常用
date: 2022-07-23 15:31:26
tags: 
- CSS
categories:
- Front-end
isShowComments: false
---

<Boxx/>

[[toc]]

## 如何使用
-内联样式（Inline Styles）
```html
<p style="color: blue; font-size: 16px;">这是一个内联样式的段落。</p>
```
-嵌入式样式（Embedded Styles）
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>嵌入式样式示例</title>
    <style>
        p {
            color: green;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <p>这是一个嵌入式样式的段落。</p>
</body>
</html>
```
-外部样式（External Styles）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>外部样式示例</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <p>这是一个外部样式的段落。</p>
</body>
</html>
```
## 居中对齐方式
1.定位+margin
2.定位+transform
3.flex布局
4.grid布局
5.table布局
## css的继承性、层叠性、优先级
-继承性
```html
<style>
    body {
        font-family: Arial, sans-serif;
        color: #333;
    }
    p {
        font-size: 16px; /* 继承了父元素的字体和颜色 */
    }
</style>
<body>
    <p>这是一个段落。</p>
</body>
```
-层叠性
#student.table  #student table #student>table
-优先级
 !important > 行内样式 > id > 类/伪类/属性 > 标签 > 全局选择器

## flex弹力盒子
Flexbox（弹性盒子模型）是一种用于布局设计的 CSS3 新特性，它提供了一种更加有效和可预测的方式来对容器内的子元素进行排列、对齐和分布。

以下是 Flexbox 的一些基本概念：

-主轴（Main Axis）： Flex容器的主要方向，可以是水平方向（row）或垂直方向（column）。

-交叉轴（Cross Axis）： 与主轴垂直的轴，如果主轴是水平的，则交叉轴是垂直的，反之亦然。

-主轴起点和终点（Main Start / Main End）： 主轴的开始和结束位置，取决于主轴的方向。

-交叉轴起点和终点（Cross Start / Cross End）： 交叉轴的开始和结束位置，取决于交叉轴的方向。

Flexbox 的使用示例：
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flexbox Example</title>
    <style>
        .container {
            display: flex; /* 定义容器为弹性容器 */
            justify-content: space-between; /* 在主轴上均匀分布子元素 */
            align-items: center; /* 在交叉轴上居中对齐子元素 */
            height: 200px;
            border: 1px solid #ccc;
        }

        .item {
            flex: 1; /* 子元素自动平均分配剩余空间 */
            text-align: center;
            padding: 10px;
            border: 1px solid #ddd;
        }
    </style>
</head>
<body>

<div class="container">
    <div class="item">Item 1</div>
    <div class="item">Item 2</div>
    <div class="item">Item 3</div>
</div>

</body>
</html>

```
## 子绝父相
“子绝父相”是 CSS 布局中的一个概念，它指的是子元素使用绝对定位（absolute positioning），而父元素使用相对定位（relative positioning）来实现相对位置关系。

在使用绝对定位的子元素时，如果其父元素设置了相对定位，子元素的位置将相对于父元素进行定位，而不是相对于整个文档流。

下面是一个简单的示例：

HTML 结构：
```html
<div class="parent">
    <div class="child"></div>
</div>

```
CSS 样式：
```css
.parent {
    position: relative; /* 设置父元素相对定位 */
    width: 300px;
    height: 200px;
    background-color: lightblue;
}

.child {
    position: absolute; /* 设置子元素绝对定位 */
    top: 20px; /* 相对于父元素顶部偏移 20px */
    left: 50px; /* 相对于父元素左侧偏移 50px */
    width: 100px;
    height: 100px;
    background-color: coral;
}

```
## SASS  LESS
-SASS
```scss
// 定义变量
$primary-color: #3498db;
$secondary-color: #2ecc71;

// 定义一个 mixin
@mixin box-shadow($x, $y, $blur, $color) {
  box-shadow: $x $y $blur $color;
}

// 定义嵌套规则和使用变量、mixin
body {
  font-family: Arial, sans-serif;
}

.container {
  background-color: $primary-color;
  padding: 20px;

  // 嵌套规则
  h1 {
    color: $secondary-color;
  }

  // 使用 mixin
  .box {
    @include box-shadow(2px, 2px, 5px, #ccc);
  }
}

// 继承样式
.success {
  @extend .box;
  background-color: $secondary-color;
  color: white;
}

```
在这个例子中：

使用 $primary-color 和 $secondary-color 定义了两个颜色变量。
使用 @mixin 定义了一个名为 box-shadow 的 mixin，可以在其他地方重复使用。
使用嵌套规则，清晰地表示了选择器之间的层级关系。
使用 @include 引用了上面定义的 box-shadow mixin。
使用 @extend 实现了样式的继承，.success 类继承了 .box 类的样式。
上述 Sass 代码需要通过 Sass 编译器编译成普通的 CSS，然后在 HTML 中引入生成的 CSS 文件。这样，可以利用 Sass 提供的功能来提高样式表的可维护性和可读性。

-less

```less
// 定义变量
@primary-color: #3498db;
@secondary-color: #2ecc71;

// 定义混合（Mixin）
.box-shadow(@x, @y, @blur, @color) {
  box-shadow: @x @y @blur @color;
}

// 定义嵌套规则和使用变量、混合
body {
  font-family: Arial, sans-serif;
}

.container {
  background-color: @primary-color;
  padding: 20px;

  // 嵌套规则
  h1 {
    color: @secondary-color;
  }

  // 使用混合
  .box {
    .box-shadow(2px, 2px, 5px, #ccc);
  }
}

// 继承样式
.success {
  .box-shadow(2px, 2px, 5px, @secondary-color);
  background-color: @secondary-color;
  color: white;
}

```
在这个例子中：

使用 @primary-color 和 @secondary-color 定义了两个颜色变量。
使用 .box-shadow 定义了一个混合，可以在其他地方重复使用。
使用嵌套规则，清晰地表示了选择器之间的层级关系。
使用 .box-shadow 混合引用了上面定义的混合。
使用 .success 类继承了 .box 类的样式，并使用了混合设置阴影。
与 Sass 相似，Less 也是一种 CSS 预处理器，提供了变量、混合、嵌套规则等功能，使样式表更加模块化和易于维护。同样，Less 文件需要通过 Less 编译器编译成普通的 CSS 文件，然后在 HTML 中引入生成的 CSS 文件。
