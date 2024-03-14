---
title: 人物漫游
date: 2024-01-06
tags: 
- math

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## 监听按键
```javascript
 const keyStates = {
            // 使用W、A、S、D按键来控制前、后、左、右运动
            // false表示没有按下，true表示按下状态
            W: false,
            A: false,
            S: false,
            D: false,
        };
        // 当某个键盘按下设置对应属性设置为true
        document.addEventListener('keydown', (event) => {
            if (event.code === 'KeyW') keyStates.W = true;
            if (event.code === 'KeyA') keyStates.A = true;
            if (event.code === 'KeyS') keyStates.S = true;
            if (event.code === 'KeyD') keyStates.D = true;
        });
        // 当某个键盘抬起设置对应属性设置为false
        document.addEventListener('keyup', (event) => {
            if (event.code === 'KeyW') keyStates.W = false;
            if (event.code === 'KeyA') keyStates.A = false;
            if (event.code === 'KeyS') keyStates.S = false;
            if (event.code === 'KeyD') keyStates.D = false;
        });
```
## W前进
```javascript

// 用三维向量表示玩家角色(人)运动漫游速度
//按下W键对应的人运动速度
const v = new THREE.Vector3(0, 0, 3);

// 渲染循环
const clock = new THREE.Clock();
function render() {
    const deltaTime = clock.getDelta();
    if (keyStates.W) {
        // 在间隔deltaTime时间内，玩家角色位移变化计算(速度*时间)
        const deltaPos = v.clone().multiplyScalar(deltaTime);
        player.position.add(deltaPos);//更新玩家角色的位置
    }
    mixer.update(deltaTime);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
```
## 加速度和最大速度
```javascript
// 用三维向量表示玩家角色(人)运动漫游速度
const v = new THREE.Vector3(0, 0, 0);//初始速度设置为0
const a = 12;//加速度：调节按键加速快慢
const vMax = 5;//限制玩家角色最大速度
// 渲染循环
const clock = new THREE.Clock();
function render() {
    const deltaTime = clock.getDelta();
    if (keyStates.W) {
        const front = new THREE.Vector3(0,0,1);//先假设W键对应运动方向为z
        if (v.length() < vMax) {//限制最高速度
            // W键按下时候，速度随着时间增加
            v.add(front.multiplyScalar(a * deltaTime));
        }
        // 在间隔deltaTime时间内，玩家角色位移变化计算(速度*时间)
        const deltaPos = v.clone().multiplyScalar(deltaTime);
        player.position.add(deltaPos);//更新玩家角色的位置
    }
    mixer.update(deltaTime);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
```
##  阻尼系数
```javascript
// 用三维向量表示玩家角色(人)运动漫游速度
const v = new THREE.Vector3(0, 0, 0);//初始速度设置为0
const a = 12;//WASD按键的加速度：调节按键加速快慢
const damping = -0.04;//阻尼 当没有WASD加速的时候，人、车等玩家角色慢慢减速停下来
const vMax = 5;//限制玩家角色最大速度
// 渲染循环
const clock = new THREE.Clock();
function render() {
    const deltaTime = clock.getDelta();
    if (keyStates.W) {
        const front = new THREE.Vector3(0, 0, 1);//先假设W键对应运动方向为z
        if (v.length() < vMax) {//限制最高速度
            // W键按下时候，速度随着时间增加
            v.add(front.multiplyScalar(a * deltaTime));
        }
    }
    // v*(1 + damping) = v* (1 - 0.04) = v * 0.96
    // 多次循环乘以0.96(v*0.96*0.96*0.96...),v就会无限逼近于0。
    // v*(1 + damping) = v + v * damping
    v.addScaledVector(v, damping);//阻尼减速

    //更新玩家角色的位置   当v是0的时候，位置更新也不会变化
    const deltaPos = v.clone().multiplyScalar(deltaTime);
    player.position.add(deltaPos);

    mixer.update(deltaTime);
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
```
## 鼠标左右拖动改变玩家视角
```javascript
//相机作为player子对象，会跟着player平移或旋转
player.add(camera);
camera.position.set(0, 1.6, -5.5);
camera.lookAt(0, 1.6, 0);


let leftButtonBool = false;//记录鼠标左键状态
document.addEventListener('mousedown', (event) => {
    leftButtonBool = true;
});
document.addEventListener('mouseup', () => {
    leftButtonBool = false;
});

//鼠标左键按下时候，才旋转玩家角色
document.addEventListener('mousemove', (event) => {
    if (leftButtonBool) {
        // 注意rotation.y += 与 -= 区别，左右旋转时候方向相反
        //event.movementX缩小一定倍数改变旋转控制的灵敏度
        player.rotation.y -= event.movementX / 600;
    }
});
```
## 获取玩家(相机)正前方方向
```javascript
const front = new THREE.Vector3();
            player.getWorldDirection(front);//获取玩家角色(相机)正前方
            v.add(front.multiplyScalar(a * deltaTime));
```
## 上下视角
```javascript
// 上下俯仰角度范围
const angleMin = THREE.MathUtils.degToRad(-15);//角度转弧度
const angleMax = THREE.MathUtils.degToRad(15);
document.addEventListener('mousemove', (event) => {
    if (leftButtonBool) {
        // 左右旋转
        player.rotation.y -= event.movementX / 600;
        // 鼠标上下滑动，让相机视线上下转动
        // 相机父对象cameraGroup绕着x轴旋转,camera跟着转动
        cameraGroup.rotation.x -= event.movementY / 600;
        // // 一旦判断.rotation.x小于-15，就设置为-15，大于15，就设置为15
        if (cameraGroup.rotation.x < angleMin) cameraGroup.rotation.x = angleMin;
        if (cameraGroup.rotation.x > angleMax) cameraGroup.rotation.x = angleMax;
    }
});
console.log(cameraGroup.position)
console.log(player.position)
console.log(camera.position)
```
## 左右移动(叉乘)
```javascript
if (keyStates.A) {//向左运动
            const front = new THREE.Vector3();
            player.getWorldDirection(front);
            const up = new THREE.Vector3(0, 1, 0);//y方向
            //叉乘获得垂直于向量up和front的向量 左右与叉乘顺序有关
            // 左右方向，可以用右手螺旋定责判断，或者不判断，代码测试，不对，就把up和front叉乘顺序换下
            const left = up.clone().cross(front);
            v.add(left.multiplyScalar(a * deltaTime));
        }
        if (keyStates.D) {//向右运动
            const front = new THREE.Vector3();
            player.getWorldDirection(front);
            const up = new THREE.Vector3(0, 1, 0);//y方向
            //叉乘获得垂直于向量up和front的向量 左右与叉乘顺序有关,可以用右手螺旋定则判断，也可以代码测试结合3D场景观察验证
            const right = front.clone().cross(up);
            v.add(right.multiplyScalar(a * deltaTime));
        }
```
## 鼠标滑动改变视角(指针锁定模式)
```javascript
// 当鼠标左键按下后进入指针锁定模式(鼠标无限滑动)
document.addEventListener('mousedown', () => {
    document.body.requestPointerLock();//指针锁定
});
```
## 一三人称切换(改变相机的位置)
```javascript
let viewBool = true;//true表示第三人称，false表示第一人称
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyV') {
        if (viewBool) {
            // 切换到第一人称
            camera.position.z = 1;//相机在人前面一点 看不到人模型即可
        } else {
            // 切换到第三人称
            camera.position.z = -2.3;//相机在人后面一点
        }
        viewBool = !viewBool;
    }
});

```
## 全部代码
```javascript
import { player } from './model.js';
import * as THREE from 'three';
//相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(70, width / height, 0.1, 3000);

// 层级关系：player <—— cameraGroup <—— camera
const cameraGroup = new THREE.Group();
cameraGroup.add(camera);
player.add(cameraGroup);
camera.position.set(0, 1.6, -2.3);
camera.lookAt(0, 1.6, 0);

let viewBool = true;//true表示第三人称，false表示第一人称
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyV') {
        if (viewBool) {
            // 切换到第一人称
            camera.position.z = 1;//相机在人前面一点 看不到人模型即可
        } else {
            // 切换到第三人称
            camera.position.z = -2.3;//相机在人后面一点
        }
        viewBool = !viewBool;
    }
});

// 当鼠标左键按下后进入指针锁定模式(鼠标无限滑动)
document.addEventListener('mousedown', () => {
    document.body.requestPointerLock();//指针锁定
});

// 上下俯仰角度范围
const angleMin = THREE.MathUtils.degToRad(-15);//角度转弧度
const angleMax = THREE.MathUtils.degToRad(15);
document.addEventListener('mousemove', (event) => {
    if (document.pointerLockElement == document.body) {
        // 左右旋转
        player.rotation.y -= event.movementX / 600;
        // 鼠标上下滑动，让相机视线上下转动
        // 相机父对象cameraGroup绕着x轴旋转,camera跟着转动
        cameraGroup.rotation.x -= event.movementY / 600;
        // 一旦判断.rotation.x小于-15，就设置为-15，大于15，就设置为15
        if (cameraGroup.rotation.x < angleMin) cameraGroup.rotation.x = angleMin;
        if (cameraGroup.rotation.x > angleMax) cameraGroup.rotation.x = angleMax;
    }
});


// 声明一个对象keyStates用来记录键盘事件状态
const keyStates = {
    // 使用W、A、S、D按键来控制前、后、左、右运动
    W: false,
    A: false,
    S: false,
    D: false,
};
// 当某个键盘按下设置对应属性设置为true
document.addEventListener('keydown', (event) => {
    if (event.code === 'KeyW') keyStates.W = true;
    if (event.code === 'KeyA') keyStates.A = true;
    if (event.code === 'KeyS') keyStates.S = true;
    if (event.code === 'KeyD') keyStates.D = true;
});
// 当某个键盘抬起设置对应属性设置为false
document.addEventListener('keyup', (event) => {
    if (event.code === 'KeyW') keyStates.W = false;
    if (event.code === 'KeyA') keyStates.A = false;
    if (event.code === 'KeyS') keyStates.S = false;
    if (event.code === 'KeyD') keyStates.D = false;
});




// 用三维向量表示玩家角色(人)运动漫游速度
const v = new THREE.Vector3(0, 0, 0);//初始速度设置为0
const a = 12;//WASD按键的加速度：调节按键加速快慢
const damping = -0.04;//阻尼 当没有WASD加速的时候，人、车等玩家角色慢慢减速停下来
const vMax = 5;//限制玩家角色最大速度


function playerUpdate(deltaTime) {
    if (v.length() < vMax) {//限制最高速度
        if (keyStates.W) {
            const front = new THREE.Vector3();
            player.getWorldDirection(front);//获取玩家角色(相机)正前方
            v.add(front.multiplyScalar(a * deltaTime));
        }
        if (keyStates.S) {
            const front = new THREE.Vector3();
            player.getWorldDirection(front);
            // - a：与W按键反向相反
            v.add(front.multiplyScalar(- a * deltaTime));
        }
        if (keyStates.A) {//向左运动
            const front = new THREE.Vector3();
            player.getWorldDirection(front);
            const up = new THREE.Vector3(0, 1, 0);//y方向
            //叉乘获得垂直于向量up和front的向量 左右与叉乘顺序有关
            // 左右方向，可以用右手螺旋定责判断，或者不判断，代码测试，不对，就把up和front叉乘顺序换下
            const left = up.clone().cross(front);
            v.add(left.multiplyScalar(a * deltaTime));
        }
        if (keyStates.D) {//向右运动
            const front = new THREE.Vector3();
            player.getWorldDirection(front);
            const up = new THREE.Vector3(0, 1, 0);//y方向
            //叉乘获得垂直于向量up和front的向量 左右与叉乘顺序有关,可以用右手螺旋定则判断，也可以代码测试结合3D场景观察验证
            const right = front.clone().cross(up);
            v.add(right.multiplyScalar(a * deltaTime));
        }
    }

    v.addScaledVector(v, damping);//阻尼减速

    //更新玩家角色的位置   当v是0的时候，位置更新也不会变化
    const deltaPos = v.clone().multiplyScalar(deltaTime);
    player.position.add(deltaPos);
}

export { playerUpdate, camera } 

```

