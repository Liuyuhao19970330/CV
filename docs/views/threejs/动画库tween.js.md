---
title: 动画库tween.js
date: 2023-11-24
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


//创建一段mesh平移的动画
const tween = new TWEEN.Tween(mesh.position);
//经过2000毫秒，pos对象的x和y属性分别从零变化为100、50
tween.to({x: 100,y: 50}, 2000);
//tween动画开始执行
tween.start();

// 更简洁书写形式
// const tween = new TWEEN.Tween(mesh.position)
// .to({x: 100,y: 50}, 2000)
// .start();

// // 缩放动画
// new TWEEN.Tween(mesh.scale).to({
//     x: 100,
//     y: 50
// }, 2000).start();

function render() {
    TWEEN.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();
```
## 相机飞行
```javascript
//直线
// 相机动画:从一个点移动到另一个点
new TWEEN.Tween(camera.position)
.to({x: 180,y: 100,z: 50}, 3000)
.start()

// 只改变相机位置，默认方向保持不变，如果你想重新计算计算视线方向，可以执行lookAt()
// new TWEEN.Tween(camera.position)
// .to({x: 180,y: 100,z: -350}, 3000)
// // tweenjs改变参数对象的过程中，.onUpdate方法会被重复调用执行
// .onUpdate(function(){
//     camera.lookAt(0, 0, 0);
// })
// .start()


//圆周
const R = 100; //相机圆周运动的半径
new TWEEN.Tween({angle:0})
.to({angle: Math.PI*2}, 16000)
.onUpdate(function(obj){
    camera.position.x = R * Math.cos(obj.angle);
    camera.position.z = R * Math.sin(obj.angle);
    camera.lookAt(0, 0, 0);
})
.start()


//点击按钮，相机靠近观察设备
// 切换到设备A预览状态
document.getElementById('A').addEventListener('click', function () {
    const A = model.getObjectByName('设备A标注');
    const pos = new THREE.Vector3();
    A.getWorldPosition(pos); //获取三维场景中某个对象世界坐标
    // 相机飞行到的位置和观察目标拉开一定的距离
    const pos2 = pos.clone().addScalar(30);//向量的x、y、z坐标分别在pos基础上增加30
    // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近
    new TWEEN.Tween({
            // 相机开始坐标
            x: camera.position.x,
            y: camera.position.y,
            z: camera.position.z,
            // 相机开始指向的目标观察点
            tx: 0,
            ty: 0,
            tz: 0,
        })
        .to({
            // 相机结束坐标
            x: pos2.x,
            y: pos2.y,
            z: pos2.z,
            // 相机结束指向的目标观察点
            tx: pos.x,
            ty: pos.y,
            tz: pos.z,
        }, 2000)
        .onUpdate(function (obj) {
            // 动态改变相机位置
            camera.position.set(obj.x, obj.y, obj.z);
            // 动态计算相机视线
            camera.lookAt(obj.tx, obj.ty, obj.tz);
        })
        .start();

        //考虑到考虑OrbitControls的影响,改写成下面
        .onUpdate(function (obj) {
            // 动态改变相机位置
            camera.position.set(obj.x, obj.y, obj.z);
            // 动态计算相机视线
            // camera.lookAt(obj.tx, obj.ty, obj.tz);
            // 方式2
            controls.target.set(obj.tx, obj.ty, obj.tz);
            controls.update();
        })
})
```
## 整体代码
```javascript
// 切换到设备A预览状态
document.getElementById('A').addEventListener('click', function () {
    const A = model.getObjectByName('设备A标注');
    const pos = new THREE.Vector3();
    A.getWorldPosition(pos); //获取三维场景中某个对象世界坐标
    // 相机飞行到的位置和观察目标拉开一定的距离
    const pos2 = pos.clone().addScalar(30);
    createCameraTween(pos2, pos)
})
// 切换到设备B的预览状态
document.getElementById('B').addEventListener('click', function () {
    const B = model.getObjectByName('设备B标注');
    const pos = new THREE.Vector3();
    B.getWorldPosition(pos); //获取三维场景中某个对象世界坐标
    // 相机飞行到的位置和观察目标拉开一定的距离
    const pos2 = pos.clone().addScalar(30);
    // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近
    createCameraTween(pos2, pos)
})
// 切换到设备停车场的预览状态
document.getElementById('car').addEventListener('click', function () {
    const car = model.getObjectByName('停车场标注');
    const pos = new THREE.Vector3();
    //获取三维场景中某个对象世界坐标
    car.getWorldPosition(pos);
    // 向量的x、y、z坐标分别在pos基础上增加30
    const pos2 = pos.clone().addScalar(30);
    createCameraTween(pos2,pos)
})


// 相机整体预览对应的位置和观察目标
const cameraPos0 = new THREE.Vector3(202, 123, 125) 
const target0 = new THREE.Vector3(0, 0, 0);
// 切换整体预览状态
document.getElementById('all').addEventListener('click', function () {
    // 相机从当前位置camera.position回到整体预览状态
    createCameraTween(cameraPos0, target0)
})

// 相机动画函数，从A点飞行到B点，A点表示相机当前所处状态
// pos: 三维向量Vector3，表示动画结束相机位置
// target: 三维向量Vector3，表示相机动画结束lookAt指向的目标观察点
function createCameraTween(endPos,endTarget){
    new TWEEN.Tween({
        // 不管相机此刻处于什么状态，直接读取当前的位置和目标观察点
        x: camera.position.x,
        y: camera.position.y,
        z: camera.position.z,
        tx: controls.target.x,
        ty: controls.target.y,
        tz: controls.target.z,
    })
    .to({
        // 动画结束相机位置坐标
        x: endPos.x,
        y: endPos.y,
        z: endPos.z,
        // 动画结束相机指向的目标观察点
        tx: endTarget.x,
        ty: endTarget.y,
        tz: endTarget.z,
    }, 2000)
    .onUpdate(function (obj) {
        // 动态改变相机位置
        camera.position.set(obj.x, obj.y, obj.z);
        // 动态计算相机视线
        // camera.lookAt(obj.tx, obj.ty, obj.tz);
        controls.target.set(obj.tx, obj.ty, obj.tz);
        controls.update();//内部会执行.lookAt()
    })
    .start();
}
```
## 改为射线拾取目标
```javascript
const span = document.getElementById('name');
let chooseObj = null;
renderer.domElement.addEventListener('click', function (event) {
    const px = event.offsetX;
    const py = event.offsetY;
    //屏幕坐标转标准设备坐标
    const x = (px / window.innerWidth) * 2 - 1;
    const y = -(py / window.innerHeight) * 2 + 1;
    const raycaster = new THREE.Raycaster();
    //.setFromCamera()在点击位置生成raycaster的射线ray
    raycaster.setFromCamera(new THREE.Vector2(x, y), camera);
    const cunchu = model.getObjectByName('存储罐');
    // 射线拾取模型对象(包含多个Mesh)
    // 可以给待选对象的所有子孙后代Mesh，设置一个祖先属性ancestors,值指向祖先(待选对象)    
    for (let i = 0; i < cunchu.children.length; i++) {
        const group = cunchu.children[i];
        //递归遍历chooseObj，并给chooseObj的所有子孙后代设置一个ancestors属性指向自己
        group.traverse(function (obj) {
            if (obj.isMesh) {
                obj.ancestors = group;
            }
        })
    }
    // 射线交叉计算拾取模型
    const intersects = raycaster.intersectObjects(cunchu.children);
    console.log('intersects', intersects);
    if (intersects.length > 0) {
        // 通过.ancestors属性判断那个模型对象被选中了
        outlinePass.selectedObjects = [intersects[0].object.ancestors];
        //tag会标注在intersects[0].object.ancestors模型的局部坐标系原点位置
        intersects[0].object.ancestors.add(tag);
        chooseObj = intersects[0].object.ancestors;
        // 获取模型对象对应的标注点
        // console.log('intersects[0].object.ancestors.name', intersects[0].object.ancestors.name);
        // const obj = model.getObjectByName(intersects[0].object.ancestors.name + '标注');
        // //tag会标注在空对象obj对应的位置
        // obj.add(tag);
        // chooseObj = obj;
        span.innerHTML = intersects[0].object.ancestors.name; //修改标签数据
        
        const pos = new THREE.Vector3();
        chooseObj.getWorldPosition(pos); //获取三维场景中某个对象世界坐标
        // model.getObjectByName(chooseObj.name+'标注').getWorldPosition(pos); //获取三维场景中某个对象世界坐标
        // 相机飞行到的位置和观察目标拉开一定的距离
        const pos2 = pos.clone().addScalar(30);
        // 相机从当前位置camera.position飞行三维场景中某个世界坐标附近
        createCameraTween(pos2, pos)
    } else {
        // if (chooseObj) {//把原来选中模型对应的标签和发光描边隐藏
        //     outlinePass.selectedObjects = []; //无发光描边
        //     chooseObj.remove(tag); //从场景移除
        // }
    }
})




// 相机整体预览对应的位置和观察目标
const cameraPos0 = new THREE.Vector3(202, 123, 125)
const target0 = new THREE.Vector3(0, 0, 0);
// 鼠标单击按钮，关闭HTML标签
document.getElementById('close').addEventListener('click', function () {
    if (chooseObj) { //把原来选中模型对应的标签和发光描边隐藏
        outlinePass.selectedObjects = []; //无发光描边
        chooseObj.remove(tag); //从场景移除
        // 相机从当前位置camera.position回到整体预览状态
        createCameraTween(cameraPos0, target0)
    }
})




// 相机动画函数，从A点飞行到B点，A点表示相机当前所处状态
// pos: 三维向量Vector3，表示动画结束相机位置
// target: 三维向量Vector3，表示相机动画结束lookAt指向的目标观察点
function createCameraTween(endPos, endTarget) {
    new TWEEN.Tween({
            // 不管相机此刻处于什么状态，直接读取当前的位置和目标观察点
            x: camera.position.x,
            y: camera.position.y,
            z: camera.position.z,
            tx: controls.target.x,
            ty: controls.target.y,
            tz: controls.target.z,
        })
        .to({
            // 动画结束相机位置坐标
            x: endPos.x,
            y: endPos.y,
            z: endPos.z,
            // 动画结束相机指向的目标观察点
            tx: endTarget.x,
            ty: endTarget.y,
            tz: endTarget.z,
        }, 2000)
        .onUpdate(function (obj) {
            // 动态改变相机位置
            camera.position.set(obj.x, obj.y, obj.z);
            // 动态计算相机视线
            // camera.lookAt(obj.tx, obj.ty, obj.tz);
            controls.target.set(obj.tx, obj.ty, obj.tz);
            controls.update(); //内部会执行.lookAt()
        })
        .start();
}
```
## 缓动算法.easing(地球渐入相机动画)
相机接近物体时,速度变慢
```javascript
new TWEEN.Tween(camera.position)
.to({x: 300,y: 300,z: 300}, 3000)
.start()
.easing(TWEEN.Easing.Quadratic.Out);//使用二次缓动函数
```
## 模型或标签淡入淡出
```javascript
// 模型淡入
material.transparent = true;//开启透明计算
material.opacity = 0.0;//完全透明

// new TWEEN.Tween(material)
new TWEEN.Tween({opacity:material.opacity})
.to({opacity:1.0}, 3000)
.onUpdate(function(obj){
    material.opacity = obj.opacity
})
.onComplete(function(){
    //动画结束：关闭允许透明，恢复到模型原来状态
    material.transparent = false;
})
.start();

```
## 标签淡入淡出
```javascript

    // 射线交叉计算拾取模型
    const intersects = raycaster.intersectObjects(cunchu.children);
    console.log('intersects', intersects);
    if (intersects.length > 0) {
        //tag会标注在intersects[0].object.ancestors模型的局部坐标系原点位置
        intersects[0].object.ancestors.add(tag);
        chooseObj = intersects[0].object.ancestors;
        // 获取模型对象对应的标注点
        // console.log('intersects[0].object.ancestors.name', intersects[0].object.ancestors.name);
        // const obj = model.getObjectByName(intersects[0].object.ancestors.name + '标注');
        // //tag会标注在空对象obj对应的位置
        // obj.add(tag);
        // chooseObj = obj;
        span.innerHTML = intersects[0].object.ancestors.name; //修改标签数据

        new TWEEN.Tween({opacity: 0})
            .to({opacity: 1.0}, 1000)
            .onUpdate(function (obj) {
                //动态更新div元素透明度
                divTag.style.opacity = obj.opacity;
            })
            .start();
    }
```