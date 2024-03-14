---
title: 数学-矩阵
date: 2024-01-05
tags: 
- math

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## Matrix4
```javascript
const mat4 = new THREE.Matrix4();
// 创建一个平移矩阵(沿着x轴平移50)
// 1, 0, 0, x,
// 0, 1, 0, y,
// 0, 0, 1, z,
// 0, 0, 0, 1
mat4.elements=[1,0,0,0, 0,1,0,0, 0,0,1,0, 50, 0, 0, 1];

// 空间中p点坐标
const p = new THREE.Vector3(50,0,0);//最后一位用1代替(50,0,0,1)
// 矩阵对p点坐标进行平移变换
p.applyMatrix4(mat4);
console.log('查看平移后p点坐标',p);

mesh.position.copy(p);//用小球可视化p点位置
```
## 矩阵乘法
```javascript
// 空间中p点坐标
const p = new THREE.Vector3(50,0,0);


const T = new THREE.Matrix4();
T.makeTranslation(50,0,0);//平移矩阵
const R = new THREE.Matrix4();
R.makeRotationZ(Math.PI/2);//旋转矩阵

// p点矩阵变换
// p.applyMatrix4(T);//先平移
// p.applyMatrix4(R);//后旋转

// R * T * p:先平移、后旋转
const modelMatrix = R.clone().multiply(T);
p.applyMatrix4(modelMatrix);

// // T * R * p：先旋转、后平移
// const modelMatrix = R.clone().multiply(T);
// p.applyMatrix4(modelMatrix);

mesh.position.copy(p);//用小球可视化p点位置
```
## 模型本地矩阵、世界矩阵
在计算机图形学中，模型本地矩阵（Model Matrix）和世界矩阵（World Matrix）是用于描述物体变换的两个关键概念。

模型本地矩阵（Model Matrix）：

模型本地矩阵用于描述一个物体相对于其自身坐标系的变换。它包括了平移、旋转、缩放等变换，将一个物体从其本地坐标系变换到世界坐标系。对于一个模型，其本地矩阵定义了模型的局部坐标系中的位置、方向和大小。当多个模型被组合成一个场景时，每个模型都可以有自己的本地矩阵，以便正确放置和定位。

世界矩阵（World Matrix）：

世界矩阵用于描述一个物体在整个世界坐标系中的变换。它考虑了模型本地矩阵的效果，并将一个模型从其本地坐标系转换到整个场景的世界坐标系。世界矩阵考虑了物体在场景中的位置、方向和大小，以及可能的父子关系。当多个模型被放置在一个场景中时，它们各自的世界矩阵确定了它们在整个场景中的最终位置。

在图形渲染过程中，这两个矩阵通常被用于变换顶点坐标。当顶点坐标通过模型本地矩阵变换后，再经过投影矩阵变换，最终得到屏幕坐标，用于绘制在屏幕上。

总体而言，模型本地矩阵和世界矩阵是一种将物体从局部坐标系变换到整个场景坐标系的数学表示。
```javascript
mesh.position.set(2,3,4);
const group = new THREE.Group();
group.add(mesh);
group.position.set(2,3,4);

group.updateMatrixWorld();//group和子对象的世界矩阵、本地矩阵属性会更新

console.log('本地矩阵',mesh.matrix);
console.log('世界矩阵',mesh.matrixWorld);
```
## render自动更新模型矩阵
模型矩阵（Model Matrix）是在计算机图形学中用于描述一个物体在三维空间中的变换的矩阵。它是一种仿射矩阵，包含了平移（Translation）、旋转（Rotation）、缩放（Scale）等变换的信息。
```javascript
// 渲染循环
function render() {
    // render渲染时候，会获取模型`.position`等属性更新计算模型矩阵值
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
```
## 视图矩阵、投影矩阵
视图矩阵（View Matrix）和投影矩阵（Projection Matrix）是在计算机图形学中用于实现相机透视投影和视点变换的两个关键矩阵。

1.视图矩阵（View Matrix）：
视图矩阵描述了观察者（相机）的位置和方向，以及观察场景的方式。它将世界坐标系中的物体变换到相机坐标系中。视图矩阵的目的是模拟观察者相对于世界中物体的位置和朝向，使得渲染时看起来像是从相机的视角观察物体。
视图矩阵通常包含了平移、旋转和可能的缩放等变换。当一个顶点坐标通过视图矩阵变换时，得到的坐标将是相对于相机的视角。
2.投影矩阵（Projection Matrix）：
投影矩阵定义了将三维坐标映射到二维屏幕坐标的方式，实现了透视投影。它决定了在屏幕上远近物体的大小和透视效果。投影矩阵通常是透视矩阵或正交矩阵，取决于场景中所需的投影类型。


3.透视投影：使得远处的物体看起来较小，近处的物体较大，以模拟人眼在现实中的透视效果。
4.正交投影：物体在屏幕上的大小不受其距离的影响，保持相对大小不变。
投影矩阵的应用是将场景中的物体坐标变换到裁剪空间（标准化设备坐标），再通过裁剪空间的坐标变换到屏幕坐标。

在图形渲染中，通常将视图矩阵和投影矩阵与模型矩阵相乘，以便将物体的局部坐标转换到最终屏幕上的坐标。整个变换过程可以表示为：
[ V = View \cdot Model ]
[ MVP = Projection \cdot V ]
其中，( Model ) 是模型矩阵，( View ) 是视图矩阵，( Projection ) 是投影矩阵，( MVP ) 是最终的模型-视图-投影矩阵。
```javascript
//场景旋转
// 渲染循环
function render() {
    // model.rotation.y+=0.01;
    scene.rotation.y+=0.01;
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

//相机旋转
// 渲染循环
let angle = 0; //用于圆周运动计算的角度值
const R = 260; //相机圆周运动的半径
function render() {
    angle += 0.01;
    // 相机y坐标不变，在XOZ平面上做圆周运动
    camera.position.x = R * Math.cos(angle);
    camera.position.z = R * Math.sin(angle);
    // 相机圆周运动过程，如果希望视线始终指向圆心，位置改变后必须重新执行lookAt指向圆心
    camera.lookAt(0,0,0);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
```
## 模型和相机分别缩放场景
```javascript
// 放大工厂模型(换句话说，能观察的范围更小了，工厂周边东西不能看到那么多了)
// model.scale.set(2,2,2);



//相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
// camera.position.set(202, 123, 125);
// 相机距离目标观察点更近(能观察到范围变小，在画布上工厂放大了)
camera.position.set(202*0.5, 123*0.5, 125*0.5);
camera.lookAt(0, 0, 0);
```
