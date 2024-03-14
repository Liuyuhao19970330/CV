---
title: 缓冲几何体BufferGeometry
date: 2023-12-01
tags:
- threeBase

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]
## tip
-缓冲几何体
缓冲几何体本来没有固定形状,靠你自己去构造
-Float32Array
Float32Array 是 JavaScript 中的一种类型化数组（Typed Array），用于表示一个由 32 位浮点数组成的数组。它是 ECMAScript 2015（ES6）引入的一项特性，用于更有效地处理二进制数据。

Float32Array 对象创建的是一个固定长度的数组，每个元素都是 32 位浮点数。这种类型的数组对于处理图形、音频、网络数据等涉及到二进制数据的任务非常有用，因为它提供了直接的内存访问和更高效的数学运算。
就是一个浮点数的数组,就是数组

## 画几个点
```javascript
const geometry = new THREE.BufferGeometry(); //创建一个几何体对象
//类型数组创建顶点数据
const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    50, 0, 0, //顶点2坐标
    0, 100, 0, //顶点3坐标
    0, 0, 10, //顶点4坐标
    0, 0, 100, //顶点5坐标
    50, 0, 10, //顶点6坐标
]);
console.log('vertices',vertices)
// 创建属性缓冲区对象
const attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
// 设置几何体attributes属性的位置属性
console.log('attribue',attribue)
geometry.attributes.position = attribue;
// 点渲染模式
const material = new THREE.PointsMaterial({
    color: 0xffff00,
    size: 10.0 //点对象像素尺寸
}); 
const points = new THREE.Points(geometry, material);
```
## 画一条线
```javascript

// 线条渲染模式
const material = new THREE.LineBasicMaterial({
    color: 0xffff00 //线条颜色
}); //材质对象
// 创建线模型对象   构造函数：Line、LineLoop、LineSegments
const line = new THREE.Line(geometry, material); //线条模型对象
```

## 画一个网格模型
注意逆时针画,对着你的是正面.
```javascript
const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff, //材质颜色
    // side: THREE.FrontSide, //默认只有正面可见
    // side: THREE.BackSide, //设置只有背面可见
    side: THREE.DoubleSide, //两面可见
});
// 网格模型本质：一个一个三角形(面)构成
const mesh = new THREE.Mesh(geometry, material); 
```
## index画
```javascript
import * as THREE from 'three';

const geometry = new THREE.BufferGeometry(); //创建一个几何体对象
//类型数组创建顶点数据
const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    80, 0, 0, //顶点2坐标
    80, 80, 0, //顶点3坐标
    0, 80, 0, //顶点4坐标
    0, 0, 80, //顶点5坐标
    80, 0, 80, //顶点6坐标
    80, 80, 80, //顶点7坐标
    0, 80, 80, //顶点8坐标
]);
// 创建属性缓冲区对象
const attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribue;

// Uint16Array类型数组创建顶点索引数据
const indexes = new Uint16Array([
    0, 1, 2, 0, 2, 3,6,2,1,6,1,5,4,5,6,6,4,7,4,7,0,0,3,7
])
// BufferAttribute表示顶点索引属性的值
geometry.index = new THREE.BufferAttribute(indexes, 1); //1个为一组
// 索引数据赋值给几何体的index属性
const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff, 
    // side: THREE.FrontSide, //默认只有正面可见
    // side: THREE.BackSide, //设置只有背面可见
    side: THREE.DoubleSide, //两面可见
     //wireframe:true,//线条模式渲染mesh对应的三角形数据
});
// 网格模型本质：一个一个三角形(面)构成
const mesh = new THREE.Mesh(geometry, material);

export default mesh;
```
## 顶点法线
写法向量才可以显示光照效果
```javascript
import * as THREE from 'three';

const geometry = new THREE.BufferGeometry(); //创建一个几何体对象
//类型数组创建顶点数据
const vertices = new Float32Array([
    0, 0, 0, //顶点1坐标
    80, 0, 0, //顶点2坐标
    80, 80, 0, //顶点3坐标
    0, 0, 0, //顶点4坐标   和顶点1位置相同
    80, 80, 0, //顶点5坐标  和顶点3位置相同
    0, 80, 0, //顶点6坐标
]);
// 创建属性缓冲区对象
const attribue = new THREE.BufferAttribute(vertices, 3); //3个为一组，表示一个顶点的xyz坐标
// 设置几何体attributes属性的位置属性
geometry.attributes.position = attribue;

// 每个顶点的法线数据和顶点位置数据一一对应
const normals = new Float32Array([
    0, 0, 1, //顶点1法线( 法向量 )
    0, 0, 1, //顶点2法线
    0, 0, 1, //顶点3法线
    0, 0, 1, //顶点4法线
    0, 0, 1, //顶点5法线
    0, 0, 1, //顶点6法线
]);
// 设置几何体的顶点法线属性.attributes.normal
geometry.attributes.normal = new THREE.BufferAttribute(normals, 3); //3个为一组,表示一个顶点的法线数据

// MeshBasicMaterial不受光照影响
// 使用受光照影响的材质，Geometry几何体需要定义顶点法线数据
const material = new THREE.MeshLambertMaterial({
    color: 0x0000ff, 
    side: THREE.DoubleSide, //两面可见
});
// 网格模型本质：一个一个三角形(面)构成
const mesh = new THREE.Mesh(geometry, material);

export default mesh;
```