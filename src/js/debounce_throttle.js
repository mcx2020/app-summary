const debounce = (fn,delay)=>{
    let timeout
    return ()=>{
        if(timeout){
            clearTimeout(timeout)
        }
        timeout = setTimeout(fn,delay)
    }
}
const throttle = (fn,threshold)=>{
    let currentDate
    return ()=>{
        let newDate = new Date
        if(currentDate && newDate - currentDate < threshold) {
            return
        }
        currentDate = newDate
        fn()
    }
}