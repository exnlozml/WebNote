var name = '夏明';
var age = 18;
var flag = true;

function sum(num1, num2){
  return num1 + num2;
}

if(flag) {
  console.log(sum(20, 30));
}

// 1.导出方式一:
export {
  flag,sum
}

// 2.导出方式二:
export var num1 = 1000;
export var height = 1.88;

// 3.到处函数/类:
export function mul(num1, num2) {
  return num1 + num2;
}

export class Person {
  run() {
    console.log('在奔跑');
  }
}

// 4.export default 导出默认的东西

// const address = '北京市'
// export default address

export default function(argument) {
  console.log(argument);
}
