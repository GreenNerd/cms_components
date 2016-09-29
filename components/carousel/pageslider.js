var PageSlide = function(el){
	this.current = 0 //当前页面索引
	
  this.counter = 0
	this.pageX 

	this.width //设备宽度
	this.displacement //滑动的距离

	this.total //图片总数
	this.nowDistance = 0 //起始$el的x值

	this.currentIndex

	this.$el = el
	this.init()
	this.bindEvents()
}
//初始化
  PageSlide.prototype.init = function(){
    this.width = this.$el.clientWidth
  	this.$el.style.webkitTransform = 'translate3d(0,0,0)'
  	this.total = this.$el.childElementCount

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

//四个滑动事件函数
  PageSlide.prototype.touchstart = function(e){
  	var touches = e.touches[0]

    //触控开始
  	this.displacement = 0;
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

    //根据当前索引值设置前后图片的参数
    	var currentX
    	for (var i = 0; i < this.total; i++) {
    		if (this.$el.children[i].classList.contains("currentitem")) {
    			current = this.$el.children[i]
    			currentX = this.getX(current)
    			
    			var prevDiv = i - 1 < 0 ? this.total - 1 : i - 1
    			this.$el.children[prevDiv].style.webkitTransform = 'translate3d(' + (currentX - this.width) + 'px' + ',0,0)'
    			this.$el.children[prevDiv].children[0].style.webkitTransform = 'translate3d('+ this.width*0.9 +',0,0) scale3d(0.9,0.9,1)'
    			
    			var nextDiv = i + 1 > this.total - 1 ? 0 : i + 1
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

  PageSlide.prototype.touchend = function(e){
  	var minRange = this.width/2
  	var move = this.displacement

  	var n = parseInt(-move/this.width)
  	var remainder = move % this.width



  	var current = this.current
  	if (Math.abs(remainder) >= minRange && move > 0) {
  		current = current + n - 1 < 0 ?this.total + current +n-1:current+n-1 
  		return this.go(current,-n + 1,true)
  	}
  	if (Math.abs(remainder) < minRange && move > 0) {
      current = current + n < 0 ? this.total + current + n : current + n
  		return this.go(current,-n,false)
  	}
  	if (Math.abs(remainder) >= minRange && move < 0) {
  		current = current + n + 1 > this.total - 1 ? 0 : current+n+1
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

  	var nowTransX = parseInt(this.nowDistance) + n * this.width
  	// this.targetX = nowTransX

    this.nowDistance = nowTransX

  	this.current = i

  	// var nowX = parseInt(this.$el.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2))
  	
    // this.moveX = nowX
  	var parent = this.$el

  	if (boolean) {
  		// var speed = (this.targetX - this.moveX)/10
  		// // console.log(speed)
  		// var target = this.targetX
  		if (this.displacement < 0) {
  			ii = i -1 < 0?this.total - 1:i -1
  			var targetChild = this.$el.children[ii].children[0]
  			// var style = targetChild.style.webkitTransform


  			// var childSpeed1 = (this.width*0.9 - parseInt(style.slice(12,-4).split(",")[0].slice(0,-2)))/10
  			// var childSpeed2 = (parseFloat(style.slice(12,-4).split(",")[3]) - 0.9)/10
  			// function s_toIndex(){
  			// 	if (parseInt(parent.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2)) > target) {
  			// 		var nowX = parseInt(parent.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2)) + speed
  			// 		var nowChildX = parseInt(targetChild.style.webkitTransform.slice(12,-4).split(",")[0].slice(0,-2)) + childSpeed1
  			// 		var nowChildS = parseFloat(targetChild.style.webkitTransform.slice(12,-4).split(",")[3]) - childSpeed2
  					
  			// 		parent.style.webkitTransform = 'translate3d('+ nowX + 'px' +',0,0)'
  			// 		targetChild.style.webkitTransform = 'translate3d('+ nowChildX + 'px'+',0,0) scale3d('+ nowChildS +','+ nowChildS +',1)'



  			// 		setTimeout(s_toIndex,20)
  			// 	}else{
  					// parent.style.webkitTransform = 'translate3d('+ nowTransX + 'px' +',0,0)'
  					// targetChild.style.webkitTransform = 'translate3d(288px,0,0) scale3d(0.9,0.9,1)'
  			// 		parent.children[i].children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'
  			// 	}
  			// }
  			// s_toIndex()
        targetChild.classList.add('moving')
        parent.classList.add('moving')
        parent.style.webkitTransform = 'translate3d('+ nowTransX + 'px' +',0,0)'
        targetChild.style.webkitTransform = 'translate3d(288px,0,0) scale3d(0.9,0.9,1)'

  		}
  		if (this.displacement > 0) {
        var targetChild = this.$el.children[i].children[0]
        // var style = targetChild.style.webkitTransform


  			// var childSpeed1 = (parseInt(style.slice(12,-4).split(",")[0].slice(0,-2)))/10
  			// var childSpeed2 = (1 - parseFloat(style.slice(12,-4).split(",")[3]))/10
  			// function l_toIndex(){
  			// 	if (parseInt(parent.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2)) < target) {
  			// 		var nowX = parseInt(parent.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2)) + speed
  			// 		var nowChildX = parseInt(targetChild.style.webkitTransform.slice(12,-4).split(",")[0].slice(0,-2)) - childSpeed1
  			// 		var nowChildS = parseFloat(targetChild.style.webkitTransform.slice(12,-4).split(",")[3]) + childSpeed2
  				
  			// 		parent.style.webkitTransform = 'translate3d('+ nowX + 'px' +',0,0)'
  			// 		targetChild.style.webkitTransform = 'translate3d('+ nowChildX + 'px'+',0,0) scale3d('+ nowChildS +','+ nowChildS +',1)'

  			// 		setTimeout(l_toIndex,20)
  			// 	}else{
  			// 		parent.style.webkitTransform = 'translate3d('+ nowTransX + 'px' +',0,0)'
  			// 		targetChild.style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'
  			// 		// parent.children[i].children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'
  			// 	}
  			// }
  			// l_toIndex()

        targetChild.classList.add('moving')
        parent.classList.add('moving')
        parent.style.webkitTransform = 'translate3d('+ nowTransX + 'px' +',0,0)'
        targetChild.style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'

  		}

  	}else{
  		// var speed = (this.targetX - this.displacementX)/10
  		// var target = this.targetX

      // var lastlog
      // console.oldlog = console.log
      // console.log = function(str){
      //   console.oldlog(str)
      //   lastlog = str
      // }

  	  if (this.displacement < 0) {
        var targetChild = this.$el.children[i].children[0]
        // var style = targetChild.style.webkitTransform

  			// var childSpeed1 = (0 - parseInt(style.slice(12,-4).split(",")[0].slice(0,-2)))/10
  			// var childSpeed2 = (1 - parseFloat(style.slice(12,-4).split(",")[3]))/10
  			// // console.log(targetChild.style.webkitTransform.slice(12).split(","))
     //    // var a = parseInt(parent.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2)) < target
     //    // document.write(a)


     //    function _toIndex(){
  			// 	if (parseInt(parent.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2)) < target) {
     //        var nowX = parseInt(parent.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2)) + speed
  			// 		var nowChildX = parseInt(targetChild.style.webkitTransform.slice(12,-4).split(",")[0].slice(0,-2)) + childSpeed1
  			// 		var nowChildS = parseFloat(targetChild.style.webkitTransform.slice(12,-4).split(",")[3]) + childSpeed2
  			// 		// console.log(targetChild.style.webkitTransform)
  			// 		parent.style.webkitTransform = 'translate3d('+ nowX + 'px' +',0,0)'
  			// 		targetChild.style.webkitTransform = 'translate3d('+ nowChildX + 'px'+',0,0) scale3d('+ nowChildS +','+ nowChildS +',1)'
  			// 		// document.getElementById('write').write(targetChild.style.webkitTransform)
     //        setTimeout(_toIndex,20)
  			// 	}else{
  			// 		parent.style.webkitTransform = 'translate3d('+ nowTransX + 'px' +',0,0)'
  			// 		targetChild.style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'
  			// 	}
  			// }
  			// _toIndex();

        targetChild.classList.add('moving')
        parent.classList.add('moving')
        targetChild.style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'
        parent.style.webkitTransform = 'translate3d('+ nowTransX + 'px' +',0,0)'
        // console.log(parent.style.webkitTransform)



  		}
  	  if (this.displacement > 0) {
  			ii = i - 1 < 0? this.total - 1: i - 1
  			var targetChild = this.$el.children[ii].children[0]

  			// var style = targetChild.style.webkitTransform

  			// var childSpeed1 = (parseInt(style.slice(12,-4).split(",")[0].slice(0,-2)) - this.width*0.9)/10
  			// var childSpeed2 = (parseFloat(style.slice(12,-4).split(",")[3])-0.9)/10
  			// // console.log(style)
     //    function toIndex(){
  			// 	if (parseInt(parent.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2)) > target) {
  			// 		var nowX = parseInt(parent.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2)) + speed
  			// 		var nowChildX = parseInt(targetChild.style.webkitTransform.slice(12,-4).split(",")[0].slice(0,-2)) - childSpeed1
  			// 		var nowChildS = parseFloat(targetChild.style.webkitTransform.slice(12,-4).split(",")[3]) - childSpeed2


  			// 		parent.style.webkitTransform = 'translate3d('+ nowX + 'px' +',0,0)'
  			// 		targetChild.style.webkitTransform = 'translate3d('+ nowChildX + 'px'+',0,0) scale3d('+ nowChildS +','+ nowChildS +',1)'
  					
     //        // console.log(targetChild.style.webkitTransform)
     //        // var a  = document.getElementById('write')
     //        // var dom = document.createElement('div')
     //        // console.log(targetChild.style.webkitTransform)

     //        // dom.innerHTML = lastlog
     //        // a.appendChild(dom)

  			// 		setTimeout(toIndex,20)
  			// 	}else{
  					// parent.style.webkitTransform = 'translate3d('+ nowTransX + 'px' +',0,0)'
  					// targetChild.style.webkitTransform = 'translate3d(288px,0,0) scale3d(0.9,0.9,1)'
  			// 		parent.children[i].children[0].style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)'
  			// 	}
  			// }
  			// toIndex()
        targetChild.classList.add('moving')
        parent.classList.add('moving')
        targetChild.style.webkitTransform = 'translate3d(288px,0,0) scale3d(0.9,0.9,1)'
        parent.style.webkitTransform = 'translate3d('+ nowTransX + 'px' +',0,0)'

  		}
  	}
	
  	this.addClass()

  }

PageSlide.prototype.addClass = function(){
	var total = this.$el.childElementCount

  // this.$el.classList.remove('moving')

	for(var i = 0;i < total; i++){
		this.$el.children[i].classList.remove('currentitem','nextitem','previousitem')
    // this.$el.children[i].children[0].classList.remove('moving')
	}

	var current = this.getCurrent()

  // console.log(current)

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

window.PageSlide = PageSlide;