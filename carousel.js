window.onload = function(){

	var container = document.getElementById('carousel-container');
	var list = document.getElementById('list');
	var buttons = document.getElementById('buttons').getElementsByTagName('span');
	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var index = 1;
	var animated = false;
	var timer;


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

	function play(){
		timer = setInterval(function(){
			next.onclick();
		},3000);
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
	container.onmouseout = play;


	play();
}

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

document.addEventListener('touchstart',function(ev){
	startX = ev.touches[0].pageX;
	startY = ev.touches[0].pageY;

},false);

document.addEventListener('touchend',function(ev){
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