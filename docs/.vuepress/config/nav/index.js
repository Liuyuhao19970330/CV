//导航栏
module.exports = [
    {text: '主页', link: '/index.html', icon: 'reco-home'},
    {
        text: '其它', icon: 'reco-document',
        items: [
            {
                text: 'Projects🎈',
                items: [{
                    text: '✔ My Project ✨',
                    link: '/other/project',
                }, {
                    text: '✔ 友 情 链 接 🎃',
                    link: '/other/friends',
                }]
            }, {
                text: 'Common sites🎈',
                items: [{
                    text: 'threejs开发手册',
                    link: 'https://threejs.org',
                }, {
                    text: 'cesium开发手册',
                    link: 'https://cesium.com/downloads/cesiumjs/releases/1.60/Build/Documentation/',
                }, {
                    text: 'npm手册',
                    link: 'https://www.npmjs.com/',
                }, {
                    text: 'cesium-glsl开发手册',
                    link: 'https://cesium.com/downloads/cesiumjs/releases/b28/Documentation/czm_getDefaultMaterial.html?classFilter=czm_getDefaultMaterial&show=glsl',
                }, {
                    text: '菜鸟教程',
                    link: 'https://www.runoob.com/',
                }, {
                    text: 'Vue.js开发手册',
                    link: 'https://cn.vuejs.org',
                }, {
                    text: 'BootCDN',
                    link: 'https://www.bootcdn.cn/',
                }, {
                    text: 'Linux命令大全',
                    link: 'https://www.linuxcool.com/',
                }, {
                    text: '编程语言排行榜',
                    link: 'https://www.tiobe.com/tiobe-index/',
                }]
            },]
    },
    {text: '时间线', link: '/timeline/', icon: 'reco-date'},
    {text: '关于我', link: '/about/', icon: 'reco-message'}
]
