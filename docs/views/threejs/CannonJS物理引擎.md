---
title: CannonJS物理引擎
date: 2023-12-24
tags: 
- math

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## 小球自由落体
```javascript
// 引入cannon-es
import * as CANNON from 'cannon-es';

const world = new CANNON.World();
// 设置物理世界重力加速度
// world.gravity.set(0, -9.8, 0);
world.gravity.set(0, -1, 0);

// 物理小球：对应threejs的网格小球
const body = new CANNON.Body({
    mass: 0.3,//碰撞体质量
    shape: new CANNON.Sphere(1)
});
body.position.y = 100;
world.addBody(body);


// 网格小球
const geometry = new THREE.SphereGeometry(1);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 100;

//场景
const scene = new THREE.Scene();
scene.add(mesh); //模型对象添加到场景中
```
## 落地反弹
```javascript
// 引入cannon-es
import * as CANNON from 'cannon-es';

const world = new CANNON.World();
// 设置物理世界重力加速度
// world.gravity.set(0, -9.8, 0);
world.gravity.set(0, -50, 0);

const sphereMaterial = new CANNON.Material()
// 物理小球：对应threejs的网格小球
const body = new CANNON.Body({
    mass: 0.3,//碰撞体质量
    material: sphereMaterial,//碰撞体材质
    shape: new CANNON.Sphere(1.5)
});

body.position.y = 100;
world.addBody(body);

// 物理地面
const groundMaterial = new CANNON.Material()
const groundBody = new CANNON.Body({
    mass: 0, // 质量为0，始终保持静止，不会受到力碰撞或加速度影响
    shape: new CANNON.Plane(),
    material: groundMaterial,
});
// 改变平面默认的方向，法线默认沿着z轴，旋转到平面向上朝着y方向
groundBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0);//旋转规律类似threejs 平面
world.addBody(groundBody);

// 设置地面材质和小球材质之间的碰撞反弹恢复系数
const contactMaterial = new CANNON.ContactMaterial(groundMaterial, sphereMaterial, {
    restitution: 0.7, //反弹恢复系数
})
// 把关联的材质添加到物理世界中
world.addContactMaterial(contactMaterial)

// 网格小球
const geometry = new THREE.SphereGeometry(1.5);
const material = new THREE.MeshLambertMaterial({
    color: 0xffff00,
});
const mesh = new THREE.Mesh(geometry, material);
mesh.position.y = 100;

// 网格地面
const planeGeometry = new THREE.PlaneGeometry(200, 200);
const texture = new THREE.TextureLoader().load('./瓷砖.jpg');
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(3, 3);
const planeMaterial = new THREE.MeshLambertMaterial({
    color:0x777777,
    map: texture,
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
planeMesh.rotateX(-Math.PI / 2);

//场景
const scene = new THREE.Scene();
scene.add(mesh, planeMesh); //模型对象添加到场景中
```


```