---
title: 欧拉角和四元数
date: 2024-01-04
tags: 
- math

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## 欧拉角
欧拉角是一种表示物体旋转的方式，在Three.js中也经常用于描述3D对象的旋转。为了更通俗地理解欧拉角，我们可以将其比喻为物体绕坐标轴的旋转方式，这涉及到三个角度：俯仰角（Pitch）、偏航角（Yaw）、和滚转角（Roll）。

俯仰角（Pitch）： 绕X轴旋转，就像你在低头或仰头。正俯仰表示往前低头，负俯仰表示仰头。

偏航角（Yaw）： 绕Y轴旋转，就像你在左右转头。正偏航表示向右转头，负偏航表示向左转头。

滚转角（Roll）： 绕Z轴旋转，就像你在翻滚。正滚转表示向右翻滚，负滚转表示向左翻滚。

可以想象一个飞机在空中飞行的情景。俯仰角对应飞机的仰头和俯冲动作，偏航角对应左右转弯，滚转角对应飞机的翻滚动作。

在Three.js中，欧拉角通常以角度（degrees）表示，但有时也以弧度（radians）表示。通过设置对象的欧拉角，你可以控制对象在3D空间中的旋转状态。需要注意的是，使用欧拉角时可能会遇到万向锁（Gimbal Lock）的问题，这是由于旋转顺序导致的，可以通过其他方式如四元数来避免。

我的理解是就是用来记录物体当前姿态的变量
```javascript
 const Euler = new THREE.Euler();
    Euler.x = Math.PI / 3;
    Euler.y = Math.PI / 3;
    // 你可以对比不同旋转顺序，物体旋转后姿态角度是否相同
    // Euler.order = 'XYZ';//先绕X轴旋转，在绕Y、Z轴旋转
    Euler.order = 'YXZ';//先绕Y轴旋转，在绕X、Z轴旋转
    fly.rotation.copy(Euler);//将欧拉角赋予给fly对象
```
## 四元数
四元数（Quaternions）是一种数学表示方式，用于表示旋转的姿态。在Three.js和其他计算机图形学领域，四元数通常用于解决欧拉角旋转引起的万向锁问题，因为它们没有欧拉角那样的歧义性。

四元数由一个实部和三个虚部组成，通常表示为 q = w + xi + yj + zk，其中：

w 是实部（标量部分）。
x, y, z 是虚部（向量部分）。
四元数的优势在于它们可以用来表示任意轴上的旋转，而不会出现万向锁问题。它们通过四个分量来表示旋转，而不是通过三个角度。通过使用四元数，可以更有效地进行复合旋转和插值，尤其是在动画和相机控制等场景中。

在Three.js中，可以通过THREE.Quaternion类来创建和操作四元数。使用四元数来表示旋转时，可以更稳定和可靠地执行多次旋转操作，而不会出现奇异性和歧义，这使得它在计算机图形学中的应用变得非常重要。

我的理解是四元数可以绕任意轴旋转,而欧拉角只能绕xyz
```javascript
const quaternion = new THREE.Quaternion();
// 旋转轴new THREE.Vector3(0,0,1)
// 旋转角度Math.PI/2
quaternion.setFromAxisAngle(new THREE.Vector3(0,0,1),Math.PI/2);
//.............................//轴..................//旋转角度

// 通过四元数旋转A点：把A点绕z轴旋转90度生成一个新的坐标点B
const B = A.clone().applyQuaternion(quaternion);
console.log('B',B);//查看旋转后坐标

//红色小球可视化坐标点B 
const Bmesh = createSphereMesh(0xff0000,2);
Bmesh.position.copy(B);
group.add(Bmesh);
```
## 四元数的运算
.multiply(q3)是在上次的基础上再旋转,而copy()是直接赋予当前的值替代
```javascript
 // 在物体原来姿态基础上，进行旋转
    const q1 = new THREE.Quaternion();
    q1.setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2);
    fly.quaternion.multiply(q1);
    // 在物体上次旋转基础上，进行旋转
    const q2 = new THREE.Quaternion();
    q2.setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
    fly.quaternion.multiply(q2);
    // 在物体上次旋转基础上，进行旋转
    const q3 = new THREE.Quaternion();
    q3.setFromAxisAngle(new THREE.Vector3(0, 0, 1), Math.PI / 2);
    fly.quaternion.multiply(q3);
```
## 案例
```javascript
loader.load("../飞机.glb", function (gltf) {
    const fly = new THREE.Group()
    fly.add(gltf.scene);
    model.add(fly);
    fly.position.set(10, 10, 0);//相对世界坐标系坐标原点偏移
    const axesHelper = new THREE.AxesHelper(10);
    fly.add(axesHelper);//用一个坐标轴可视化模型的局部坐标系(本地坐标系)

    // 可视化飞机方向
    const a = new THREE.Vector3(0, 0, -1);//飞机初始姿态飞行方向
    const O = fly.position.clone();//飞机位置坐标箭头起点
    model.add(new THREE.ArrowHelper(a, O, 20, 0xff0000));

    // 飞机姿态绕自身坐标原点旋转到v2指向的方向
    const b = new THREE.Vector3(-1, -1, -1).normalize();
    model.add(new THREE.ArrowHelper(b, O, 20, 0x00ff00));


    // a旋转到b构成的四元数
    const quaternion = new THREE.Quaternion();
    quaternion.setFromUnitVectors(a, b);//注意两个参数的顺序
    // quaternion表示的是变化过程，在原来基础上乘以quaternion即可
    fly.quaternion.multiply(quaternion)

})
```
## 无人机镜头始终指向旋转中心
```javascript
loader.load("../无人机.glb", function (gltf) {
    const fly = new THREE.Group();
    fly.scale.set(0.5, 0.5, 0.5);
    fly.add(gltf.scene);
    model.add(fly);
    const axesHelper = new THREE.AxesHelper(30);
    fly.add(axesHelper);//用一个坐标轴可视化模型的局部坐标系(本地坐标系)

    const R = 100;//绕转半径
    const H = 30;//绕转高度
    
    // 初始位置
    fly.position.y = H;
    fly.position.x = R;

    //无人机加载进来默认正反向(相机镜头方向)
    const a = new THREE.Vector3(0, 0 ,1);
    // 绕转中心的坐标
    const target = new THREE.Vector3(0, H, 0);
    const q0 = fly.quaternion.clone();//姿态角度初始值


    let angle = 0;
    function loop() {
        requestAnimationFrame(loop);
        angle += 0.01;
        // 无人机y坐标不变，在平行于XOZ的平面上做圆周运动
        const x = R * Math.cos(angle);
        const z = R * Math.sin(angle);
        fly.position.x = x;
        fly.position.z = z;

        // 保持无人机镜头一直对准旋转中心
        const b = target.clone().sub(fly.position).normalize();
        // 计算当前位置相对初始位置需要旋转的角度
        const q = new THREE.Quaternion();
        q.setFromUnitVectors(a, b);
        const newQ = q0.clone().multiply(q);//初始四元数乘需要增加旋转对应四元数q
        fly.quaternion.copy(newQ);
    }
    loop();
})
```
## 无人机镜头沿着轨迹线切线方向
```javascript
loader.load("../无人机.glb", function (gltf) {
    const fly = new THREE.Group();
    fly.scale.set(0.5, 0.5, 0.5);
    fly.add(gltf.scene);
    model.add(fly);
    const axesHelper = new THREE.AxesHelper(30);
    fly.add(axesHelper);//用一个坐标轴可视化模型的局部坐标系(本地坐标系)

    const R = 100;//绕转半径
    const H = 30;//绕转高度
    // 初始位置
    fly.position.y = H;
    fly.position.x = R;

    //无人机加载进来默认正反向(相机镜头方向)
    const a = new THREE.Vector3(0, 0 ,1);
    const q0 = fly.quaternion.clone();//姿态角度初始值

    // 无飞机圆周绕飞动画
    let angle = 0;
    function loop() {
        requestAnimationFrame(loop);
        angle += 0.01;
        // 无人机y坐标不变，在平行于XOZ的平面上做圆周运动
        const x = R * Math.cos(angle);
        const z = R * Math.sin(angle);
        fly.position.x = x;
        fly.position.z = z;

        // 保持无人机镜头沿着飞行方向(圆弧轨迹线切线方向)
        const x2 = R * Math.cos(angle + 0.001);
        const z2 = R * Math.sin(angle + 0.001);
        // 向量b表示当前位置的切线方向(angle + 0.001近似计算)
        const b = new THREE.Vector3(x2 - x, 0, z2 - z).normalize();
        const q = new THREE.Quaternion();
        q.setFromUnitVectors(a, b);
        const newQ = q0.clone().multiply(q);
        fly.quaternion.copy(newQ);
    }
    loop();
})
```