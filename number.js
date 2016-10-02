/**
 * js基础提升 基本数据类型 string
 * 作者: 满仓银行股打新
 * 时间: 2016-09-18
 */
var num = 42.;
console.log(num.toFixed(2));
console.log(42..toFixed(2));

function func() {
  var result = {};
  return void result;
}

console.log(func());
console.log(Object.is(1 / 'foo' , NaN));
console.log(Object.is(-0 , -0));

if (!Object.is) {
  Object.is = function(v1, v2) {

    // 判断 无穷数
    if (v1 === 0 && v2 === 0) {
      return 1 / v1 === 1 / v2;
    }

    // 判断 NaN
    if (v1 !== v2) {
      return v2 !== v2;
    }

    return v1 === v2;
  }
}
