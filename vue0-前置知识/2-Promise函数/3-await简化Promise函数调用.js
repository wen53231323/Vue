import thenFs from 'then-fs'

// 如果在 function 中使用了 await，则 function 必须被 async 修饰
async function getAllFile() {
  // 第一个 await 之前的代码会同步执行，await 之后的代码会异步执行
  const result = await thenFs.readFile('test.txt', 'utf8')
  console.log(result)
}