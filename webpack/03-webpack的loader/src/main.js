// 1.使用commonjs的模块化规范
const {add, mul} = require('./js/mathUtils.js');

console.log(add(20, 30));
console.log(mul(10, 20));

// 2.使用ES6的模块化规范
import {name, age, height} from "./js/info"

console.log(name);
console.log(age);
console.log(height);

// 3.依赖css文件
require('./css/normal.css')

// 4.依赖less文件
require('./css/special.less')
document.writeln('<h2>less文件的处理</h2>')


