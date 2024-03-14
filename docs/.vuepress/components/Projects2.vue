<template>
    <div>
        <main class="container">
            <aside class="profile">
                <img src="./cv/images/liuyuhao.jpg" alt="">
                <h3>刘宇豪</h3>
                <p>GIS开发工程师</p>
                <div class="share">
                    <a href="" class="fa-brands fa-github"></a>
                    <a href="" class="fa-brands fa-weibo"></a>
                    <a href="/other/wx/" class="fa-brands fa-weixin"></a>
                    <a href="tencent://AddContact/?fromId=45&fromSubId=1&subcmd=all&uin=510143087&website=www.oicqzone.com" class="fa-brands fa-qq"></a>
                </div>
                <a href="" class="btn" @click="downloadPDF">联系我</a>
            </aside>
            <aside class="information">

                <!-- 个人介绍模块 -->
                <section class="about">
                    <h3 class="title">个人介绍</h3>
                    <p style="line-height:2">2018年毕业于湖北科技学院测绘专业(学士)，主修方向地理信息系统，毕业后在湖北省正纽地理信息有限公司工作6个月,主要从事webgis开发工作。
                      2022年毕业于重庆交通大学测绘工程专业(硕士)，主修方向webgis开发，毕业后在中海油工作一年半,主要从事threejs开发工作和三维建模工作。
                    对openlayer,threejs,cesium掌握熟练,对shader掌握一般(着色器不是经常用),对vue2掌握精通(常用vue2,vue3也会),react一般,还会QGIS+cityengine等等。</p>
                    <div class="box-container">
                        <div class="box1">
                          年龄:<b>26</b><br>
                          住址:<b>湖北省仙桃市</b><br>
                          手机号:<b>13110151516</b><br>
                          Email:<b>510143087@QQ.COM</b><br>
                        </div>
                        <div class="box2">
                          岗位:<b>GIS开发工程师</b><br>
                          证书:<b>英语四级,PMP</b><br>
                          工作经验:<b>2年</b><br>
                          到岗时间:<b>随时</b><br>
                        </div>
                    </div>
                </section>

                <!-- 技术栈模块 -->
                <section class="services">
                    <h3 class="title">技术栈</h3>
                    <div class="box-container">
                        <div class="box1" >
                            <img src="./cv/images/icon-1.png" alt="">
                            <h3>threejs</h3>
                        </div>
                        <div class="box1">
                            <img src="./cv/images/icon-2.png" alt="">
                            <h3>cesiumjs</h3>
                        </div>
                        <div class="box1">
                            <img src="./cv/images/icon-3.png" alt="">
                            <h3>JavaScript</h3>
                        </div>
                        <div class="box1">
                            <img src="./cv/images/icon-4.png" alt="">
                            <h3>Vue</h3>
                        </div>
                        <div class="box1">
                            <img src="./cv/images/icon-5.png" alt="">
                            <h3>Openlayer</h3>
                        </div>
                        <div class="box1">
                            <img src="./cv/images/icon-6.png" alt="">
                            <h3>React.Js</h3>
                        </div>
                    </div>
                </section>

                <!-- 技术熟练度模块 -->
                <section class="skills">
                    <h3 class="title">技术熟练度</h3>
                    <div class="box-container">

                        <div class="progress1">
                            <h3>html <span>95%</span></h3>
                            <div class="bar"><span style="width: 95%;"></span></div>
                        </div>
                        <div class="progress1">
                            <h3>css <span>80%</span></h3>
                            <div class="bar"><span style="width: 80%;"></span></div>
                        </div>
                        <div class="progress1">
                            <h3>javaScript <span>65%</span></h3>
                            <div class="bar"><span style="width: 70%;"></span></div>
                        </div>
                        <div class="progress1">
                            <h3>threejs <span>80%</span></h3>
                            <div class="bar"><span style="width: 80%;"></span></div>
                        </div>

                        <div class="progress1">
                            <h3>cesiumjs <span>70%</span></h3>
                            <div class="bar"><span style="width: 70%;"></span></div>
                        </div>
                        <div class="progress1">
                            <h3>openlayer <span>80%</span></h3>
                            <div class="bar"><span style="width: 80%;"></span></div>
                        </div>
                        <div class="progress1">
                            <h3>vue <span>80%</span></h3>
                            <div class="bar"><span style="width: 80%;"></span></div>
                        </div>
                        <div class="progress1">
                            <h3>Echart <span>70%</span></h3>
                            <div class="bar"><span style="width: 70%;"></span></div>
                        </div>

                    </div>
                </section>

                <!-- 学习工作经历模块 -->
                <section class="experience">
                    <h3 class="title">学习工作经历</h3>
                    <div class="box-container">
                        <div class="box1">
                            <span>2014 - 2018</span>
                            <h3>湖北科技学院测绘工程</h3>
                            <p>在大学本科期间，通过专业学习和自我学习掌握了主流前端知识体系，能够独立完成具有一定业务复杂度的前端项目。</p>
                        </div>
                        <div class="box1">
                            <span>2019-2022</span>
                            <h3>重庆交通大学测绘工程</h3>
                            <p>研究生期间主要参加老师的项目,做关于智慧城市方面的开发工作,在学校获得过2-3等奖学金</p>
                            <p>项目组主要采用Vue2技术栈，写写三维前端方面的开发,闲暇时自己写写自己的网站<a href="https://liuyuhao123.cc">(liuyuhao123.cc)</a></p>
                        </div>
                        <div class="box1">
                            <span>2018-2019</span>
                            <h3>湖北正纽地理信息有限公司</h3>
                            <p>在湖北正纽地理信息有限公司组完成了半年的工作，接触了解了webGIS的工作流程，对前端工作流有了深刻的认识和使用经验。</p>
                            <p>项目组主要采用Vue2技术栈，我个人参与了Web端的优化和GIS数据处理，熟悉在线文档的开发。</p>
                        </div>
                        <div class="box1">
                            <span>2022-2024</span>
                            <h3>中海福陆重工有限公司</h3>
                            <p>2022-2024年在中海油工作,工作内容主要有建模,以及智慧工厂的开发和维护,使用的是threejs框架</p>
                            <p>公司的前端维护工作和管理,期间考了一个PMP证书,准备在今年考高项.</p>
                        </div>
                    </div>

                </section>

                <!-- 联系方式模块 -->
                <section class="contact">
                    <h3 class="title">联系方式</h3>
                    <div class="box-container">
                        <div class="box1">
                            <i class="fa-regular fa-map"></i>
                            <div class="info">
                                <h3>详细地址</h3>
                                <p>湖北省仙桃市</p>
                            </div>
                        </div>
                        <div class="box1">
                            <i class="fa-regular fa-map"></i>
                            <div class="info">
                                <h3>手机号</h3>
                                <p>13110151516(微信同号)</p>
                            </div>
                        </div>
                        <div class="box1">
                            <i class="fa-regular fa-map"></i>
                            <div class="info">
                                <h3>email</h3>
                                <p>510143087@QQ.COM</p>
                            </div>
                        </div>
                    </div>
                </section>

            </aside>
        </main>
    </div>
  </template>
  
  <script>
    export default {
      name: "Projects2",
      components: {

      },
      data() {
        return {
          
        };
      },
      mounted() {
       
      },
      methods: {
        downloadPDF() {

    }
      }
    };
  </script>
  
<style scoped>
@import url('https://cdn.bootcdn.net/ajax/libs/font-awesome/6.2.1/css/all.css');
@import url('./cv/css/style.css');
.information .about .box2,.box1{
  flex: 250x;
  color: #494646;
  line-height: 2.5; /* 设置行高为1.5倍 */
}

.information .about .box-container{
  justify-content:space-between;
  width: 60%;
}
.information .services .box-container .box1{
  flex: 50px;
  padding: 20px; /* 让内容跟边距有间距 */
  background: var(--light-bg);
  text-align: center;
  border-radius: 5px;
}
.information .skills .progress1 h3{
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  color: var(--black);
  font-size: 15px;
}

.information .skills .progress1 span{
  color: var(--light-color);
}

/* 设置进度条样式 */
.information .skills .progress1 .bar{
  height: 10px;
  background: var(--light-bg);
  border-radius: 5px;
}

.information .skills .progress1 .bar span{
  display: block;
  height: 100%;
  background: var(--blue);
  border-radius: 5px;
}
.information .experience .box-container{
  display: flex;
  flex-wrap: wrap;
  gap:15px
}

.information .experience .box1{
  flex: 350px;
  padding: 20px; /* 内容跟边框之间有间隙 */
  background: var(--light-bg);
  border-radius: 5px;
}

/* 设置文本样式 */
.information .experience .box1 span{
  color: var(--blue);
  font-size: 15px;
}

.information .experience .box1 h3{
  padding: 5px 0;
  color: var(--black);
  font-size: 17px;
}

.information .experience .box1 p{
  color: var(--light-color);
  font-size: 13px;
  line-height: 2;
}
</style>
