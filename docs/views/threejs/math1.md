---
title: 数学-向量
date: 2024-01-02
tags: 
- math

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## Vector3长度
```javascript
const A = new THREE.Vector3(30,30,0);// 人起点A
const B = new THREE.Vector3(130,80,0);// 人运动结束点B
const AB = B.clone().sub(A);
const L = AB.length();//向量长度计算，A点到B点的距离
//向量的方向是方向,长度是速度或则其他
```
## 向量方向(归一化.normalize)
```javascript
//直线上两点坐标A和B
const A = new THREE.Vector3(-50,0,-50);
const B = new THREE.Vector3(100,0,100);
const AB = B.clone().sub(A);//AB向量
AB.normalize();//AB归一化表示直线AB的方向

// 单位向量AB的xyz每个分量分别乘以100
const T =  AB.clone().multiplyScalar(100);
//验证：单位向量每个分量乘以100，得到的向量长度就是100，相当于得到一个沿着AB方向移动100的向量，这就是单位向量的意义
console.log('向量T长度',T.length());

//沿着AB方向平移平移物体mesh距离100
// 把mesh.position的xyz三个分量分别加上向量T的xyz分量
mesh.position.add(T);
```
## 获取相机视线
```javascript
const dir = new THREE.Vector3();//用来表示相机视线
camera.getWorldDirection(dir);// 获取相机的视线方向
console.log('相机方向',dir);
console.log('单位向量',dir.length());

// dis向量表示相机沿着相机视线方向平移200的位移量
const dis = dir.clone().multiplyScalar(200);
// 相机沿着视线方向平移
camera.position.add(dis);


//gui
// 获取相机的视线方向
const dir = new THREE.Vector3();
camera.getWorldDirection(dir);
console.log('相机方向',dir);
console.log('单位向量',dir.length());

const pos0 = camera.position.clone();//记录相机初始位置
const gui = new GUI();
// L：相机沿着视线移动距离，从0~200
gui.add({L: 0}, 'L', 0, 200).onChange(function(v){
    const dis = dir.clone().multiplyScalar(v);//相机沿着视线偏移长度v
    const newPos = pos0.clone().add(dis);//相机初始位置+相机偏移向量    
    camera.position.copy(newPos);//新的位置赋值给相机位置
});
```
## 箭头辅助器(法向量)
```javascript
// 定义三维空间中的点A，坐标为 (0, 30, 0)
const A = new THREE.Vector3(0, 30, 0);//A点
// 定义三维空间中的点B，坐标为 (80, 0, 0)
const B = new THREE.Vector3(80, 0, 0);//B点

// 创建一个绿色小球来可视化点A的位置
const AMesh = createSphereMesh(0x00ff00, 2);
AMesh.position.copy(A);
// 创建一个红色小球来可视化点B的位置
const BMesh = createSphereMesh(0xff0000, 2);
BMesh.position.copy(B);
// 创建一个包含A、B两点小球的组
const group = new THREE.Group();
group.add(AMesh, BMesh);

// 计算从点A指向点B的向量AB
const AB = B.clone().sub(A);
// 计算向量AB的长度
const L = AB.length();
// 计算单位向量表示的AB方向
const dir = AB.clone().normalize();

// 创建一个箭头，表示从点A指向点B的方向
const arrowHelper = new THREE.ArrowHelper(dir, A, L);
group.add(arrowHelper);



//标明法线方向
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);

const p = mesh.geometry.attributes.position;
const n = mesh.geometry.attributes.normal;
const count = p.count;//顶点数量
for (let i = 0; i < count; i++) {
    // 顶点位置O
    const O = new THREE.Vector3(p.getX(i), p.getY(i), p.getZ(i));
    // 顶点位置O对应的顶点法线
    const dir = new THREE.Vector3(n.getX(i), n.getY(i), n.getZ(i));
    // 箭头可视化顶点法线
    const arrowHelper = new THREE.ArrowHelper(dir, O, 20);
    mesh.add(arrowHelper);
}

```
## 向量位移,速度,加速度
```javascript
//匀速运动
const v = new THREE.Vector3(10, 0, 10);//物体运动速度
const clock = new THREE.Clock();//时钟对象
let t = 0;
const pos0 = mesh.position.clone();//物体初始位置
// 渲染循环
function render() {
    const spt = clock.getDelta();//两帧渲染时间间隔(秒)
    t += spt;
    // 在t时间内，以速度v运动的位移量
    const dis = v.clone().multiplyScalar(t);
    // 网格模型当前的位置加上spt时间段内运动的位移量
    const newPos = pos0.clone().add(dis);
    mesh.position.copy(newPos);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

//位移累加
const v = new THREE.Vector3(10,0,10);//物体运动速度
const clock = new THREE.Clock();//时钟对象
// 渲染循环
function render() {
    const spt = clock.getDelta();//两帧渲染时间间隔(秒)
    // 在spt时间内，以速度v运动的位移量
    const dis = v.clone().multiplyScalar(spt);
    // 网格模型当前的位置加上spt时间段内运动的位移量
    mesh.position.add(dis);//把每一次的位移加上去了
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

//

```

## 模拟物体下落(重力加速度)
```javascript
//带入时间
const v = new THREE.Vector3(30, 0, 0);//物体初始速度
const clock = new THREE.Clock();//时钟对象
let t = 0;
const g = new THREE.Vector3(0, -9.8, 0);
const pos0 = mesh.position.clone();
// 渲染循环
function render() {
    if (mesh.position.y > 0) {
        const spt = clock.getDelta();//两帧渲染时间间隔(秒)
        t += spt;
        // 在t时间内，以速度v运动的位移量
        const dis = v.clone().multiplyScalar(t).add(g.clone().multiplyScalar(0.5 * t * t));
        // 网格模型当前的位置加上spt时间段内运动的位移量
        const newPos = pos0.clone().add(dis);
        mesh.position.copy(newPos);
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();

//累加
const v = new THREE.Vector3(30, 0, 0);//物体初始速度
const clock = new THREE.Clock();//时钟对象
const g = new THREE.Vector3(0, -9.8, 0);
// 渲染循环
function render() {
    if (mesh.position.y > 0) {
        const spt = clock.getDelta();//两帧渲染时间间隔(秒)
        //spV:重力加速度在时间spt内对速度的改变
        const spV = g.clone().multiplyScalar(spt);
        v.add(spV);//v = v + spV  更新当前速度
        // 在spt时间内，以速度v运动的位移量
        const dis = v.clone().multiplyScalar(spt);
        // 网格模型当前的位置加上spt时间段内运动的位移量
        mesh.position.add(dis);
    }
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
```
