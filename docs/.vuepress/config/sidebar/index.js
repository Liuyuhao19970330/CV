//侧边栏
module.exports = {
    '/views/': [
        '',
        {
            title: '🍕 知识晶体 Q&A',
            collapsable: true,
            children: [
                'qaq/sum_fe_001', 'qaq/sum_fe_002',
                'qaq/sum_java_001', 'qaq/sum_java_002',
                'qaq/sum_db_001',
                'qaq/sum_spring_001', 'qaq/sum_spring_002', 'qaq/sum_spring_003',
                'qaq/sum_ms_001',
            ]
        },
        {
            title: '🌏 cesiumjs',
            collapsable: true,
            children: [
                'specification/ali', 'specification/git',
                'specification/linux01', 'specification/linux02',
                'specification/objectModel', 'specification/提交规范',
                'specification/javaNamingConvention', 'specification/k8s基本命令与pod管理',
            ]
        },
        {
            title: '🏹 前端 Front-end',
            collapsable: true,
            children: [
                'frontend/EChartsStudy', 'frontend/js-json', 'frontend/html', 'frontend/vue2',
                'frontend/reco-info', 'frontend/vuepress-plugin-boxx', 'frontend/TCP&UDP','frontend/css',
                'frontend/js'
            ]
        },
        {
            title: '🌠 threejs ',
            collapsable: true,
            children: [
                'threejs/标签','threejs/canvas','threejs/DEM模型','threejs/GUI','threejs/light',
                'threejs/PBR材质与纹理贴图','threejs/requestAnimationFrame',
                'threejs/UV坐标,贴图','threejs/层级模型','threejs/常见几何体',
                'threejs/动画库tween.js','threejs/骨骼关节Bone','threejs/关键帧动画','threejs/光源和阴影','threejs/后期处理EffectComposer',
                'threejs/几何体BufferGeometry顶点','threejs/几何体顶点颜色数数据','threejs/加载外部三维模型(gltf)','threejs/精灵模型Sprite','threejs/抗锯齿',
                'threejs/模型对象、材质','threejs/欧拉角','threejs/曲线与几何体','threejs/射线拾取模型','threejs/相机基础','threejs/旋转缩放平移',
                'threejs/渲染器和前端UI界面','threejs/阵列方块','threejs/自建多边形','threejs/material大全',
                'threejs/信号波','threejs/信号飞线','threejs/序列帧动画','threejs/发光球体',
                'threejs/设置动画和特效(圆形围墙)','threejs/三维场景标注','threejs/线路','threejs/无人机',
                'threejs/建筑渲染','threejs/设置动画和特效(围墙)','threejs/ExtrudeGeometry批量渲染建筑物','threejs/经纬度转墨卡托',
                'threejs/onBeforeCompile修改材质','threejs/shader2','threejs/CannonJS物理引擎','threejs/math5',
                'threejs/shader1','threejs/八叉树','threejs/骨骼关节Bone','threejs/math4',
                'threejs/旋转缩放平移','threejs/math3','threejs/math2','threejs/math1',
                'threejs/geojson'

            ]
        },
        {
            title: '🍃 地理信息 WEBGIS',
            collapsable: true,
            children: [
                'webgis/MAPGIS', 'webgis/小叶子体验','webgis/openlayer','webgis/mapbox',
            ]
        },
        {
            title: '💧 虚幻5 UE5',
            collapsable: true,
            children: [
                'UE5/十神性格',
            ]
        },
        {
            title: '🔗 随笔 Essay',
            collapsable: true,
            children: [
                'essay/20190928', 'essay/20191109', 'essay/20191116', 'essay/20191130', 'essay/20200227',
                'essay/20200301', 'essay/20200703', 'essay/20200715', 'essay/20200813', 'essay/20201012',
                'essay/20201119', 'essay/20211216', 'essay/20220808', 'essay/20230605',
            ]
        }
    ]
}
