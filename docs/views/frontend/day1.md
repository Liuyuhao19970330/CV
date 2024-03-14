---
title: day1
catalog: true
date: 2023-03-12 13:59:44
tags: 
- Day
categories:
- Front-end
isShowComments: false
---

<Boxx/>

[[toc]]

## html入门代码
html基础
```html
<!DOCTYPE html> <!-- 声明文档类型 -->
<html lang="en"> <!-- 指定文档的语言 -->
<head>
    <meta charset="UTF-8"> <!-- 设置字符编码为UTF-8，确保页面可以正确显示各种字符 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- 指定IE浏览器使用最新的渲染模式 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- 设置页面在移动设备上的视口 -->
    <title>Document</title> <!-- 设置页面标题 -->
</head>
<body>
    <font size="6" color="red">hello,liuyuhao</font> <!-- 使用font标签设置文字大小为6，颜色为红色，显示文本 "hello,liuyuhao" -->
</body>
</html>
```
## 特殊字符
空格怎么写？
```html
<body>
    你若安好便是晴天&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;你若幸福便是终点    100&yen;

    <br>

    Copyright &copy; 2004 - 2023&nbsp;&nbsp;京东JD.com 版权所有

    <br>

    Copyright&nbsp;©&nbsp;2004&nbsp;-&nbsp;2023&nbsp;&nbsp;京东JD.com&nbsp;版权所有

</body>
```
## 相关标签
```html
    <p>单行<p>
    换行<br> 
    <b>粗体</b>
    <i>斜体</i>
    <u>下划线</u>
    <mark>标记</mark>
    <h1>一级标题</h1>
    <h2>二级标题</h2>
    <h3>三级标题</h3>
    <h4>四级标题</h4>
    <h5>五级标题</h5>
    <h6>六级标题</h6>
```
## 列表
```html
<!-- list -->
     <ul type="square">
        <li>刘宇豪</li>
        <li>刘宇豪</li>
        <li>刘宇豪</li>
     </ul>
     <!-- 
        有序列表 ol(order list)
            属性
                type
                    a 表示小写英文字母编号
                    A 表示大写英文字母编号
                    i 表示小写罗马数字编号
                    I 表示大写罗马数字编号
                    1 表示数字编号（默认）

        列表项  li(list item)
      -->
      <ol type="A">
        <li>李易峰</li>
        <li>李云迪</li>
        <li>吴亦凡</li>
     </ol>
```





