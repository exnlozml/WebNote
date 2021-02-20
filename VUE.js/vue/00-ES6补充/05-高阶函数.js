// 编程范式: 命令式编程/声明式编程
// 编程范式: 面向对象编程(第一公民: 对象)/函数式编程(第一公民: 函数)
// filter/map/reduce

const nums = [12, 343, 456, 3, 8798, 32, 098];



// 1.filter函数的使用
// filter中的回调函数有一个要求: 必须返回一个boolean值
// true: 当返回true时, 函数内部会自动将这次回调的n加入到新的数组中
// false: 当返回false时, 函数内部会过滤这次的n
// let newNums = nums.filter(function (n) {
//   return n < 100;
// })
// console.log(newNums);

// // 2.map函数的使用
// // 24, 6, 64, 196
// let new1Nums =  newNums.map(function (n) {
//   return n * 2
// })
// console.log(new1Nums);

// //3.reduce函数的使用
// // reduce作用对数据中所有的内容进行汇总
// let total = new1Nums.reduce(function(preValue, n) {
//   return preValue + n;
// }, 0)
// console.log(total);

// 第一次: preValue   0, n 24
// 第二次: preValue  24, n 6
// 第三次: preValue  30, n 64
// 第四次: preValue  94, n 196
// 290

let total = nums.filter(function(n) {
  return n<100;
}).map(function(n) {
  return n*2
}).reduce(function(preValue, n) {
  return preValue + n;
}, 0)
console.log(total);

// 箭头函数写法
// let total = nums.filter(n => n < 100).map(n => n * 2).reduce((preValue, n) => preValue + n);
// console.log(total);