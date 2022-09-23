import fs from 'then-fs'

// 参数fpath表示要读取的文件路径
function getFile(filepath) {
	// 返回值是Promise的实例对象
	return new Promise(
		function(resolve, reject) {
			// then-fs 提供的 readFile() 方法，可以异步地读取文件的内容，返回值是 Promise 的实例对象
			fs.readFile(filepath, 'utf8', (err, dataStr) => {
				// 如果读取失败，则调用失败的回调函数
				if (err) return reject(err)
				// 如果读取成功，则调用成功的回调函数
				resolve(dataStr)
			})
		}
	)
};

// 测试使用封装的读文件的方法
getFile('test.txt').then(
	(r1) => {
		console.log(r1)
	}
).catch(
	(err) => console.log(err.message)
)
