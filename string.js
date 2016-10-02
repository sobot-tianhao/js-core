/**
 * js基础提升 基本数据类型 string
 * 作者: 满仓银行股打新
 * 时间: 2016-09-18
 */
var a1 = 'abc';
var a2 = ['a','b','c'];

console.log(a1.length);
console.log(a2.length);

a1[0] = 'A';
a2[0] = 'A';

console.log(a1);
console.log(a2);

var c = a1.toUpperCase(); // string不可修改 只会新创建

console.log(a1);
console.log(c);
console.log(a1 === c);

console.log(Array.prototype.join.call(a1,'-')); // 非变更函数 可以调用
console.log(Array.prototype.reverse(a1)); // 变更函数 不可使用
