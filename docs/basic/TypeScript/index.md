### 什么是 TypeScript?

TypeScript 是 JavaScript 的超集, 可以为变量定义不同的类型, 这样我们在静态类型的检查的时候就可以规避一些问题。

支持 ES6 语法

支持面向对象编程的概念

- 类
- 接口
- 继承
- 泛型

TypeScript 不支持在浏览器运行,得编译成纯 JavaScript 才能在浏览器运行。

### 为什么要使用TypeScript ? TypeScript相对于JavaScript的优势是什么?

增加了静态类型, 使得代码质量更好、更加健壮

优势

杜绝手误导致变量名写错

类型一定程度可以充当文档作用, 写 JavaScript 的时候, 就很难对函数出入参有一个清晰的认识, 写 TypeScript 之后, 变量的类型和函数的入参出参都有明确的定义, 阅读和维护代码都有很大的帮助

IDE 可以自动填充和自动联想的

一开始写 TypeScript 的类型的时候, 可能会占用一些我们的开发时间, 但是后期的维护和开发都可以节省很多时间

### TypeScript 中 const 和readonly 的区别?

const 可以放置变量的值被修改

readonly 防止变量的属性被修改

### 枚举和常量枚举的区别?

枚举 (enum) 适用于需要在运行时动态访问的常量集合。

```typescript
enum Color {
  Red,
  Green,
  Blue
}

let color: Color = Color.Red
console.log(color) // 输出: 0
```

常量枚举 (const enum) 更适合于静态使用，能够提高性能，减少生成的代码。

常量枚举会在编译阶段被删除，常量枚举使用的成员会被内联进来，不允许包含计算成员。

```typescript
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

const enum Color {
    Red = 1,
    Green = 2,
    Blue = Red + Green, // 这个成员是计算成员，不允许
}

let dir: Direction = Direction.Up
console.log(dir) // 输出: 0
```

### 接口和类型别名的区别?

接口（interface）和类型别名（type）都可以用来描述对象或者函数类型

而类型别名可以用于其它类型的定义: 基本类型、联合类型、元组类型

```typescript
interface StringProcessor {
    (input: string): string
}

const toUpperCase: StringProcessor = (input) => {
    return input.toUpperCase()
}

console.log(toUpperCase("hello")) // 输出: HELLO
```

```typescript
type StringFormatter = (input: string, prefix: string) => string

const formatString: StringFormatter = (input, prefix) => {
    return `${prefix}${input}`
};

console.log(formatString("world", "Hello, ")) // 输出: Hello, world
```

```typescript
interface User {
    id: number
    name: string
    email: string
}

function getUserInfo(user: User): void {
    console.log(`User ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`)
}

// 使用接口
const user: User = {
    id: 1,
    name: "张三",
    email: "zhangsan@example.com"
}

getUserInfo(user)

type APIResponse =
    | { status: 'success'; data: User[] }
    | { status: 'error'; message: string }

function handleResponse(response: APIResponse): void {
    if (response.status === 'success') {
        console.log('用户列表:', response.data)
    } else {
        console.error('错误信息:', response.message)
    }
}

// 使用类型别名
const response: APIResponse = {
    status: 'success',
    data: [
        { id: 1, name: "张三", email: "zhangsan@example.com" },
        { id: 2, name: "李四", email: "lisi@example.com" },
    ],
}

handleResponse(response)
```