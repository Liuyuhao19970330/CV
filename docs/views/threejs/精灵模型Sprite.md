---
title: 精灵模型Sprite
date: 2023-12-05
tags: 
- threeBase
categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

##  精灵模型Sprite
```javascript
import * as THREE from 'three';

// 创建精灵材质对象SpriteMaterial
const spriteMaterial = new THREE.SpriteMaterial({
  color:0x00ffff,//设置颜色
});
// 创建精灵模型对象，不需要几何体geometry参数
const sprite = new THREE.Sprite(spriteMaterial);

// 设置精灵模型在三维空间中的位置坐标
sprite.position.set(0,50,0);
// 控制精灵大小
sprite.scale.set(50, 25, 1); //只需要设置x、y两个分量就可以

export default sprite;
```
## 精灵模型标注场景(贴图)
```javascript
const texture = new THREE.TextureLoader().load("./光点.png");
const spriteMaterial = new THREE.SpriteMaterial({
  // color:0x00ffff,//设置颜色
  map: texture, //设置精灵纹理贴图
  // transparent:true,//SpriteMaterial默认是true
});
const sprite = new THREE.Sprite(spriteMaterial);
// 控制精灵大小
sprite.scale.set(10, 10, 1);
```
