---
title: onBeforeCompile修改材质
date: 2024-01-07
tags: 
- shader

categories:
- threejs
isShowComments: false
---

<Boxx/>

<!-- more -->

[[toc]]
先定义材质,然后再改写材质.之前的是直接写shadermaterial.现在事先定义material,然后替代修改
## 查看shader
查看shader代码
```javascript
material.onBeforeCompile = function (shader) {
  
  // 打印整个 shader 对象，包括顶点和片元着色器等信息
  console.log('shader', shader);
  
  // 打印顶点着色器的源代码
  console.log('顶点着色器', shader.vertexShader);
  
  // 打印片元着色器的源代码
  console.log('片元着色器', shader.fragmentShader);
}
```
## 替换入门
```javascript
material.onBeforeCompile = function (shader) {
    // console.log('片元着色器', shader.fragmentShader);
    // 在片元着色器main函数里面最后一行插入代码
    shader.fragmentShader = shader.fragmentShader.replace(
        '#include <dithering_fragment>',
        `
        #include <dithering_fragment>
        gl_FragColor.r = 0.0;
        gl_FragColor.g = 0.0;
        `
    )
}
```
## 修改材质shader(彩色图变灰度图)
```javascript
material.onBeforeCompile = function (shader) {
    console.log('片元着色器', shader.fragmentShader);
    // 在片元着色器main函数里面最后一行插入灰度图代码
    shader.fragmentShader = shader.fragmentShader.replace(
        '#include <dithering_fragment>',
        `
        #include <dithering_fragment>
        // 灰度图公式
        float gray = 0.299*gl_FragColor.r+0.587*gl_FragColor.g+0.114*gl_FragColor.b;
        gl_FragColor = vec4(gray,gray,gray,gl_FragColor.a);
        `
    ) 
}
```
##  光带
```javascript
material.onBeforeCompile = function (shader) {
  // console.log('vertexShader', shader.vertexShader);
  shader.vertexShader = shader.vertexShader.replace(
    'void main() {',
    `
    varying vec3 vPosition;
    void main(){
      // 顶点位置坐标模型矩阵变换后，进行插值计算
      vPosition = vec3(modelMatrix * vec4( position, 1.0 ));
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    `
  );
  // console.log('fragmentShader', shader.fragmentShader);
  shader.fragmentShader = shader.fragmentShader.replace(
    'void main() {',
    `
    varying vec3 vPosition;
    void main() {
    `
  );
  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <dithering_fragment>',
    `
    #include <dithering_fragment>
    if(vPosition.y > 20.0 && vPosition.y < 21.0 ){
        gl_FragColor = vec4(1.0,1.0,0.0,1.0);
    }
    `
  );
//   shader.fragmentShader = shader.fragmentShader.replace(
//     '#include <dithering_fragment>',
//     `
//     #include <dithering_fragment>
//     float y0 = 0.0;
//     for (int i = 0; i < 4; i++) {
//       y0 += 20.0;
//       if(vPosition.y > y0 && vPosition.y < y0+1.0 ){
//         gl_FragColor = vec4(1.0,1.0,0.0,1.0);
//       }
//     }
//     `
//   );
};
```
## 光带扫光
```javascript
  shader.fragmentShader = shader.fragmentShader.replace(
    'void main() {',
    `
    uniform float y; //变化的y控制光带高度
    varying vec3 vPosition;
    void main() {
    `
  );
  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <dithering_fragment>',
    `
    #include <dithering_fragment>
    // y随着时间改变光带位置也会改变
    if(vPosition.y > y && vPosition.y < y + 1.0 ){
        gl_FragColor = vec4(1.0,1.0,0.0,1.0);
    }
    `
  );

  // 渲染循环
const clock = new THREE.Clock();
function render() {
    // console.log('mesh.shader', mesh.shader);
    const deltaTime = clock.getDelta();
    renderer.render(scene, camera);
    // enderer.render执行一次，才能获取到mesh.shader
    mesh.shader.uniforms.y.value += 30 * deltaTime;
    // 一旦y接近模型mesh顶部，重新设置为0，这样扫光反复循环
    if (mesh.shader.uniforms.y.value > 99) mesh.shader.uniforms.y.value = 0;
    requestAnimationFrame(render);
}
render();
```
## 光带扫光渐变
```javascript
material.onBeforeCompile = function (shader) {
  // console.log('vertexShader', shader.vertexShader);
  shader.vertexShader = shader.vertexShader.replace(
    'void main() {',
    `
    varying vec3 vPosition;
    void main(){
      vPosition = vec3(modelMatrix * vec4( position, 1.0 ));
    `
  );
  // console.log('fragmentShader', shader.fragmentShader);
  shader.fragmentShader = shader.fragmentShader.replace(
    'void main() {',
    `
    uniform float y; //变化的y控制光带高度
    float w = 20.0;//光带宽度一半
    varying vec3 vPosition;
    void main() {
    `
  );
  shader.fragmentShader = shader.fragmentShader.replace(
    '#include <dithering_fragment>',
    `
    #include <dithering_fragment>
    // y随着时间改变光带位置也会改变
    if(vPosition.y >= y && vPosition.y < y + w ){
      float per = (vPosition.y-y)/w;//范围0~1            
      per = pow(per,0.5);
      gl_FragColor.rgb = mix( vec3(0.3,1.0,1.0),gl_FragColor.rgb, per);
    }
    if(vPosition.y <= y && vPosition.y > y - w ){
      float per = (y-vPosition.y)/w;//范围0~1
      per = pow(per,0.5);
      gl_FragColor.rgb = mix( vec3(0.3,1.0,1.0),gl_FragColor.rgb, per);
    }
    `
  );
  shader.uniforms.y = { value: 0 };
  mesh.shader = shader;//这样在index.js文件中通过mesh访问shader
};
```
