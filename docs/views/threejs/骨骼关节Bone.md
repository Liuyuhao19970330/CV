---
title: 骨骼关节Bone
date: 2023-11-26
tags: 
- threeBase

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## 
```javascript
/**
 * 骨骼系统
 */
const Bone1 = new THREE.Bone(); //关节1，用来作为根关节
const Bone2 = new THREE.Bone(); //关节2
const Bone3 = new THREE.Bone(); //关节3

// 设置关节父子关系   多个骨头关节构成一个树结构
Bone1.add(Bone2);
Bone2.add(Bone3);


//根关节Bone1默认位置是(0,0,0)
Bone2.position.y = 60; //Bone2相对父对象Bone1位置
Bone3.position.y = 30; //Bone3相对父对象Bone2位置

Bone1.position.set(50,0,50);//平移Bone1，Bone2、Bone3跟着平移

// 骨骼关节旋转
// Bone1.rotateX(Math.PI / 6);
// Bone2.rotateX(Math.PI / 6);

// 骨骼关节可以和普通网格模型一样作为其他模型子对象，添加到场景中
const group = new THREE.Group();
group.add(Bone1);


// SkeletonHelper会可视化参数模型对象所包含的所有骨骼关节
const skeletonHelper = new THREE.SkeletonHelper(group);
// const skeletonHelper = new THREE.SkeletonHelper(Bone1);
group.add(skeletonHelper);

const gui = new GUI();
gui.add(Bone1.rotation, 'x', 0, Math.PI / 3).name('关节1');
gui.add(Bone2.rotation, 'x', 0, Math.PI / 3).name('关节2');
```
## 外部模型骨骼
```javascript
loader.load("../士兵.glb", function (gltf) {

    model.add(gltf.scene);

    // 骨骼辅助显示
    const skeletonHelper = new THREE.SkeletonHelper(gltf.scene);
    model.add(skeletonHelper);

    // 根据骨骼关节名字获取骨关节Bone  
    // 在三维软件中，骨骼关节始终选择第一个，层层展开，直接找到名为mixamorig:RightShoulder的关节，展开看到下面三个骨骼关节
    const bone1 = gltf.scene.getObjectByName('mixamorigRightArm');//手臂
    const bone2 = gltf.scene.getObjectByName('mixamorigRightForeArm');//肘关节
    const bone3 = gltf.scene.getObjectByName('mixamorigRightHand');//腕关节

    bone1.rotation.x = Math.PI/3;//手臂
    bone2.rotation.x = Math.PI/3;//肘关节
    bone3.rotation.x= Math.PI/3;//腕关节

    const gui = new GUI();
    gui.add(bone1.rotation, 'x', 0, Math.PI/3).name('手臂');
    gui.add(bone2.rotation, 'x', 0, Math.PI/3).name('肘关节');
    gui.add(bone3.rotation, 'x', 0, Math.PI/3).name('腕关节');
    
})
```
## 动画格式
动画的几种格式
```javascript

loader.load("../士兵.glb", function (gltf) {
    console.log('控制台查看gltf对象结构', gltf);
    model.add(gltf.scene);


    const mixer = new THREE.AnimationMixer(gltf.scene);
    // gltf.animations[0] Idle  休息
    // gltf.animations[1] Run   跑步
    // gltf.animations[2] TPose T形静止展开
    // gltf.animations[3] Walk  走路
    const IdleAction = mixer.clipAction(gltf.animations[0]);
    const RunAction = mixer.clipAction(gltf.animations[1]);
    const WalkAction = mixer.clipAction(gltf.animations[3]);

    IdleAction.play();
    let ActionState = IdleAction;//当前处于播放状态的动画动作对象

    // 通过UI按钮控制，切换动画运动状态
    document.getElementById('Idle').addEventListener('click', function () {
        ActionState.stop();//播放状态动画终止
        IdleAction.play();
        ActionState = IdleAction;
    })
    document.getElementById('Run').addEventListener('click', function () {
        ActionState.stop();//播放状态动画终止
        RunAction.play();
        ActionState = RunAction;
    })

    document.getElementById('Walk').addEventListener('click', function () {
        ActionState.stop();//播放状态动画终止
        WalkAction.play();
        ActionState = WalkAction;
    })
})
```
## 骨骼动画与运动状态关联
每个动作的权重来决定
```javascript
//切换动作
//包含关键帧动画的模型作为参数创建一个播放器
const mixer = new THREE.AnimationMixer(player);
console.log('所有骨骼动画数据', gltf.animations);
// 骨骼动画动画名字和对应含义，名字是可以在bledner中随意命名的
//Idle  休息
//Run   跑步
//Walk  走路
// const clipAction = mixer.clipAction(gltf.animations[13]);
// clipAction.play(); //播放动画

const IdleAction = mixer.clipAction(gltf.animations[5]);//休息动作
const WalkAction = mixer.clipAction(gltf.animations[13]);//步行动作
IdleAction.play();
WalkAction.play();
IdleAction.weight = 1.0;//默认休息状态
WalkAction.weight = 0.0;

function changeAction(name){
    if (name=='Idle'){
        IdleAction.weight = 1.0;//休息状态
        WalkAction.weight = 0.0;
    }else if (name == 'Walk') {
        IdleAction.weight = 0.0;
        WalkAction.weight = 1.0;//步行状态
    } 
}
```
