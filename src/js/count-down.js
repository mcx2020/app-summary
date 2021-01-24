// 手写倒计时
class CountDown{
  constructor(options) {
    options = options || {}
    this.leftTime=options.leftTime-1 || 86400-1
    this.selectorH=options.selectorH || ".count-down-h"
    this.selectorM=options.selectorM || ".count-down-m"
    this.selectorD=options.selectorD || ".count-down-d"
    this.selectorS=options.selectorS || ".count-down-s"
    this.selectorMs=options.selectorMs || ".count-down-ms"
    this.fn=options.fn
    this.ms = 999
    this.speed=33
    this.countDown()
  }
  countDown(){
    let countTimer = setInterval(()=>{
      this.ms -=this.speed
      if (this.ms<this.speed) {
        this.ms = 999
        this.leftTime--
      }else{
        $(this.selectorD).html(Math.floor(this.leftTime/86400))
        $(this.selectorH).html(Math.floor(this.leftTime%86400/3600))
        $(this.selectorM).html(Math.floor(this.leftTime%3600/60))
        $(this.selectorS).html(Math.floor(this.leftTime%60))
        $(this.selectorMs).html(this.ms)
      }
      if(this.leftTime<=0){
        $(this.selectorMs).html('000');
        clearInterval(countTimer);
        if(this.fn instanceof Function) this.fn()
      }
    }, this.speed)
  }
}