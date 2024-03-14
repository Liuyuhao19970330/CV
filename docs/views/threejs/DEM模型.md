---
title: DEM模型
date: 2023-12-26
tags:
- threeBase

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## 查看或设置gltf几何体顶点

```javascript
// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); 

loader.load("../地形.glb", function (gltf) { 
    model.add(gltf.scene); 
    //mesh表示地形网格模型
    const mesh = gltf.scene.children[0];
    // 顶点位置数据
    const pos = mesh.geometry.attributes.position;
    const count = pos.count; //几何体顶点数量
    // 批量设置所有几何体顶点位置的y坐标
    for (let i = 0; i < count; i++) {
        const y = pos.getY(i);//获取第i+1个顶点y坐标
        pos.setY(i,y*2)//设置第i+1个顶点y坐标为自身2倍
    }
})


export default model;
```
## 22.山脉地形高度可视化
根据DEM数据的高度来设置颜色
```javascript
loader.load("../地形.glb", function (gltf) { //gltf加载成功后返回一个对象

    model.add(gltf.scene); //三维场景添加到model组对象中
    //mesh表示地形网格模型
    const mesh = gltf.scene.children[0];
    // 1. 山脉顶点数据
    const pos = mesh.geometry.attributes.position;
    const count = pos.count;//几何体顶点数量

    // 2. 计算模型y坐标高度差
    const yArr = [];//顶点所有y坐标，也就是地形高度
    for (let i = 0; i < count; i++) {
        yArr.push(pos.getY(i));//获取顶点y坐标，也就是地形高度
    }
    yArr.sort();//y坐标排序，以便于计算地形高度差
    const miny = yArr[0];
    const maxy = yArr[yArr.length - 1];
    const height = maxy - miny; //山脉整体高度  

    // 3. 计算每个顶点的颜色值
    const colorsArr = [];
    const c1 = new THREE.Color(0x0000ff);//山谷颜色
    const c2 = new THREE.Color(0xff0000);//山顶颜色
    for (let i = 0; i < count; i++) {
        //当前高度和整体高度比值
        const percent = (pos.getY(i) - miny) / height;
        const c = c1.clone().lerp(c2, percent);//颜色插值计算
        colorsArr.push(c.r, c.g, c.b); 
    }
    const colors = new Float32Array(colorsArr);
    // 设置几何体attributes属性的颜色color属性
    mesh.geometry.attributes.color = new THREE.BufferAttribute(colors, 3);
    // 4. 设置材质，使用顶点颜色渲染
    mesh.material = new THREE.MeshLambertMaterial({
        vertexColors:true,
    });
})


//三色
loader.load("../地形.glb", function (gltf) { //gltf加载成功后返回一个对象

    model.add(gltf.scene); //三维场景添加到model组对象中
    //mesh表示地形网格模型
    const mesh = gltf.scene.children[0];
    const pos = mesh.geometry.attributes.position;
    const count = pos.count; //几何体顶点数量

    // 1. 计算模型y坐标高度差
    const yArr = []; //顶点所有y坐标，也就是地形高度
    for (let i = 0; i < count; i++) {
        yArr.push(pos.getY(i)); //获取顶点y坐标，也就是地形高度
    }
    yArr.sort();//数组元素排序，从小到大
    const miny = yArr[0];//y最小值
    const maxy = yArr[yArr.length - 1];//y最大值
    
    const height = maxy - miny; //山脉整体高度  

    // 2. 计算每个顶点的颜色值
    const colorsArr = [];
    const color1 = new THREE.Color(0x0000ff); //山谷颜色
    const color2 = new THREE.Color(0x00ff00); //山腰颜色
    const color3 = new THREE.Color(0xff0000); //山顶颜色
    for (let i = 0; i < count; i++) {
        //当前高度和整体高度比值
        const percent = (pos.getY(i) - miny) / height;
        // 颜色插值计算
        let c = null;
        if (percent <= 0.5) { //0.5作为颜色插值分界点
            // color1到color2之间插值
            c = color1.clone().lerp(color2, percent * 2)
        } else {
            // color2到color3之间插值
            c = color2.clone().lerp(color3, (percent - 0.5) * 2)
        }
        colorsArr.push(c.r, c.g, c.b);
    }
    const colors = new Float32Array(colorsArr);
    // 设置几何体attributes属性的颜色color属性
    mesh.geometry.attributes.color = new THREE.BufferAttribute(colors, 3);
    // 3. 设置材质，使用顶点颜色渲染
    mesh.material = new THREE.MeshLambertMaterial({
        vertexColors: true,
    });
})
```
