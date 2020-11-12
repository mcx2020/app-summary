
// 微信小程序封装 GET 请求
function fetchPure(method, api, data, isFormData) {
	let host = 'https://api.tusij.com'
	let url = ''
	if (api.indexOf('?') > -1) {
		url = host + `&token=${app && app.globalData && app.globalData.token}`
	} else {
		url = host + `?token=${app && app.globalData && app.globalData.token}`
	}
	return new Promise((resolve, reject) => {
		wx.request({
			method,
			url,
			header: {
				'content-type': isFormData ? "application/x-www-form-urlencoded" : 'application/json'
			},
			data,
			success(res) {
				resolve(res)
			},
			fail(e) {
				reject(e)
			}
		})
	})
}

// 生成随机字符串
function getRandomCode(length = 12) {
	let data = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	let string = ""
	for (let i = 0; i < length; i++) {
		let r = parseInt(Math.random() * 62)
		string += data[r]
	}
	return string
}

function fetch(method, api, code, queryData = null, hashData = null) {
	let host = 'https://api.tusij.com'
	let nonce = getR
}