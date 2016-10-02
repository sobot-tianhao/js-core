/**
 * js基础提升 基本数据类型 obect => array
 * 作者: 满仓银行股打新
 * 时间: 2016-09-18
 */
var arr1 = [1,2,3];
arr1.key1 = 'hehe';
console.log(arr1.length);
console.log(arr1['key1']);
console.log(arr1.length);
console.log(arr1['3'] = 'haha');
console.log(arr1.length);

function func() {
  var arr = Array.prototype.slice.call(arguments);
  arr.push('c');
  return arr;
}

console.log(func('a','b'));
