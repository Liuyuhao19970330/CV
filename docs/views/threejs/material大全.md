---
title: 常见的meterial
date: 2024-01-01
tags:
- threeBase
categories:
- threejs
isShowComments: false
---

<Boxx/>

在 Three.js 中，有许多不同类型的材质可用于渲染 3D 场景中的物体。以下是一些常见的 Three.js 材质类型：

<!-- more -->

[[toc]]

## BasicMaterial（基础材质）
 BasicMaterial（基础材质）：

THREE.MeshBasicMaterial
这是最简单的材质，不考虑光照效果，只显示基础颜色。
```javascript
const basicMaterial = new THREE.MeshBasicMaterial({
  color: 0x00ff00, // 基础颜色
  wireframe: true, // 是否显示线框
});

```
## LambertMaterial（兰伯特材质）
 LambertMaterial（兰伯特材质）：

THREE.MeshLambertMaterial
通过使用兰伯特光照模型，该材质考虑了漫反射光照效果，但不包括镜面反射。
```javascript
const lambertMaterial = new THREE.MeshLambertMaterial({
  color: 0x00ff00, // 基础颜色
});

```

## PhongMaterial（冯氏材质）
 PhongMaterial（冯氏材质）：

THREE.MeshPhongMaterial
使用冯氏光照模型，该材质考虑了漫反射、镜面反射和环境光照，提供了更真实的光照效果。

```javascript
const material = new THREE.MeshPhongMaterial({
    color: 0xff0000,
    shininess: 20, //高光部分的亮度，默认30
    specular: 0x444444, //高光部分的颜色
});

```
## StandardMaterial（标准材质）
 StandardMaterial（标准材质）：

THREE.MeshStandardMaterial
一种基于 PBR（Physically Based Rendering）的材质，考虑了漫反射、镜面反射、金属度和粗糙度等属性，适用于更真实的渲染。
```javascript
const standardMaterial = new THREE.MeshStandardMaterial({
  color: 0x00ff00, // 基础颜色
  metalness: 0.5, // 金属度
  roughness: 0.5, // 粗糙度
});

```

## PhysicalMaterial（物理材质）
PhysicalMaterial（物理材质）：

THREE.MeshPhysicalMaterial
在标准材质的基础上添加了更多的物理属性，例如透明度、折射率等。
```javascript
const physicalMaterial = new THREE.MeshPhysicalMaterial({
  color: 0x00ff00, // 基础颜色
  metalness: 0.5, // 金属度
  roughness: 0.5, // 粗糙度
  transparent: true, // 是否透明
  opacity: 0.8, // 透明度
  clearcoat: 1.0, // 透明的涂层
});

```

## ShaderMaterial（着色器材质）
 ShaderMaterial（着色器材质）：

THREE.ShaderMaterial
允许使用自定义着色器程序创建材质，提供了更高度的灵活性和定制能力。
这只是一小部分可用的材质类型。每种材质都有其特定的用途和适用场景，选择材质类型通常取决于项目的需求和设计目标。在使用 Three.js 时，你可以根据场景的要求选择最合适的材质类型。
```javascript
// 需要自定义着色器程序的代码示例
const vertexShader = `
  // 自定义顶点着色器代码
`;

const fragmentShader = `
  // 自定义片段着色器代码
`;

const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
});

```


