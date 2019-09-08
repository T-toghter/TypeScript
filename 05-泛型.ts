//1.基本使用
// 可以用很多类型来代替 T
// T[] 代表数组，每个元素都是 T 类型
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}
// 调用，可以传入很多类型，代码复用
let myNumArray = getArray<number>([100, 200, 300]);
let myStrArray = getArray<string>(['hello', 'world']);


//2.在class中使用
class Pair<F, S> {
  private _first: F;
  private _second: S;

  constructor(first: F, second: S) {
      this._first = first;
      this._second = second;
  }
  get first(): F {
      return this._first;
  }
  get second(): S {
      return this._second;
  }
}
let pair = new Pair<boolean, string>(true, "111");
console.log(pair.first);
console.log(pair.second);


//3.在函数中使用
// pairs 是个数组参数，数组中的每个元素是 Pair<F, S> 类型
function getFirstArray<F, S>(pairs: Pair<F, S>[]): F[] {
  let arr: F[] = [];
  for (let i = 0; i < pairs.length; i++) {
      let first: F = pairs[i].first;
      arr.push(first);
  }
  return arr;
}
let numArray: Pair<number, boolean>[] = [new Pair(1, true), new Pair(2, false), new Pair(4, true)];
console.log(getFirstArray(numArray));


//4.在接口中使用
interface Pair1<F, S> {
  first: F;
  second: S;
}
let p: Pair1<string, number> = { first: "rails365", second: 45 };
console.log(p);


//5.扩展运算符中使用
function foo(x: number, y: number, z: number) { 
  console.log(x, y, z);
}
var args: number[] = [0, 1, 2];
(<any>foo)(...args);