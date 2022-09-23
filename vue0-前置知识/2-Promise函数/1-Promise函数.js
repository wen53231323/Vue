// 创建 Promise 的实例，代表一个异步操作
const p = new Promise();

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Promise里保存着某个未来才会结束的事件（通常是一个异步操作）的结果
const p = new Promise(
	function(resolve, reject) {
		// resolve()保存请求成功时的结果
		resolve(data)
		// reject()保存请求失败是的错误信息
		reject(err)
	}
)

// 实例对象可以通过原型链的方式访问到 .then() 方法，
// .then() 方法用来预先指定成功和失败的回调函数，p.then(成功的回调函数，失败的回调函数)
// .then() 方法中成功的回调函数是必选的、失败的回调函数是可选的
p.then(
	function result(data) {
		alert("调用成功");
	},
	function error(err) {
		alert("调用失败");
	}
);

// ------------------------------------------------------------------------------------------------------------------------------------------------------

// 如果上一个 .then() 方法中返回了 Promise 实例对象，则可以继续通过 .then() 的链式调用进行处理
p.then(
	a => {
		const b = new Promise();
		return b;
	}
).then(
	result => {
		alert("调用成功");
	},
	error => {
		alert("调用失败");
	}
);

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// 在 Promise 的链式操作中如果发生了错误，可以使用 Promise.prototype.catch 方法进行捕获和处理：
p.then(
	result => {
		alert("调用成功");
	},
	error => {
		alert("调用失败");
	}
).catch(
	err => {
		console.log(err.message);
	}
);

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// 创建 Promise 的实例，代表一个异步操作
const p1 = new Promise();
const p2 = new Promise();
const p3 = new Promise();
// 数组中 Promise 实例的顺序，就是最终结果的顺序
const promiseArray = [p1, p2, p3];
// Promise.all() 方法会发起并行的 Promise 异步操作，等所有的异步操作全部结束后，才会执行下一步的 .then操作（等待机制）
p.all(promiseArray).then(
	result => {
		alert("调用成功");
	},
	error => {
		alert("调用失败");
	}
).catch(
	err => {
		console.log(err.message);
	}
);

// ------------------------------------------------------------------------------------------------------------------------------------------------------
// 创建 Promise 的实例，代表一个异步操作
const p1 = new Promise();
const p2 = new Promise();
const p3 = new Promise();
// 数组中 Promise 实例的顺序，就是最终结果的顺序
const promiseArray = [p1, p2, p3];
// Promise.race() 方法会发起并行的 Promise 异步操作，只要任何一个异步操作完成，就立即执行下一步的.then 操作（赛跑机制）
p.race(promiseArray).then(
	result => {
		alert("调用成功");
	},
	error => {
		alert("调用失败");
	}
).catch(
	err => {
		console.log(err.message);
	}
);
