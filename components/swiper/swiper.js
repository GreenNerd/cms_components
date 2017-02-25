(function(){


  function Swiper() {
    const allSwiper = document.querySelectorAll("[data-comp='Swiper']");
    for (var i = allSwiper.length - 1; i >= 0; i--) {
      new SwiperItem(allSwiper[i]);
    }
  }
  function SwiperItem(element){
    this.swiper = element;
    this._autoTime = parseInt(element.getAttribute('data-autoTime'));
    this._widget = element.getAttribute('data-widget');
    this.current = 0; //当前页面索引

    this.counter = 0;
    this.pageX;

    this.width; //设备宽度

    this.total; //图片总数
    this.nowDistance = 0; //起始$el的x值

    this.currentIndex;

    this.$el = this.swiper.querySelector('.pages');
    this.timer;
    this.tablist;
    this.init();
  }
//初始化
  SwiperItem.prototype.init = function(){
    const pages = this.$el;
    this.width = this.$el.clientWidth;

    //根据图片大小修改pages大小
    var img = pages.querySelector('.item-content');
    var style = img.currentStyle || window.getComputedStyle(img,false);
    var bi = style.backgroundImage.slice(4,-1).replace(/"/g,"");
    var newImg = new Image;
    newImg.src = bi;
    var webwidth = this.width;
    newImg.onload = function(){
      var pad = newImg.height/newImg.width;
      var height = webwidth*pad;
      pages.style.height = height + "px";
    }

    this.$el.style.webkitTransform = 'translate3d(0,0,0)';
    this.total = this.$el.childElementCount;

    var currentElement = this.$el.firstElementChild;
    currentElement.style.webkitTransform = 'translate3d(0,0,0)';
    currentElement.querySelector('.item-content').style.webkitTransform = 'translate3d(0,0,0) scale3d(1,1,1)';

    for(var i = 1 ; i < this.total ; i++){
      this.setX(this.$el.children[i],this.width,i);
    }
    this.setX(this.$el.children[this.total-1],-this.width,1)

    this.setXAndScale(this.$el.children[1].querySelector('.item-content'),0,1)
    this.setXAndScale(this.$el.children[this.total-1].querySelector('.item-content'),this.width * 0.9,0.9)
    if (this.total > 3) {
      this.setXAndScale(this.$el.children[this.total-2].querySelector('.item-content'),this.width*0.9,0.9)
    }

    this.addWidget();
    this.bindEvents();
    this.carousel();
  }
  SwiperItem.prototype.addWidget = function(){
    var promo_nav = document.createElement('nav');
    promo_nav.className = 'dot-nav-widget';
    var ul = document.createElement('ul');
    ul.className = 'tablist';

    for(i = 0 ; i < this.total ; i++ ){
      var li = document.createElement('li');
      li.setAttribute('index',i);
      ul.appendChild(li);
    }
    ul.firstChild.className = 'on';
    promo_nav.appendChild(ul);

    switch (this._widget) {
      case 'right' :
        this.swiper.appendChild(promo_nav);
        promo_nav.classList.add('right');
        this.tablist = this.swiper.querySelector('.tablist');
        break;
      case 'mid' :
        this.swiper.appendChild(promo_nav);
        promo_nav.classList.add('middle');
        this.tablist = this.swiper.querySelector('.tablist');
        break;
      default :
        this.tablist = null;
        break;
    }
  }

//动态设定translate3d参数方法
  SwiperItem.prototype.setX = function(el,x,i){
    el && (el.style.webkitTransform = 'translate3d(' + x * i + 'px' + ',0,0)')
  }

//动态设定translate3d scale3d
  SwiperItem.prototype.setXAndScale = function(el,x,d){
    el && (el.style.webkitTransform = 'translate3d(' + x + 'px' + ',0,0) scale3d(' + d + ',' + d + ',1)')
  }

//获取translate3d X值
  SwiperItem.prototype.getX = function(el){
    X = parseInt(el.style.webkitTransform.slice(12,-1).split(",")[0].slice(0,-2))
    return X
  }

//绑定事件
  SwiperItem.prototype.bindEvents = function(){
    var self = this
    'touchstart touchmove touchend touchcancel'.split(' ').forEach(function(evn){
      self.$el.addEventListener(evn,self[evn].bind(self),false)
    })
    addEventListener('orientationchange',function(){
      self.orientationChange();
    },false)
  }
  SwiperItem.prototype.orientationChange = function(){
      switch(window.orientation) {
      　　case -90:
        case 90:
          this.resize();
          break;
      }
  }

//获取当前触控页面对象
  SwiperItem.prototype.getCurrent = function(){
    return this.$el.children[this.current]
  }

//四个滑动事件函数
  SwiperItem.prototype.touchstart = function(e){
    clearInterval(this.timer)
    var touches = e.touches[0]

    //触控开始
    this.pageX = touches.pageX;

    //moving类名在样式中作滑动效果
    this.$el.classList.remove('moving')
    for(var i = 0;i < this.total; i++){
      this.$el.children[i].children[0].classList.remove('moving')
    }
  }

  SwiperItem.prototype.touchmove = function(e){
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

      if(this.tablist) {
        for( i = 0 ;i<this.tablist.childElementCount;i++){
          this.tablist.children[i].classList.remove('on')
        }
        this.tablist.children[currentIndex].classList.add('on')
      }

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

  SwiperItem.prototype.touchend = function(e){
    var minRange = this.width / 2;
    var move = e.changedTouches[0].pageX - this.pageX;

    var n = parseInt(-move / this.width);
    var remainder = move % this.width;

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

  SwiperItem.prototype.touchcancel = function(e){
  }
//去往索引值页面的go方法，接收三个参数:最终索引值，最终需要进行缩放的索引值，索引值是否改变
  SwiperItem.prototype.go = function(i,n,boolean){
    var targetX = parseInt(this.nowDistance) + n * this.width
    this.nowDistance = targetX
    this.current = i
    var parent = this.$el

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
  SwiperItem.prototype.resize = function(){
    this.width = this.$el.clientWidth;
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
    this.setXAndScale(prev.children[0],this.width * 0.9,0.9);
  }

  SwiperItem.prototype.carousel = function(){
    var self = this
    this.timer = setInterval(nextImg,this._autoTime)

    function nextImg(){
      self.animate(1)
    }

    function play(){
      self.timer
    }

    if (this.tablist) {
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
    }
    play()
  }

  SwiperItem.prototype.animate = function(offset){
    var index = this.current

    this.current = this.current + offset
    if (this.current > this.total - 1) {
      this.current = this.current - this.total
    }
    if (this.current < 0) {
      this.current = this.total + this.current
    }

    if (this.tablist) {
      for( i = 0 ;i<this.tablist.childElementCount;i++){
        this.tablist.children[i].classList.remove('on')
      }
    }

    var currentX = this.getX(this.$el)
    var newCurrentX = currentX + (-offset) * this.width
    this.nowDistance = newCurrentX
    this.setX(this.$el,newCurrentX,1)

    getIndexX = this.getX(this.$el.children[index])
    newIndexX = getIndexX + offset * this.width
    this.setX(this.$el.children[this.current],newIndexX,1)

    if (this.tablist) {
      this.tablist.children[this.current].classList.add('on')
    }

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

  window.slpComp.Swiper = Swiper;
}());
