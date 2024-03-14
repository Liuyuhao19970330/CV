// 引入Three.js
import * as THREE from 'three';
import output_fragment from './output_fragment.glsl.js'

var model3 = new THREE.Group(); //声明一个组对象

function animation() {
  if (index > indexMax) index = 0;
  index += 5
  points2 = threeDPoints.slice(index, index + num); //从曲线上获取一段
  var curve = new THREE.CatmullRomCurve3(points2);
  var newPoints2 = curve.getSpacedPoints(100); //获取更多的点数
  geometry2.setFromPoints(newPoints2);
  requestAnimationFrame(animation);
}
animation();

export {
  model3
}