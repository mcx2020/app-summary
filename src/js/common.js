function debugLog(method,obj={}){
	obj.method = method
	console.log(JSON.stringify(obj))
}