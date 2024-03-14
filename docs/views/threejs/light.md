---
title: light大全
date: 2023-11-22
tags: 
- three基础

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]

## 创建环境光
```javascript
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // 颜色、强度
scene.add(ambientLight);
```
## 平行光
```javascript
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7); // 颜色、强度
directionalLight.position.set(1, 1, 1); // 设置光源方向
scene.add(directionalLight);
```
## 点光源
```javascript
const pointLight = new THREE.PointLight(0xffffff, 1, 100); // 颜色、强度、距离
pointLight.position.set(0, 10, 0); // 设置光源位置
scene.add(pointLight);
```
##  聚光灯
```javascript
const spotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 4, 0.5); // 颜色、强度、距离、角度、衰减
spotLight.position.set(0, 10, 0); // 设置光源位置
spotLight.target.position.set(0, 0, 0); // 设置光源照射方向
scene.add(spotLight);
```
## 光源辅助
```javascript
const directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1); // 光源、尺寸
scene.add(directionalLightHelper);
```