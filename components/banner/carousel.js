function carousel(opts){
  var options = {
    autoTime:3000,
    paganation:true,
    arrow:true,
    parentDivId:'carousel-container',
    images:''
  }


  if (opts) {
    for (var key in opts){
      options[key] = opts[key];
    }
  }

  var carousel = document.getElementById(options.parentDivId);
  carousel.className = 'carousel-container';

//插入图片
  var carouselList = document.createElement('div');

  carouselList.className = 'list';
  carouselList.id = 'list';
  carouselList.style.left = '-100%';

  var images = options.images;

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

  var slidePaganation = document.createElement('div');
  slidePaganation.className = 'slide';
  slidePaganation.id = 'slide';

  var slidePaganationButtons = document.createElement('div');
  slidePaganationButtons.className = 'slide-buttons';
  slidePaganationButtons.id = 'slide-buttons';

  for(var i = 1;i <= images.length; i++){
    var span = document.createElement('span');
    span.setAttribute('index',i);
    slidePaganationButtons.appendChild(span);
  }

  slidePaganationButtons.childNodes[0].className = 'on';

  slidePaganation.appendChild(slidePaganationButtons);
  carousel.appendChild(slidePaganation);

//插入箭头

  var arrowPrev = document.createElement('a');
  var arrowNext = document.createElement('a');
  arrowPrev.href = "javascript:;";
  arrowPrev.className = 'arrow';
  arrowPrev.id = 'prev';
  arrowPrev.innerHTML = '&lt;';
  arrowNext.href = "javascript:;";
  arrowNext.className = 'arrow';
  arrowNext.id = 'next';
  arrowNext.innerHTML = '&gt;';
  carousel.appendChild(arrowPrev);
  carousel.appendChild(arrowNext);

//轮播
  var container = document.getElementById('carousel-container');
  var list = document.getElementById('list');
  var slide = document.getElementById('slide');
  var buttons = document.getElementById('slide-buttons').getElementsByTagName('span');
  var prev = document.getElementById('prev');
  var next = document.getElementById('next');
  var index = 1;
  var animated = false;
  var autoTime = options.autoTime;

  var timer = setInterval(
    function(){
      next.onclick();
    },autoTime);

  if (!options.paganation) {
     slide.style.display = 'none';
  }
  if (!options.arrow) {
    prev.style.display = 'none';
    next.style.display = 'none';
  }

  function showButton(){
    for(var i =0;i < buttons.length; i++){
      if (buttons[i].className == 'on') {
        buttons[i].className = '';
        break;
      }
    }
    buttons[index - 1].className = 'on';
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
          list.style.left = -400 + '%';
        }
        if (newLeft < -400) {
          list.style.left = -100 + '%';
        }
      }
    }
    go();

  }

  function play(autoTime){
    timer;
  }

  function stop(){
    clearInterval(timer);
  }

  next.onclick = function(){
    if (index == 4) {
      index = 1;
    }
    else{
      index += 1;
    }
    showButton();
    if (!animated) {
      animate(-100);      
    }
  }
  prev.onclick = function(){
    if (index == 1) {
      index = 4;
    }
    else{
      index -= 1;
    }
    showButton();
    if (!animated) {
      animate(100);
    }
  }

  for(var i = 0;i < buttons.length; i++){
    buttons[i].onclick = function(){
      if (this.className == 'on') {
        return;
      }
      var myIndex = parseInt(this.getAttribute('index'));
      var offset = -100 * (myIndex - index);
      if (!animated) {
        animate(offset);
      }
      index = myIndex;
      showButton();
    }
  }

  container.onmouseover = stop;
  container.onmouseout = function(){
    timer = setInterval(
      function(){
        next.onclick();
    },autoTime);
    play();
  };


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
        next.onclick();
        break;
      case 4:
        prev.onclick();
        break;
      default:
    }
  },false);

  play();

}



window.onload = function(){
    carousel({
      autoTime:3000, //轮播间隔时间
      paganation:true, //下方序列
      arrow:true, //两侧箭头
      parentDivId:'carousel-container',
      images:[
        "assets/banner/default.png",
        "assets/banner/bg_1.jpg",
        "assets/banner/bg_2.jpg",
        "assets/banner/bg_3.jpg"
      ]
  });
}