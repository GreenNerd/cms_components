function myCarousel(elems,opts){   
  //初始化
    var defaultOptions = {
      autoTime:3000,
      paganation:true,
      arrow:true
    };
    var options = defaultOptions;

    if (opts) {
      for(key in opts){
        options[key] = opts[key];
      }
    }

    var showPaganation = options.paganation;
    var showArrow = options.arrow;

    var carousel = document.getElementById(elems.parentDivId);
    carousel.className += ' carousel-container';

  //插入图片
    var carouselList = document.createElement('div');

    carouselList.className += ' list';
    carouselList.id = 'list';
    carouselList.style.left = '-100%';

    var images = elems.images;

    carouselList.style.width = (images.length + 2) * 100 + '%' ;

    var firstImg = document.createElement('img');
    firstImg.src = images[images.length-1];
    carouselList.appendChild(firstImg);

    for(var i = 0;i <= images.length - 1; i++){
      var img = new Image();
      img.src = images[i];
      carouselList.appendChild(img);
    }

    var lastImg = document.createElement('img');
    lastImg.src = images[0];
    carouselList.appendChild(lastImg);

    carousel.appendChild(carouselList);

    for(var i = 0;i < carouselList.children.length;i++){
      carouselList.children[i].style.width = 100 / carouselList.children.length + '%' ;
    };

  //插入序列号
    
    if (showPaganation) {

      var slidePaganation = document.createElement('div');
      slidePaganation.className += ' slide';
      slidePaganation.id = 'slide';

      var slidePaganationButtons = document.createElement('div');
      slidePaganationButtons.className += ' slide-buttons';
      slidePaganationButtons.id = 'slide-buttons';

      for(var i = 1;i <= images.length; i++){
        var span = document.createElement('span');
        span.setAttribute('index',i);
        slidePaganationButtons.appendChild(span);
      }

      slidePaganationButtons.childNodes[0].className = 'on';

      slidePaganation.appendChild(slidePaganationButtons);
      carousel.appendChild(slidePaganation);

      var slide = document.getElementById('slide');
      var buttons = document.getElementById('slide-buttons').getElementsByTagName('span');

    }

  //插入箭头
    if (showArrow) {

      var arrowPrev = document.createElement('a');
      var arrowNext = document.createElement('a');
      arrowPrev.href = "javascript:;";
      arrowPrev.className += ' arrow';
      arrowPrev.id = 'prev';
      arrowPrev.innerHTML = '&lt;';
      arrowNext.href = "javascript:;";
      arrowNext.className += ' arrow';
      arrowNext.id = 'next';
      arrowNext.innerHTML = '&gt;';
      carousel.appendChild(arrowPrev);
      carousel.appendChild(arrowNext);

      var prev = document.getElementById('prev');
      var next = document.getElementById('next');
    }

  //轮播
    var container = document.getElementById('carousel-container');
    var list = document.getElementById('list');
    var animated = false;
    var autoTime = options.autoTime;
    var timer = setInterval(nextImg,autoTime);

    function nextImg(){
        if (!animated) {
          animate(-100);
        }
        if (showPaganation) {
          showButtonNext();
        }
    }

    function prevImg(){
        if (!animated) {
          animate(100);
        }
        if (showPaganation) {
          showButtonPrev();
        }
    }

    function animate(offset){
      animated = true;
      var newLeft = parseInt(list.style.left) + offset;
      var time = 300;
      var interval = 10;
      var speed = offset/(time/interval);

      function go(){
        if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
          list.style.left = parseInt(list.style.left) + speed + '%';
          setTimeout(go,interval);
        }
        else{
          animated = false;
          list.style.left = newLeft + '%';
          if (newLeft > -100) {
            list.style.left = '-' + images.length + '00' + '%';
          }
          if (newLeft < '-' + images.length + '00') {
            list.style.left = -100 + '%';
          }
        }

      }
      go();

    }

    function play(){
      timer;
    }

    function stop(){
      clearInterval(timer);
    }

    if (showArrow) {
      next.onclick = function(){
        if (!animated) {
          animate(-100);      
        }
        if (showPaganation) {
          showButtonNext();
        }
      }

      prev.onclick = function(){
        if (!animated) {
          animate(100);
        }
        if (showPaganation) {
          showButtonPrev();
        }
      }
    }


    if (showPaganation) {
      for(var i = 0;i < buttons.length; i++){
        buttons[i].onclick = function(){
          if (this.className == 'on') {
            return;
          }
          var myIndex = parseInt(this.getAttribute('index'));
          index = parseInt(list.style.left)/-100;
          var num = myIndex;
          var offset = -100 * (myIndex - index);
          if (!animated) {
            animate(offset);
          }
          showButtonNext(num);
        }
      }

      function showButtonNext(num){
        indexOn = parseInt((parseInt(list.style.left)-100)/-100);
        if (num) {
          indexOn = num;
        }
        if (indexOn > images.length) {
          indexOn = 1;
        }
        if (indexOn == 0) {
          indexOn = images.length
        }
        for(var i =0;i < buttons.length; i++){
          if (buttons[i].className == 'on') {
            buttons[i].className = '';
            break;
          }
        }
        buttons[indexOn-1].className = 'on';
      }

      function showButtonPrev(){
        indexOn = parseInt(parseInt(list.style.left)/-100);
        if (indexOn == 0) {
          indexOn = images.length
        }
        for(var i =0;i < buttons.length; i++){
          if (buttons[i].className == 'on') {
            buttons[i].className = '';
            break;
          }
        }
        buttons[indexOn-1].className = 'on';
      }
    }

    var swipe = false;
    container.onmouseover = function(){
      stop();
    };
    container.onmouseout = function(){
      timer = setInterval(nextImg,autoTime);
      play();
    };

  //触摸滑动
    function GetSlideAngle(dx,dy){
      return Math.atan2(dy,dx)*180/Math.PI;
    }

    function GetSlideDirection(startX,startY,endX,endY){
      var dy = startY-endY;
      var dx = endX - startX;
      var result = 0;


      if (Math.abs(dx) < 2 && Math.abs(dy) < 2 ) {
        return result;
      }

      var angle = GetSlideAngle(dx,dy);

      if (angle >= -45 && angle < 45) {
        result = 4;
      }else if(angle >= 45 && angle < 135){
        result = 1;
      }else if(angle >= -135 && angle < -45){
        result = 2;
      }else if((angle >= 135 && angle <= 180)||(angle >= -180 && angle < -135)){
        result = 3;
      }

      return result;
    }

      var startX ,startY;

      list.addEventListener('touchstart',function(ev){
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;

      },false);

      list.addEventListener('touchend',function(ev){
        var endX,endY;
        endX = ev.changedTouches[0].pageX;
        endY = ev.changedTouches[0].pageY;

        var direction = GetSlideDirection(startX,startY,endX,endY);

        switch(direction){
          case 0:
            break;
          case 1:
            break;
          case 2:
            break;
          case 3:
            nextImg();
            break;
          case 4:
            prevImg();
            break;
          default:
        };

      },false);

      list.addEventListener('touchmove',function(ev){
          ev.preventDefault();
      },false);

  play();

};

window.myCarousel = myCarousel;