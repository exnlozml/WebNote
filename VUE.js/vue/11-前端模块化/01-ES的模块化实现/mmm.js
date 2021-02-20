// 1.导入的{}中定义的变量
import {flag, sum} from "./aaa.js"

if(flag) {
  console.log('小明是天才');
}

// 2.直接导入export定义的变量
import {num1, height} from "./aaa.js"

console.log(num1);
console.log(height);

// 3.导入export的function/calss
import {mul, Person} from "./aaa.js"

console.log(mul(44, 77));

const p = new Person();
p.run();

// 4.导入export defalut中的内容
import addr from "./aaa.js"

addr('你好啊');

// 5.统一全部导入
// import {flag, num1, height, sum, Person, mul} from "./aaa.js"

import * as aaa from "./aaa.js"

console.log(aaa.flag);
console.log(aaa.height);