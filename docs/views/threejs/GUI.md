---
title: GUI
date: 2023-12-29
tags:
- gui
categories:
- threejs
isShowComments: false
---

<Boxx/>
可视化调参
<!-- more -->

[[toc]]

## 单个gui

```javascript
// 从threejs扩展库引入gui.js
import { GUI } from '../../../three.js/examples/jsm/libs/lil-gui.module.min.js';


//创建一个GUI对象，你可以看到浏览器右上角多了一个交互界面，GUI本质上就是一个前端js库。
const gui = new GUI();
//改变交互界面style属性
gui.domElement.style.right = '0px';
gui.domElement.style.width = '300px';


//创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
const obj = {
    x: 30,
    y: 60,
    z: 300,
};
// gui界面上增加交互界面，改变obj对应属性
gui.add(obj, 'x', 0, 100);
gui.add(obj, 'y', 0, 50);
gui.add(obj, 'z', 0, 60);

// 可以不停地打印obj的值，这样通过gui界面拖动改变obj对象属性的的时候，便于观察obj的变化
setInterval(function () {
    console.log('x', obj.x);
    // console.log('y',obj.y);
    // console.log('z',obj.z);
}, 10)
```
## 调整光照
```javascript
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

// 光照强度属性.intensity
console.log('ambient.intensity',ambient.intensity);
// 通过GUI改变mesh.position对象的xyz属性
gui.add(ambient, 'intensity', 0, 2.0);

```
## 颜色,命名,步长,事件
```javascript
//颜色
gui.addColor(obj, 'color').onChange(function(value){
    // console.log('obj.color',obj.color);
    mesh.material.color.set(value);
});
//命名
gui.add(ambient, 'intensity', 0, 2.0).name('环境光强度');
//步长

//事件
gui.add(obj, 'x', 0, 180).onChange(function(value){
    // console.log('obj.x',obj.x);
    mesh.position.x = value;
});
```
## 下拉框,单选框
```javascript
// 下拉框,只能选择-100,0,100三个数(数组)
gui.add(obj, 'scale', [-100, 0, 100]).name('y坐标').onChange(function (value) {
    mesh.position.y = value;
});
// 下拉框,只能选择-100,0,100三个数(对象)
gui.add(obj, 'scale', {
    left: -100,
    center: 0,
    right: 100
    // 左: -100,//可以用中文
    // 中: 0,
    // 右: 100
}).name('位置选择').onChange(function (value) {
    mesh.position.x = value;
});
//勾选框,布尔值
gui.add(obj, 'bool').name('是否旋转');
// gui.add(obj, 'bool').onChange(function (value) {
//     // 点击单选框，控制台打印obj.bool变化
//     console.log('obj.bool',value);
// });
```
## 多个gui套娃
-普通分组
```javascript
const gui = new GUI(); //创建GUI对象 
const obj = {
    color: 0x00ffff,// 材质颜色
    specular: 0x111111,// 材质高光颜色
};
// 创建材质子菜单
const matFolder = gui.addFolder('材质');
// 材质颜色color
matFolder.addColor(obj, 'color').onChange(function(value){
    material.color.set(value);
});
// 材质高光颜色specular
matFolder.addColor(obj, 'specular').onChange(function(value){
    material.specular.set(value);
});
// 环境光子菜单
const ambientFolder = gui.addFolder('环境光');
// 环境光强度
ambientFolder.add(ambient, 'intensity',0,2);
// 平行光子菜单
const dirFolder = gui.addFolder('平行光');
// 平行光强度
dirFolder.add(directionalLight, 'intensity',0,2);
// 平行光位置
dirFolder.add(directionalLight.position, 'x',-400,400);
dirFolder.add(directionalLight.position, 'y',-400,400);
dirFolder.add(directionalLight.position, 'z',-400,400);

```
-套娃分组
```javascript
const gui = new GUI(); //创建GUI对象 
// gui.close();//关闭菜单
//创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
const obj = {
    color: 0x00ffff,// 材质颜色
    specular: 0x111111,// 材质高光颜色
};
// 创建材质子菜单
const matFolder = gui.addFolder('材质');
matFolder.close();//关闭菜单
// 材质颜色color
matFolder.addColor(obj, 'color').onChange(function(value){
    material.color.set(value);
});
// 材质高光颜色specular
matFolder.addColor(obj, 'specular').onChange(function(value){
    material.specular.set(value);
});
// 环境光子菜单
const ambientFolder = gui.addFolder('环境光');
ambientFolder.close();//关闭菜单
// 环境光强度  
ambientFolder.add(ambient, 'intensity',0,2);
// 平行光子菜单
const dirFolder = gui.addFolder('平行光');
dirFolder.close();//关闭菜单
// 平行光强度
dirFolder.add(directionalLight, 'intensity',0,2);
const dirFolder2 = dirFolder.addFolder('位置');//子菜单的子菜单
dirFolder2.close();//关闭菜单
// 平行光位置
dirFolder2.add(directionalLight.position, 'x',-400,400);
dirFolder2.add(directionalLight.position, 'y',-400,400);
dirFolder2.add(directionalLight.position, 'z',-400,400);
```
