---
title: PBR材质与纹理贴图
date: 2024-01-08
tags:
- threeBase

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## 金属度和粗糙度

```javascript
loader.load("../../金属.glb", function (gltf) { 
    // 递归遍历所有模型节点批量修改材质
    gltf.scene.traverse(function(obj) {
        if (obj.isMesh) {//判断是否是网格模型
            // console.log('obj.material',obj.material);
            // 重新设置材质的金属度和粗糙度属性
            obj.material.metalness = 1.0;//金属度
            obj.material.roughness = 0.5;//表面粗糙度
            
            // obj.material = new THREE.MeshStandardMaterial({
            //     color: obj.material.color, //读取材质原来的颜色
            //     // 金属度属性metalness：材质像金属的程度, 非金属材料,如木材或石材,使用0.0,金属使用1.0。
            //     // metalness默认0.5,0.0到1.0之间的值可用于生锈的金属外观
            //     metalness: 1.0,
            //     // metalness: 0.0,//没有金属质感    
            //     // 粗糙度属性roughness:模型表面粗糙程度,0.0表示平滑的镜面反射,1.0表示完全漫反射,默认0.5                      
            //     roughness: 0.5,
            //     // roughness: 1.0,//设置到完全漫反射状态，表面金属质感比较弱
            //     // roughness: 0.0,//完全镜面反射，就像一面镜子一样，注意配合环境贴图观察更明显
            // })
        }
    });
    model.add(gltf.scene);
})

```
## 环境贴图

```javascript
const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景
// 加载环境贴图
// 加载周围环境6个方向贴图
// 上下左右前后6张贴图构成一个立方体空间
// 'px.jpg', 'nx.jpg'：x轴正方向、负方向贴图  p:正positive  n:负negative
// 'py.jpg', 'ny.jpg'：y轴贴图
// 'pz.jpg', 'nz.jpg'：z轴贴图
// CubeTexture表示立方体纹理对象，父类是纹理对象Texture
const textureCube = new THREE.CubeTextureLoader()
    .setPath('../../环境贴图/环境贴图0/')
    .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);


    
loader.load("../../金属.glb", function (gltf) {
    // 递归遍历所有模型节点批量修改材质
    gltf.scene.traverse(function (obj) {
        if (obj.isMesh) { //判断是否是网格模型
            // console.log('obj.material',obj.material);
            // 重新设置材质的金属度和粗糙度属性
            obj.material.metalness = 1.0; //金属度
            obj.material.roughness = 0.35; //表面粗糙度
            obj.material.envMap = textureCube; //设置环境贴图
            // envMapIntensity：控制环境贴图对mesh表面影响程度
            obj.material.envMapIntensity = 1.0;//默认值1, 设置为0.0,相当于没有环境贴图


            // obj.material = new THREE.MeshStandardMaterial({
            //     color: obj.material.color, //读取材质原来的颜色
            //     metalness: 1.0, //金属度
            //     roughness: 0.5, //粗糙度
            //     envMap: textureCube, //设置pbr材质环境贴图
            //     // envMapIntensity：控制环境贴图对mesh表面影响程度
            //     envMapIntensity: 0.0, //默认值1, 设置为0.0,相当于没有环境贴图
            // })
        }
    });
    model.add(gltf.scene);
})

```
## 环境贴图影响强度

```javascript
loader.load("../工厂.glb", function (gltf) {
    gltf.scene.traverse(function (obj) {
        if (obj.isMesh) { //判断是否是网格模型
            // obj.material.envMap = textureCube; //设置环境贴图
            obj.material.envMapIntensity = 1.0;
        }
    });
    model.add(gltf.scene);
})

```

## 自带pbr材质模型
```javascript
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';

import gui from './gui.js';

// 创建材质子菜单
const matFolder1 = gui.addFolder('外壳材质');
matFolder1.close(); //关闭菜单
const matFolder2 = gui.addFolder('玻璃材质');
matFolder2.close(); //关闭菜单




const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景
// 加载环境贴图
const textureCube = new THREE.CubeTextureLoader()
    .setPath('../../环境贴图/环境贴图1/')
    .load(['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg']);
textureCube.encoding = THREE.sRGBEncoding; //设置纹理贴图编码方式和WebGL渲染器一致    
loader.load("../车pbr.glb", function (gltf) {
    model.add(gltf.scene);
    // 注意如果车外壳或玻璃共享了材质，修改一个其他的也会变化和影响

    const mesh1 = gltf.scene.getObjectByName('外壳01');
    mesh1.material.envMap = textureCube; //环境贴图
    mesh1.material.envMapIntensity = 1.0; ////环境贴图对Mesh表面影响程度


    const mesh2 = gltf.scene.getObjectByName('玻璃01');
    mesh2.material.envMap = textureCube; //环境贴图
    mesh2.material.envMapIntensity = 1.0; ////环境贴图对Mesh表面影响程度

    // 查看threejs解析的PBR材质
    gltf.scene.traverse(function(obj) {
        if (obj.isMesh) {
            console.log('obj.material',obj.material);
        }
    });
    console.log('外壳',mesh1.material);
    console.log('玻璃',mesh2.material);

    const obj = {
        color1: mesh1.material.color.getHex(), // 外壳颜色
        color2: mesh2.material.color.getHex(), // 玻璃颜色
    };
    // 车壳材质gui界面
    matFolder1.addColor(obj, 'color1').onChange(function (value) {
        mesh1.material.color.set(value);
    });
    matFolder1.add(mesh1.material, 'metalness', 0, 1);
    matFolder1.add(mesh1.material, 'roughness', 0, 1);
    matFolder1.add(mesh1.material, 'clearcoat', 0, 1);
    matFolder1.add(mesh1.material, 'clearcoatRoughness', 0, 1);
    matFolder1.add(mesh1.material, 'envMapIntensity', 0, 10);

    // 玻璃材质gui界面
    matFolder2.addColor(obj, 'color2').onChange(function (value) {
        mesh2.material.color.set(value);
    });
    matFolder2.add(mesh2.material, 'metalness', 0, 1);
    matFolder2.add(mesh2.material, 'roughness', 0, 1);
    matFolder2.add(mesh2.material, 'transmission', 0, 1);
    matFolder2.add(mesh2.material, 'ior', 1, 2.333);
    matFolder2.add(mesh2.material, 'envMapIntensity', 0, 10);
})
export default model;
```
