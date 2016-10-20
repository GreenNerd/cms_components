var PageSlide = function(el){
  this.current = 0 //当前页面索引
  
  this.counter = 0
  this.pageX 

  this.width //设备宽度
  this.displacement //滑动的距离

  this.total //图片总数
  this.nowDistance = 0 //起始$el的x值

  this.currentIndex

  this.flag //滑动方向
  this.$el = el
  this.init()
  this.bindEvents()

  this.tablist
  this.timer
  this.carousel()
}
//初始化
  PageSlide.prototype.init = function(){
    var pages = document.getElementById('pages')
    w = pages.offsetWidth;
    h = w * 0.5;
    pages.style.height = h + 'px'; 

    this.width = this.$el.clientWidth
    this.$el.style.webkitTransform = 'translate3d(0,0,0)'
    this.total = this.$el.childElementCount

    this.tablist = document.getElementById('tablist')


    var currentElement = this.$el.firstElementChild;
    currentElement.style.webkitTransform = 'translate3d(0,0,0)'
    currentElement.children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'

    for(var i = 1 ; i < this.total ; i++){
      this.setX(this.$el.children[i],this.width,i)
    }
    this.setX(this.$el.children[this.total-1],-this.width,1)

    this.setXAndScale(this.$el.children[1].children[0],0,1)
    this.setXAndScale(this.$el.children[this.total-1].children[0],this.width * 0.9,0.9)
    if (this.total > 3) {
      this.setXAndScale(this.$el.children[this.total-2].children[0],this.width*0.9,0.9)
    }
  }

//动态设定translate3d参数方法
  PageSlide.prototype.setX = function(el,x,i){
    el && (el.style.webkitTransform = 'translate3d(' + x * i + 'px' + ',0,0)')
  }

//动态设定translate3d scale3d
  PageSlide.prototype.setXAndScale = function(el,x,d){
    el && (el.style.webkitTransform = 'translate3d(' + x + 'px' + ',0,0) scale3d(' + d + ',' + d + ',1)')
  }

//获取translate3d X值
  PageSlide.prototype.getX = function(el){
    X = parseInt(el.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2))
    return X
  }

//绑定事件
  PageSlide.prototype.bindEvents = function(){
    var self = this
    'touchstart touchmove touchend touchcancel'.split(' ').forEach(function(evn){
      // console.log(evn)
      self.$el.addEventListener(evn,self[evn].bind(self),false)
    })
    // this.$el.addEventListener('touchstart',this.touchstart.bind(this),false)
    // this.$el.addEventListener('touchmove',this.touchmove.bind(this),false)
    // this.$el.addEventListener('touchend',this.touchend.bind(this),false)
    // this.$el.addEventListener('touchcancel',this.touchcancel.bind(this),false)
  }

//获取当前触控页面对象
  PageSlide.prototype.getCurrent = function(){
    return this.$el.children[this.current]
  }

// //获取下一个子节点
//   PageSlide.prototype.getNextElement = function(node){
//     var NextElementNode = node.nextSibling;
//     while(NextElementNode.nodeValue != null){
//       NextElementNode = NextElementNode.nextSibling
//     }
//     return NextElementNode;
//   }

// //获取上一个字节点
//   PageSlide.prototype.getPrivousElement = function(node){
//     var PriviousElementNode = node.priviousSibling;
//     while(PriviousElementNode.nodeValue != null){
//       PriviousElementNode = PriviousElementNode.priviousSibling
//     }
//     return PriviousElementNode;
//   }

//四个滑动事件函数
  PageSlide.prototype.touchstart = function(e){
    clearInterval(this.timer)
    var touches = e.touches[0]

    //触控开始
    this.flag = null
    this.pageX = touches.pageX;
    //moving类名在样式中作滑动效果
    this.$el.classList.remove('moving')
    for(var i = 0;i < this.total; i++){
      this.$el.children[i].children[0].classList.remove('moving')
    }
  }

  PageSlide.prototype.touchmove = function(e){
    e.preventDefault()

    var touches = e.changedTouches[0]
    var displacement = touches.pageX - this.pageX //位移
    var total = this.total
    var index = this.current

    if (displacement < 0) this.flag = 'left'
    if (displacement > 0) this.flag = 'right'
  

    //计算当前索引值与执行动画索引值
      var currentIndex, //当前索引值
          counter //执行动画索引值

      //中间计算值
      var num = parseInt(-displacement/this.width) + index 
      var a = parseInt(num/total)
      
      if (num < 0 ) {
        currentIndex = (a + 1)*4 + num
        counter = (a + 1)*4 + num
      }else{
        currentIndex = num - (a * 4) 
        counter = num - (a * 4) 
      }
      if (Math.abs(displacement % this.width) > this.width/2 && displacement < 0) {
        currentIndex = currentIndex + 1 >= total ?0:currentIndex + 1
      }else{
        if (Math.abs(displacement % this.width) > this.width/2 && displacement > 0){ 
          currentIndex = currentIndex - 1 < 0 ?total-1:currentIndex - 1
        }
      }

    //动态添加class
      for(var i = 0;i < total; i++){
          this.$el.children[i].classList.remove('currentitem','nextitem','previousitem')
        }
      var current = this.$el.children[currentIndex]
      var next = (current.nextElementSibling)?current.nextElementSibling:this.$el.firstElementChild
      var prev = (current.previousElementSibling)?current.previousElementSibling:this.$el.lastElementChild
      
      current.classList.add('currentitem')
      next.classList.add('nextitem')
      prev.classList.add('previousitem')
      for( i = 0 ;i<this.tablist.childElementCount;i++){
        this.tablist.children[i].classList.remove('on')
      }
      this.tablist.children[currentIndex].classList.add('on')

    //根据当前索引值设置前后图片的参数
      var currentX
      for (var i = 0; i < total; i++) {
        if (this.$el.children[i].classList.contains("currentitem")) {
          current = this.$el.children[i]
          currentX = this.getX(current)
          
          var prevDiv = i - 1 < 0 ? total - 1 : i - 1
          this.$el.children[prevDiv].style.webkitTransform = 'translate3d(' + (currentX - this.width) + 'px' + ',0,0)'
          this.$el.children[prevDiv].children[0].style.webkitTransform = 'translate3d('+ this.width*0.9 + 'px' +',0,0) scale3d(0.9,0.9,1)'
          
          var nextDiv = i + 1 > total - 1 ? 0 : i + 1
          this.$el.children[nextDiv].style.webkitTransform = 'translate3d(' + (currentX + this.width) + 'px' + ',0,0)'
          this.$el.children[nextDiv].children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'

        }
      }

    //动态设置$el的translate3d
      this.displacement = displacement
      var disX = this.nowDistance + displacement
      this.setX(this.$el,disX,1)

    //计算动画参数
      var position = this.width * 0.9
      var moveCurrent = parseInt(displacement / this.width)

      var _enlarge = 0.9 + (0.1 * (displacement % this.width)) / this.width
      var _shrink = 1 + (0.1 * (displacement % this.width)) / this.width
      
      if (displacement > 0) {
        var moveDiv = counter - 1 < 0 ? total- 1 : counter - 1
        this.setXAndScale(this.$el.children[moveDiv].children[0],position - (displacement % this.width),_enlarge)
      }
      
      if (displacement < 0) {
        var moveDiv = counter
        this.setXAndScale(this.$el.children[moveDiv].children[0],(-displacement % this.width) * 0.9,_shrink)
      }
  }

  PageSlide.prototype.touchend = function(){
    var minRange = this.width / 2
    var move = this.displacement

    var n = parseInt(-move / this.width)
    var remainder = move % this.width

    var current = this.current
    if (Math.abs(remainder) >= minRange && move > 0) {
      current = current + n - 1 < 0 ? this.total + current + n - 1 : current + n - 1 
      return this.go(current,-n + 1,true)
    }
    if (Math.abs(remainder) < minRange && move > 0) {
      current = current + n < 0 ? this.total + current + n : current + n
      return this.go(current,-n,false)
    }
    if (Math.abs(remainder) >= minRange && move < 0) {
      current = current + n + 1 > this.total - 1 ? 0 : current + n + 1
      return this.go(current,-n-1,true)
    }
    if (Math.abs(remainder) < minRange && move < 0) {
      current = current + n > this.total - 1 ? current + n - this.total : current + n
      return this.go(current,-n,false)
    }
  }

PageSlide.prototype.touchcancel = function(e){

}
//去往索引值页面的go方法，接收三个参数:最终索引值，最终需要进行缩放的索引值，索引值是否改变
  PageSlide.prototype.go = function(i,n,boolean){
    var targetX = parseInt(this.nowDistance) + n * this.width
    this.nowDistance = targetX
    this.current = i
    var parent = this.$el

    // for(var b = 0 ;b<this.tablist.childElementCount;b++){
    //   this.tablist.children[b].children[0].children[0].style.webkitTransform = 'scaleX(0)'
    // }
    // this.tablist.children[this.current].children[0].children[0].style.webkitTransform = 'scaleX(1)'

    //结束动画
      if (boolean) {
        if (this.displacement < 0) {
          ii = i -1 < 0?this.total - 1:i -1
          var targetChild = this.$el.children[ii].children[0]
          
          targetChild.classList.add('moving')
          parent.classList.add('moving')
          parent.style.webkitTransform = 'translate3d('+ targetX + 'px' +',0,0)'
          targetChild.style.webkitTransform = 'translate3d(' + this.width * 0.9 + 'px' +',0,0) scale3d(0.9,0.9,1)'

        }
        if (this.displacement > 0) {
          var targetChild = this.$el.children[i].children[0]

          targetChild.classList.add('moving')
          parent.classList.add('moving')
          parent.style.webkitTransform = 'translate3d('+ targetX + 'px' +',0,0)'
          targetChild.style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'

        }
      }else{
        if (this.displacement < 0) {
          var targetChild = this.$el.children[i].children[0]
          
          targetChild.classList.add('moving')
          parent.classList.add('moving')
          targetChild.style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'
          parent.style.webkitTransform = 'translate3d('+ targetX + 'px' +',0,0)'

        }
        if (this.displacement > 0) {
          ii = i - 1 < 0? this.total - 1: i - 1
          var targetChild = this.$el.children[ii].children[0]

          targetChild.classList.add('moving')
          parent.classList.add('moving')
          targetChild.style.webkitTransform = 'translate3d('+ this.width * 0.9 + 'px' +',0,0) scale3d(0.9,0.9,1)'
          parent.style.webkitTransform = 'translate3d('+ targetX + 'px' +',0,0)'
        }
     }
  
    this.resize()
  }

//调整当前页面
  PageSlide.prototype.resize = function(){
    for(var i = 0;i < this.total; i++){
      this.$el.children[i].classList.remove('currentitem','nextitem','previousitem')
    }
    var current = this.getCurrent()
    var next = (current.nextElementSibling)?current.nextElementSibling:this.$el.firstElementChild
    var prev = (current.previousElementSibling)?current.previousElementSibling:this.$el.lastElementChild

    current.classList.add('currentitem')
    next.classList.add('nextitem')
    prev.classList.add('previousitem')

    var currentX = current.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2)
    this.setX(next,parseInt(currentX)+this.width,1)
    this.setX(prev,parseInt(currentX)-this.width,1)

    current.children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'
    next.children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'
    this.setXAndScale(prev.children[0],this.width * 0.9,0.9)
  }

PageSlide.prototype.carousel = function(){
  var self = this
  // tablist.children[0].children[0].children[0].style.webkitTransform = 'scaleX(0)'

  // for( i = 0 ;i<tablist.childElementCount;i++){
  //   this.tablist.children[i].children[0].children[0].style.webkitTransform = 'scaleX(0)'
  // }

  this.timer = setInterval(nextImg,3000)

  function nextImg(){
    self.animate(1)
  }

  function play(){
    // this.tablist.children[0].children[0].children[0].style.webkitTransform = 'scaleX(1)'
    self.timer
  }

  for(var i = 0;i < this.tablist.childElementCount;i++){
    this.tablist.children[i].onclick = function(){
      if (this.className == 'on') {
        return
      }
      var myIndex = parseInt(this.getAttribute('index'));
      var index = self.current
      var offset = myIndex - index
      if (Math.abs(offset) > (self.total / 2) && offset < 0) {
        offset = self.total + offset
      }else{
        if (Math.abs(offset) > (self.total / 2) && offset > 0) {
          offset = offset - self.total
        }
      }
      self.animate(offset)
    }
  }
  play()
}

PageSlide.prototype.animate = function(offset){
  var index = this.current

  this.current = this.current + offset
  if (this.current > this.total - 1) {
    this.current = this.current - this.total
  }
  if (this.current < 0) {
    this.current = this.total + this.current
  }
  // console.log(this.current)

  for( i = 0 ;i<this.tablist.childElementCount;i++){
    this.tablist.children[i].classList.remove('on')
  }
  var currentX = this.getX(this.$el)
  var newCurrentX = currentX + (-offset) * this.width
  this.nowDistance = newCurrentX
  this.setX(this.$el,newCurrentX,1)

  getIndexX = this.getX(this.$el.children[index])
  newIndexX = getIndexX + offset * this.width
  this.setX(this.$el.children[this.current],newIndexX,1)
  // newIndexX = currentX + offset * this.width
  // this.setX(this.$el.children[this.current],newIndexX,1)
  // console.log(this.$el.children[this.current])
  this.tablist.children[this.current].classList.add('on')

  //动态添加class
    for(var i = 0;i < this.total; i++){
        this.$el.children[i].classList.remove('currentitem','nextitem','previousitem')
      }
    var current = this.$el.children[this.current]
    var next = (current.nextElementSibling)?current.nextElementSibling:this.$el.firstElementChild
    var prev = (current.previousElementSibling)?current.previousElementSibling:this.$el.lastElementChild
    
    current.classList.add('currentitem')
    next.classList.add('nextitem')
    prev.classList.add('previousitem')

  //根据当前索引值设置前后图片的参数
    this.$el.classList.add('moving')
    for (var i = 0; i < this.total; i++) {
      this.$el.children[i].children[0].classList.remove('moving')
    }

    var currentX
    current = this.$el.children[this.current]
    currentX = this.getX(current)

    this.$el.children[this.current].children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'

    var prevDiv = this.current - 1 < 0 ? this.total - 1 : this.current - 1

    if (offset < 0) {
      this.$el.children[this.current].children[0].classList.add('moving')
    }else{
      this.$el.children[prevDiv].children[0].classList.add('moving')
    }
    this.$el.children[prevDiv].style.webkitTransform = 'translate3d(' + (currentX - this.width) + 'px' + ',0,0)'
    this.$el.children[prevDiv].children[0].style.webkitTransform = 'translate3d('+ this.width*0.9 + 'px' +',0,0) scale3d(0.9,0.9,1)'
    
    var nextDiv = this.current + 1 > this.total - 1 ? 0 : this.current + 1
    this.$el.children[nextDiv].style.webkitTransform = 'translate3d(' + (currentX + this.width) + 'px' + ',0,0)'
    this.$el.children[nextDiv].children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'

}

window.PageSlide = PageSlide;