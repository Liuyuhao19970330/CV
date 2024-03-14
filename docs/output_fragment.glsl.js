export default /* glsl */`
#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif

// https://github.com/mrdoob/three.js/pull/22425
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif

// 设置透明度变化
float r = distance(gl_PointCoord, vec2(0.5, 0.5));
// diffuseColor.a = diffuseColor.a*(1.0 - r/0.5);//透明度线性变化
diffuseColor.a = diffuseColor.a*pow( 1.0 - r/0.5, 2.0 );//透明度非线性变化  参数2越大，gl_PointSize要更大，可以直接设置着色器代码，可以设置材质size属性
gl_FragColor = vec4( outgoingLight, diffuseColor.a );
`;

// export default /* glsl */`
// #ifdef OPAQUE
// diffuseColor.a = 1.0;
// #endif

// #ifdef USE_TRANSMISSION
// diffuseColor.a *= transmissionAlpha + 0.1;
// #endif

// // 设置透明度变化
// float r = distance(gl_PointCoord, vec2(0.5, 0.5));
// diffuseColor.a = diffuseColor.a * pow(1.0 - r / 0.5, 2.0);

// // 发光效果
// float glowIntensity = 1.5; // 辉光强度，可以根据需要调整
// vec3 glowColor = vec3(1, 1, 1); // 辉光颜色，这里设置为白色
// float edge = 0.3; // 边缘的辉光阈值，可以根据需要调整

// // 在边缘处增加辉光效果
// if (r > edge) {
//     float glowFactor = (r - edge) / (0.5 - edge);
//     glowFactor = pow(glowFactor, 2.0); // 辉光衰减效果
//     vec3 glow = glowColor * glowIntensity * glowFactor;
//     gl_FragColor = vec4(outgoingLight + glow, diffuseColor.a);
// } else {
//     gl_FragColor = vec4(outgoingLight, diffuseColor.a);
// }
// `;
