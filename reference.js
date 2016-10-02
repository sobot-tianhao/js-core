var a = 2;
a++;
var b = a;

console.log(a, b);


var c = 4;
var d = c;
d++;
console.log(c, d);

var arr1 = [1,2,3];
var arr2 = arr1;

arr2.push(4);
console.log(arr1, arr2); // [1,2,3,4] , [1,2,3,4]

arr2 = [4,5,6];
console.log(arr1, arr2); // [1,2,3] , [4,5,6]

var args = [1,2,3];
var obj = {
  a: 2
}
function foo(arr) {

  // 修改的现有的引用的值 影响另外一个副本
  arr.push(4);
  console.log(arr);

  // 改变副本的引用 但不影响原来的引用
  arr = [4,5,6];
  console.log(arr);
}

foo(args);
console.log(args); // [1,2,3,4];

将复合类型创建副本 进行值复制传递
function foo1(arr) {
  arr.push(4);
  arr = [4,5,6];
}

foo1(args.slice()); // 传入的是新创建的副本 不会影响最外面的副本

console.log(args);

将简单值 封装为复合类型 进行引用传递
function foo2(obj) {
  obj.a = 42;
}

foo2(obj);

console.log(obj);

var num = 2;
function foo3(data) {

  // 此时还是标量对象
  console.log(data);
  // data 指向Number标量对象拆装的基本数据类型
  data = data + 1;
  console.log(data);
}

var numObj = new Number(num);
foo3(numObj);

console.log(num);
console.log(numObj);
