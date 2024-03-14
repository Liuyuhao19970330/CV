---
title: 渲染器和前端UI界面
date: 2023-12-21
tags:
- threeBase


categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## UI交互

```javascript
document.getElementById('red').addEventListener('click',function(){
    mesh.material.color.set(0xff0000);
})
document.getElementById('green').addEventListener('click',function(){
    mesh.material.color.set(0x00ff00);
})
```
## 页面背景的透明度和颜色

```javascript
 renderer.setClearColor(0xff0000, 0.2); //设置背景颜色和透明度
 renderer.setClearAlpha(0.5);// 改变背景透明度值
```
## canvas输出为图片
```javascript
// 鼠标单击id为download的HTML元素，threejs渲染结果以图片形式下载到本地
document.getElementById('download').addEventListener('click',function(){
    // 创建一个超链接元素，用来下载保存数据的文件
    const link = document.createElement('a');
    // 通过超链接herf属性，设置要保存到文件中的数据
    const canvas = renderer.domElement; //获取canvas对象
    link.href = canvas.toDataURL("image/png");
    link.download = 'threejs.png'; //下载文件名
    link.click(); //js代码触发超链接元素a的鼠标点击事件，开始下载文件到本地
})
```
## 深度冲突 闪屏 闪烁 
```javascript
// 在使用透视投影相机渲染的时候，两个模型距离很近，如果距离相机比较远，也可能出现闪烁
mesh2.position.z = 0.1;

// 当两个mesh间隙过小，或者重合，你设置webgl渲染器对数深度缓冲区也是无效的。
// mesh2.position.z = 0.00001;
```
## 加载进度条(难点)
```javascript
const percentDiv = document.getElementById("per"); // 获取进度条元素
loader.load("../工厂.glb", function (gltf) {
    model.add(gltf.scene);
    // 加载完成，隐藏进度条
    // document.getElementById("container").style.visibility ='hidden';
    document.getElementById("container").style.display = 'none';
}, function (xhr) {
    // 控制台查看加载进度xhr
    // 通过加载进度xhr可以控制前端进度条进度   
    const percent = xhr.loaded / xhr.total;
    console.log('加载进度' + percent);
     
   
    percentDiv.style.width = percent * 400 + "px"; //进度条元素长度
    percentDiv.style.textIndent = percent * 400 + 5 + "px"; //缩进元素中的首行文本
    // Math.floor:小数加载进度取整
    percentDiv.innerHTML = Math.floor(percent * 100) + '%'; //进度百分比
})
```
原生HTML,CSS进度条,直接用
```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Three.js中文网：http://www.webgl3d.cn/</title>
    <style>
        body {
            margin: 0;
            overflow: hidden;
        }
        /* 进度条css样式 */
        #container {
            position: absolute;
            width: 400px;
            height: 16px;
            top: 50%;
            left:50%;
            margin-left: -200px;
            margin-top: -8px;
            border-radius: 8px;           
            border: 1px solid #009999;          
            overflow: hidden;
        }
        #per {
            height: 100%;
            width: 0px;
            background: #00ffff;
            color: #00ffff;
            line-height: 15px;          
        }
    </style>
</head>

<body style="background-color: #001111;">
    <div id="container">
        <!-- 进度条 -->
        <div id="per"> </div>
    </div>
    <script>        
        const percentDiv = document.getElementById("per");// 获取进度条元素
        percentDiv.style.width = 0.8*400 + "px";//进度条元素长度
        percentDiv.style.textIndent = 0.8*400 + 5 +"px";//缩进元素中的首行文本
        percentDiv.innerHTML =  "80%";//进度百分比
    </script>
</body>

</html>
```
