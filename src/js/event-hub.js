// 手写 EventHub
class EventHub{
    constructor(){
        this.events = {}
    }
    on(type,fn){
        if(typeof(fn) !== 'function') return
        this.events[type] = (this.events[type] || [] ).concat(fn)
    }
    emit(type,data){
        this.events[type].forEach(fn=>fn(data))
    }
    off(type,fn){
        if(!this.events[type]) return
        if(!fn){
            delete this.events[type]
            return
        }
        let index = this.events[type].indexOf(fn)
        if (index===-1) return
        this.events[type].splice(index,1)
    }
}