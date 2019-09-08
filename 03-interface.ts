//1.接口的基本使用
//接口作用：给你书写的函数定义参数，规定参数需要传什么，传什么类型，传的个数
interface Iname {
  name: string,
  print(name: string): void
}
//函数参数
const params = {
  name: '张三',
  print: (name) => {
    console.log(name)
  }
}
//函数
const sayName = (n: Iname) => {
  n.print(n.name)
}
//调用函数
sayName(params)


//2.class中使用接口，通过implements实现
interface Iname1 {
  name: string;
  greet(): void;
}
class Person implements Iname1 {
  name: string;
  greet () {
    console.log('hi')
  }
}
let n = new Person()
n.greet()


//3.接口+匿名函数写法
interface Callback {
  (n: string, m: number): void
}
const callback: Callback= (a: string, b: number): void => {
  
}


//4.处理列表数据
//1.接口写法
interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
const todos: Todo[] = [
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
  },
  {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
  }
]
//2.class写法， class也可以作为一个接口
class Todo2 {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

