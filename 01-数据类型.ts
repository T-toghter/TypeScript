//数据类型

/**
 * string(字符串)
 */
let myName: string = '张三'

/**
 * number(数字)
 */
let myAge: number = 18


/**  Array(数组)
 *  两种定义数组方法
 *  第一种： let arr: number[]
 *  第二种:  let arr: Array<number>
 */
//1.number数组
let arr: number[] = [1, 2, 3]
//2.string数组
let arr1: string[] = ['a', 'b', 'c']


/**   
 *  Tuple(元组)
 *  类似于js里的数组，里面的元素可number、可string
 */
let my_tuple: [string, number]
my_tuple = ['abc', 123]


/**
 *  Function(函数)
 */
//1.定义函数
function add(a: number, b: number): number {
  return a + b
}
add(1, 2)
//2.写一个公用函数，使用时才调用。必须要定义返回类型，返回值为void不需要return，返回指定类型值时，函数需要return
function add1(a: number, b: number): void {
  
}
//3.默认参数与可选参数,注意点：第一个参数必须是必传，可选参数不能作为第一个
function add2(a: number = 10, b?: number): void {
  
}
//4.不确定传几个参数
function add3(...num: number[]): number {
  return num.reduce((total, num) => {
    return  total + num
  })
}
add3(1, 2, 3)


/**
 * enum(枚举)
 * 应用：select等应用
 */
enum Days {
  SUN = 100, MON, TUE, WED, THU, FRI, SAT
}
let day: Days;
day = Days.WED
console.log(day)  //103

