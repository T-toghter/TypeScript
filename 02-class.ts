//类，面向对象编程，通过ES6语法书写一个构造函数

//1.定义一个clas
class Person1 {
  first_name: string;
  last_name: string;
  count: number;

  //constructor是个构造器函数，用来接收参数，并改变class里的属性
  constructor(a: string, b: string, c?: number) {
    this.first_name = a;
    this.last_name = b;
    if (c) {
      this.count = c
    }
  }
}
let m = new Person1('第一个名字', '第二个名字', 18)
// console.log(m.count)


//2.class实现继承
class Father {
  name: string;
  age: number;

  geet() {
    console.log('hi')
  }
}
let farther = new Father()
farther.name = '张三'


class Son extends Father {
  //super代表父类
  getFar() {
    super.geet()
  }
}
//class可以用来作为实例的一个数据类型，那么实例就只能访问class里有的属性
let son: Father = new Son()
son.geet()


//3.static静态属性方法
class Fruits {
  a: string = 'apple';

  static b: string = 'banana'

  static get() {
    return Fruits.b
  }
}
//static的值可以直接获取，不需要把class实例化
console.log(Fruits.b)
//非static的值必须要实例化class才能获取
let f = new Fruits()
console.log(f.a)
