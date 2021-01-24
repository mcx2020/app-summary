/****************************************

Promise
我们把时间较长的任务的代码写在 Promise 对象里
然后通过 .then .catch 方法把回调函数放入其中

*****************************************/

//创建一个 Promise 对象
function fetchData() {
	return new Promise((resolve, reject) => {
		// 在合适的时机调用 resolve 和 reject 函数，
	})
}

//传统方式使用
fetchData.then((response)=>{
	// 处理 response
}).catch((error)=>{
	//处理 error
})

// 请求数据的最佳实践
async function handleData(){
	let response = await fetchData
	// 处理 response
}
handleData.catch(()=>{
	// 处理 error
})
