---
title: 后期处理EffectComposer
date: 2023-11-29
tags: 
- threeBase

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]
炫酷的后期特效
## 后处理(高亮发光描边OutlinePass)
```javascript
// 引入后处理扩展库EffectComposer.js
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
// 引入渲染器通道RenderPass
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
// 引入OutlinePass通道
import { OutlinePass } from 'three/addons/postprocessing/OutlinePass.js';

import {model,mesh} from './model.js'; //模型对象

// 创建后处理对象EffectComposer，WebGL渲染器作为参数
const composer = new EffectComposer(renderer);
// 创建一个渲染器通道，场景和相机作为参数
const renderPass = new RenderPass(scene, camera);
// 设置renderPass通道
composer.addPass(renderPass);

// 创建OutlinePass通道,显示模型外轮廓边框
const v2 = new THREE.Vector2(window.innerWidth, window.innerWidth);
// outlinePass第一个参数v2的尺寸和canvas画布保持一致
const outlinePass = new OutlinePass(v2, scene, camera);
//设置需要高亮发光描边的模型对象
outlinePass.selectedObjects = [mesh];
// 设置OutlinePass通道
composer.addPass(outlinePass);
```
##  颜色设置
```javascript
//高亮发光描边外观样式设置
outlinePass.visibleEdgeColor.set(0xffff00); //模型描边颜色，默认白色         
outlinePass.edgeThickness = 4; //高亮发光描边厚度
console.log('edgeStrength',outlinePass.edgeStrength);
outlinePass.edgeStrength = 6; //高亮描边发光强度
// outlinePass.pulsePeriod = 2; //模型闪烁频率控制，默认0不闪烁
// 设置OutlinePass通道
composer.addPass(outlinePass);
```
## Bloom发光通道
物体整个发光
```javascript
// 创建后处理对象EffectComposer，WebGL渲染器作为参数
const composer = new EffectComposer(renderer);
// 创建一个渲染器通道，场景和相机作为参数
const renderPass = new RenderPass(scene, camera);
// 设置renderPass通道
composer.addPass(renderPass);


// UnrealBloomPass第一个参数是一个二维向量，xy分量和canvas画布宽高度保持一致
const bloomPass = new UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight));
console.log('发光强度',bloomPass.strength);
bloomPass.strength = 0.5;//bloom发光强度
// 设置bloomPass通道
composer.addPass(bloomPass);
```
## GlitchPass闪屏特效
不用选择固定的mesh
```javascript
// 创建后处理对象EffectComposer，WebGL渲染器作为参数
const composer = new EffectComposer(renderer);
// 创建一个渲染器通道，场景和相机作为参数
const renderPass = new RenderPass(scene, camera);
// 设置renderPass通道
composer.addPass(renderPass);

const glitchPass = new GlitchPass();
// 设置glitchPass通道
composer.addPass(glitchPass);
```
## 多通道
```javascript
// 创建后处理对象EffectComposer，WebGL渲染器作为参数
const composer = new EffectComposer(renderer);
// 1. 创建一个渲染器通道，场景和相机作为参数
const renderPass = new RenderPass(scene, camera);
// 设置renderPass通道
composer.addPass(renderPass);

// 2. 创建OutlinePass通道
const v2 = new THREE.Vector2(window.innerWidth, window.innerWidth);
const outlinePass = new OutlinePass(v2, scene, camera);
outlinePass.selectedObjects = [mesh];
outlinePass.edgeThickness = 4;
outlinePass.edgeStrength = 6;
composer.addPass(outlinePass);

// 3. 设置glitchPass通道
const glitchPass = new GlitchPass();
composer.addPass(glitchPass);
```
## 按钮操控后期特效
```javascript
document.getElementById('A').addEventListener('click',function(){
    const A = model.getObjectByName ('设备A');
    outlinePass.selectedObjects = [A];
})
document.getElementById('B').addEventListener('click',function(){
    const B = model.getObjectByName ('设备B');
    outlinePass.selectedObjects = [B];
})

//gltf后处理颜色异常(伽马校正) 

// 创建伽马校正通道
const gammaPass= new ShaderPass(GammaCorrectionShader);
composer.addPass(gammaPass);
// console.log('GammaCorrectionShader',GammaCorrectionShader);

```
## 抗锯齿后处理
```javascript
// FAXX抗锯齿通道
const FXAAPass = new ShaderPass( FXAAShader );
// `.getPixelRatio()`获取`renderer.setPixelRatio()`设置的值
const pixelRatio = renderer.getPixelRatio();//获取设备像素比 
// width、height是canva画布的宽高度
FXAAPass.uniforms.resolution.value.x = 1 /(width*pixelRatio);
FXAAPass.uniforms.resolution.value.y = 1 /(height*pixelRatio);
composer.addPass( FXAAPass );
//获取.setPixelRatio()设置的设备像素比
const pixelRatio = renderer.getPixelRatio();



// 创建SMAAPass抗锯齿通道
// width、height是canva画布的宽高度
const smaaPass = new SMAAPass(width * pixelRatio, height * pixelRatio);
composer.addPass(smaaPass);

```