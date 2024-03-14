---
title: JS常用标签
date: 2022-07-23 15:31:26
tags: 
- js
categories:
- Front-end
isShowComments: false
---

<Boxx/>

[[toc]]

## 引入与导出
```javascript
 // 导出单个默认值（CommonJS和ES6模块）
module.exports = myFunction;

// ES6模块
export default myFunction;

// 导出多个变量或函数（CommonJS和ES6模块）:
module.exports = { func1, func2 };

// ES6模块
export { func1, func2 };

// 导出所有成员（ES6模块）:
export * from './otherModule';

//导出默认值和其他成员（ES6模块）:
export default myFunction;
export { otherFunction, someVariable };

// 导出类（ES6模块）:
export class MyClass { /*...*/ }

```
## 函数
```javascript
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Click Event Example</title>
</head>
<body>

<button id="myButton">Click me!</button>

<script>
  document.getElementById('myButton').addEventListener('click', () => {
    alert('Button clicked!');
  };)
</script>

</body>
</html>

```
## 闭包
闭包（Closure）是指在 JavaScript 中内部函数可以访问其外部函数作用域的特性。在 JavaScript 中，函数是可以被当作对象传递、返回或赋值的，而闭包允许函数访问它被创建时所处的词法作用域，即使在它被传递到其他地方执行时也可以保持对这个作用域的引用。

闭包通常形成于一个函数内部创建另一个函数，并且内部函数引用了外部函数的变量。这个外部函数的作用域在内部函数执行时依然是可用的，即使外部函数已经执行完毕。

示例：
```javascript
function outerFunction() {
  const outerVariable = 'I am from the outer function';

  function innerFunction() {
    console.log(outerVariable); // 内部函数访问外部函数的变量
  }

  // 返回内部函数
  return innerFunction;
}

// 调用外部函数
const myClosure = outerFunction();

// 调用返回的内部函数
myClosure(); // 输出: "I am from the outer function"

```
在这个例子中，outerFunction 是外部函数，它包含了一个局部变量 outerVariable 和一个内部函数 innerFunction。outerFunction 返回了 innerFunction，并被赋值给变量 myClosure。即使 outerFunction 已经执行完毕并返回了，但 myClosure 依然保持了对 outerFunction 作用域的引用。当我们调用 myClosure() 时，它依然可以访问和输出 outerVariable 的值。

这种特性使得闭包在JavaScript中被广泛应用，例如在事件处理程序、setTimeout/setInterval、模块模式等场景中。闭包可以帮助保护数据、创建私有变量、延长变量的生命周期，并提供一种在函数外部访问函数内部作用域的方式。

## Promise
Promise 是 JavaScript 中用于处理异步操作的对象，它代表了一个异步操作的最终完成或失败。Promise 可以让我们更优雅地处理异步代码，并且避免了回调地狱（callback hell）。

Promise 有三种状态：

进行中（Pending）: 初始状态，既不是成功（fulfilled）也不是失败（rejected）状态。
已完成（Fulfilled）: 操作成功完成。
已拒绝（Rejected）: 操作失败。
Promise 对象有两个重要的函数：.then() 和 .catch()。.then() 用于处理异步操作成功的情况，.catch() 用于处理异步操作失败的情况。

下面是一个简单的 Promise 示例：
```javascript
// 创建一个 Promise 包装的异步操作
const myPromise = new Promise((resolve, reject) => {
  // 异步操作（例如，模拟一个异步请求）
  setTimeout(() => {
    const success = true; // 假设操作成功

    if (success) {
      // 成功时调用 resolve 并传递结果
      resolve('Operation succeeded!');
    } else {
      // 失败时调用 reject 并传递错误信息
      reject('Operation failed!');
    }
  }, 2000); // 模拟异步操作延迟2秒
});

// 使用 Promise
myPromise
  .then((result) => {
    // 处理操作成功的情况
    console.log('Success:', result);
  })
  .catch((error) => {
    // 处理操作失败的情况
    console.error('Error:', error);
  });

```
在这个示例中，myPromise 是一个 Promise 对象，包装了一个模拟的异步操作（使用 setTimeout 模拟延迟）。

resolve 被调用时，Promise 进入成功状态（Fulfilled）并将结果传递给 .then()。
reject 被调用时，Promise 进入失败状态（Rejected）并将错误信息传递给 .catch()。
使用 .then() 处理成功状态，使用 .catch() 处理失败状态。这样可以更清晰、更有序地处理异步操作的结果。

Promise 还支持链式调用，可以串联多个异步操作。这种链式调用可以通过在 .then() 中返回新的 Promise 对象来实现。这种方式可以避免回调地狱，使代码更易读。
```javascript
// 示例：Promise 链式调用
const firstAsyncOperation = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('First operation completed');
    }, 1000);
  });
};

const secondAsyncOperation = (message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${message}, Second operation completed`);
    }, 1500);
  });
};

firstAsyncOperation()
  .then((result) => {
    console.log(result);
    return secondAsyncOperation(result);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error('Error:', error);
  });

```
这段代码演示了如何串联两个异步操作并处理它们的结果。在第一个异步操作完成后，通过 .then() 返回新的 Promise 对象，然后继续处理第二个异步操作的结果。


