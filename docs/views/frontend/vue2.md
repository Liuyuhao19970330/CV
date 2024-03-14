---
title: 关于Vue2的学习
catalog: true
date: 2022-05-12 13:59:44
tags: 
- Vue
categories:
- Front-end
isShowComments: false
---

<Boxx/>

[[toc]]

## Vue2基本框架
当你创建一个Vue 2的基本模板时，你需要包含Vue的核心库，并且可以选择是否使用Vue Router和VueX，这取决于你的项目需求。以下是一个简单的Vue 2模板，包括Vue核心、Vue Router和VueX：

1.首先，确保你已经安装了Node.js和npm。然后使用以下命令安装Vue CLI：npm install -g @vue/cli
2.创建一个新的Vue项目：vue create my-vue-app
3.进入项目目录：cd my-vue-app
4.打开 src/main.js 文件，这是Vue应用的入口文件，替换其内容为以下基本模板：
```javascript
// main.js

import Vue from 'vue';
import App from './App.vue';
import router from './router'; // 如果你使用了Vue Router
import store from './store';   // 如果你使用了VueX

Vue.config.productionTip = false;

new Vue({
  router, // 如果你使用了Vue Router
  store,  // 如果你使用了VueX
  render: h => h(App),
}).$mount('#app');

```
5.如果你使用了Vue Router，确保你已经配置了路由。在 src/router/index.js 中，你可以像这样配置一个简单的路由：
```javascript
// router/index.js

import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

```
6.如果你使用了VueX，确保你已经配置了状态管理。在 src/store/index.js 中，你可以像这样配置一个简单的store：
```javascript
// store/index.js

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // your state properties here
  },
  mutations: {
    // your mutations here
  },
  actions: {
    // your actions here
  },
  modules: {
    // your modules here
  },
});

```
7.最后，创建一个简单的Vue组件。在 src/components/HelloWorld.vue 中，你可以像这样创建一个组件：
```html
<!-- HelloWorld.vue -->

<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Hello, Vue!',
    };
  },
};
</script>

<style scoped>
/* your component styles here */
</style>

```
然后在 src/App.vue 中使用这个组件：
```html
<!-- App.vue -->

<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style>
/* your global styles here */
</style>

```
## 组件导入
```html
<!-- App.vue -->

<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'; // 请根据你的项目结构调整路径

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style>
/* your global styles here */
</style>
```
## axios
1.npm install axios
2.yarn add axios
3.打开你的Vue项目入口文件（通常是main.js），并在文件的顶部引入axios：
```javascript
// main.js

import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');

```
4.在组件中使用
```html
<!-- MyComponent.vue -->

<template>
  <div>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="data">
      <!-- Display the fetched data -->
      {{ data }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    };
  },
  methods: {
    fetchData() {
      // 使用axios进行GET请求
      axios.get('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
          // 请求成功后更新data
          this.data = response.data;
        })
        .catch(error => {
          // 处理请求错误
          console.error('Error fetching data:', error);
        });
    },
  },
};
</script>

```








