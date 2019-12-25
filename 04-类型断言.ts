//类型断言：在编译时，告诉编译器是哪种类型

//1.写法
//(<string>x)表示把x断言成字符串类型，然后就可以用substring方法了
let x: any = 'abcdefg'
let s = (<string>x).substring(0,3)



//2.类型断言+接口写法
//使用场景：假如申明一个空对象，然后给空对象添加数据，是会报错的

//错误写法
// let person = {}
// person.name = '张三'

//正确写法
interface Person2 {
  name: string;
  age: number
}
let person = <Person2>{}  //这里或者写成这样：let person = {} as Person2
person.name = '张三'
person.age = 18

