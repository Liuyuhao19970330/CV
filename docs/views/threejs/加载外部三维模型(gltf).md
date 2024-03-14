---
title: 加载外部三维模型(gltf)
date: 2023-12-02
tags:
- threeBase

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## 加载模型

```javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景

loader.load("../../工厂.gltf", function (gltf) { //gltf加载成功后返回一个对象
    // console.log('控制台查看gltf对象结构', gltf);
    // console.log('场景3D模型数据', gltf.scene);
    model.add(gltf.scene); //三维场景添加到model组对象中
})


```
## 相机设置

```javascript
//解决加载gltf格式模型颜色偏差问题
renderer.outputEncoding = THREE.sRGBEncoding;

// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
// 相机控件.target属性在OrbitControls.js内部表示相机目标观察点，默认0,0,0
// console.log('controls.target', controls.target);
controls.target.set(x, y, z); //与lookAt参数保持一致
controls.update(); //update()函数内会执行camera.lookAt(controls.target)


// 渲染循环
function render() {
    // 渲染循环中不停地打印相机的位置属性，你可以通过相机控件旋转或缩放三维场景，同时通过浏览器控制台观察相机位置变化。
    console.log('camera.position', camera.position);
    // 浏览器控制台查看controls.target变化，辅助设置lookAt参数
    console.log('controls.target', controls.target);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
```

## 模型命名(程序与美术协作)—层级模型节点选择
```javascript
const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景

loader.load("./简易小区.glb", function (gltf) {
    // console.log('控制台查看gltf对象结构', gltf);
    console.log('场景3D模型树结构', gltf.scene);


    // 返回名.name为"1号楼"对应的对象
    const nameNode = gltf.scene.getObjectByName("1号楼");
    nameNode.material.color.set(0xff0000);//改变1号楼Mesh材质颜色

   //获得所有'洋房'房子的父对象
    const obj = gltf.scene.getObjectByName('洋房');
    console.log('obj', obj); //控制台查看返回结果
    console.log('obj.children', obj.children); 
    // obj的所有子对象.children都是Mesh，改变Mesh对应颜色
    obj.children.forEach(function (mesh) {
        mesh.material.color.set(0xffff00);
    })
        model.add(gltf.scene); //三维场景添加到model组对象中
})
```
## 递归遍历层级模型修改材质
```javascript
loader.load("../../工厂.glb", function (gltf) { 
    // 递归遍历所有模型节点批量修改材质
    gltf.scene.traverse(function(obj) {
        if (obj.isMesh) {//判断是否是网格模型
            // 重新设置材质
            obj.material = new THREE.MeshLambertMaterial({
                color:0xffffff,
            });
        }
    });
    model.add(gltf.scene);
})
```
## 外部模型材质共享和解决方法
```javascript
// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景

loader.load("./简易小区-共享材质.glb", function (gltf) {
    const mesh1 = gltf.scene.getObjectByName("1号楼");
    //1. 改变1号楼Mesh材质颜色
    // 由于不同的Mesh共享了1号楼Mesh的材质，当你mesh1.material改变mesh1材质，本质上是改变所有楼Mesh的材质
    // mesh1.material.color.set(0xff0000);

    //2. 通过.name标记材质，测试mesh1和mesh2是否共享了材质
    mesh1.material.name = '楼房材质';//通过name标记mesh1对应材质
    const mesh2 = gltf.scene.getObjectByName("2号楼");
    //通过name相同，可以判断mesh1.material和mesh2.material共享了同一个材质对象
    console.log('mesh2.material.name', mesh2.material.name);

    //3. 用代码方式解决mesh共享材质问题
    gltf.scene.getObjectByName("小区房子").traverse(function (obj) {
        if (obj.isMesh) {
            // .material.clone()返回一个新材质对象，和原来一样，重新赋值给.material属性
            obj.material = obj.material.clone();
        }
    });
    mesh1.material.color.set(0xffff00);
    mesh2.material.color.set(0x00ff00);

    model.add(gltf.scene);
})

export default model;
```
## 纹理.encoding和渲染器.outputEncoding
```javascript
//解决加载gltf格式模型颜色偏差问题
renderer.outputEncoding = THREE.sRGBEncoding;
texture.encoding = THREE.sRGBEncoding; //和渲染器.outputEncoding一样值
```
## 手机模型更改贴图
```javascript
const texLoader = new THREE.TextureLoader();
const texture = texLoader.load('./黑色.png');// 加载手机mesh另一个颜色贴图
texture.encoding = THREE.sRGBEncoding; //和渲染器.outputEncoding一样值

// 纹理对象texture.flipY默认值
console.log('texture.flipY', texture.flipY);
texture.flipY = false;//是否翻转纹理贴图


loader.load("../手机模型.glb", function (gltf) {
    // console.log('gltf.scene',gltf.scene);
    const mesh = gltf.scene.children[0]; //获取Mesh
    // 查看gltf里面Mesh颜色贴图的.flipY值
    console.log('.flipY', mesh.material.map.flipY);

    mesh.material.map = texture; //更换不同风格的颜色贴图

    model.add(gltf.scene);
})
```