/**
 * js基础提升 typeof 的使用
 * 作者: 满仓银行股打新
 * 时间: 2016-09-18
 */

var a = null;

console.log(!a); // true
console.log(typeof a === 'object'); // true

console.log(typeof function() {} === 'function'); // function => object
console.log(typeof [] === 'object'); //

if (typeof tinker === 'undefined') {
  tinker = (function() {
    console.log('tinker');
  })();
}

if (DEBUG) {
  console.log('DEBUG start');
}

if (typeof DEBUG !== 'undefined') {
  console.log('DEBUG start');
}

(function() {
  var Final = 'hehe';

  function func() {

    var render =
        (typeof Final !== 'undefined') ? Final : function() {
          console.log('Final !!!');
        }

    return render;
  }
})();
