---
title: HTML常用标签
date: 2022-07-23 15:31:26
tags: 
- HTML
categories:
- Front-end
isShowComments: false
---

<Boxx/>

[[toc]]

## 简介
  div p hr table  form  等等

## 如何使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML 示例</title>
    <style>
        /* 内联样式示例 */
        .highlight {
            color: red;
        }
    </style>
</head>
<body>

    <!-- 基本结构 -->
    <div>
        <header>
            <h1>主标题</h1>
        </header>
        <nav>
            <ul>
                <li><a href="#">导航链接 1</a></li>
                <li><a href="#">导航链接 2</a></li>
            </ul>
        </nav>
        <section>
            <article>
                <h2>文章标题</h2>
                <p>这是一篇文章的内容。</p>
            </article>
        </section>
        <footer>
            <p>&copy; 2024 版权所有</p>
        </footer>
    </div>

    <!-- 表单 -->
    <form action="/submit" method="post">
        <label for="username">用户名：</label>
        <input type="text" id="username" name="username">
        <br>
        <label for="password">密码：</label>
        <input type="password" id="password" name="password">
        <br>
        <input type="submit" value="提交">
    </form>

    <!-- 表格 -->
    <table border="1">
        <tr>
            <th>姓名</th>
            <th>年龄</th>
        </tr>
        <tr>
            <td>张三</td>
            <td>25</td>
        </tr>
        <tr>
            <td>李四</td>
            <td>30</td>
        </tr>
    </table>

    <!-- 图像 -->
    <img src="image.jpg" alt="描述图像的文字">

    <!-- 超链接 -->
    <a href="https://www.example.com">点击这里访问示例网站</a>

    <!-- 列表 -->
    <ul>
        <li>项目 1</li>
        <li>项目 2</li>
    </ul>

    <ol>
        <li>第一项</li>
        <li>第二项</li>
    </ol>

    <!-- 标题 -->
    <h1>主标题</h1>
    <h2>副标题</h2>
    <h3>子标题</h3>
    <!-- ... -->
    <h6>最小级标题</h6>

    <!-- 其他标签 -->
    <div>
        <span class="highlight">这是一个内联样式的示例。</span>
    </div>

</body>
</html>
```




## 表单大全

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML 表单示例</title>
    <style>
        .highlight {
            color: red;
        }
    </style>
</head>
<body>

    <form action="/submit" method="post">

        <!-- 文本输入框 -->
        <label for="username">用户名：</label>
        <input type="text" id="username" name="username">
        <br>

        <!-- 密码输入框 -->
        <label for="password">密码：</label>
        <input type="password" id="password" name="password">
        <br>

        <!-- 单选框 -->
        <p>性别：</p>
        <label for="male">男性</label>
        <input type="radio" id="male" name="gender" value="male">
        <label for="female">女性</label>
        <input type="radio" id="female" name="gender" value="female">
        <br>

        <!-- 多选框 -->
        <p>兴趣爱好：</p>
        <label for="hobby1">阅读</label>
        <input type="checkbox" id="hobby1" name="hobbies[]" value="reading">
        <label for="hobby2">游泳</label>
        <input type="checkbox" id="hobby2" name="hobbies[]" value="swimming">
        <label for="hobby3">音乐</label>
        <input type="checkbox" id="hobby3" name="hobbies[]" value="music">
        <br>

        <!-- 下拉菜单 -->
        <label for="country">选择国家：</label>
        <select id="country" name="country">
            <option value="china">中国</option>
            <option value="usa">美国</option>
            <option value="india">印度</option>
        </select>
        <br>

        <!-- 文本域 -->
        <label for="message">留言：</label>
        <textarea id="message" name="message" rows="4" cols="50"></textarea>
        <br>

        <!-- 提交按钮 -->
        <input type="submit" value="提交">

    </form>

</body>
</html>
```
