function Header(className){
	this._className = String(className)
	this.js
	this.container
	this.nav
	this.icon
	this.init()
}
Header.prototype.init = function(){
	const instance = this;
	this.container = document.getElementsByClassName(this._className)[0];
	this.icon = this.container.getElementsByClassName("header-main-right")[0];
	this.js = document.getElementsByClassName('js')[0];
	this.nav = document.getElementById('globalnav');
	
	const button = this.container.getElementsByClassName("header-main-right");
	if (window.addEventListener) {
		button[0].addEventListener("click",function(){
			instance.toggleDisPlay();
		},false)

		this.nav.addEventListener("click",function(){
			instance.toggleMask();
		},false)
	}else{
		button[0].onclick = function(){
			instance.toggleDisPlay();
		}
		this.nav.onclick = function(){
			instance.toggleMask();
		}
	}
}

Header.prototype.toggleDisPlay = function(){
	const group = this.container.getElementsByClassName("header-cell-group");
	var handler = function(event){
		event.preventDefault();
	}
	if (group[0].classList.contains("in")) {
		this.js.classList.remove('noscroll');

		group[0].style.height = "0px";
		group[0].classList.remove("in");
		this.icon.children[0].classList.remove("fa-close");
		this.icon.children[0].classList.add("fa-navicon");
	}else{
		this.js.classList.add('noscroll');
		group[0].classList.add("in");
		group[0].style.height = window.screen.height + "px";
		this.icon.children[0].classList.remove("fa-navicon");
		this.icon.children[0].classList.add("fa-close");
	}
}

Header.prototype.toggleMask = function(){
	const group = this.container.getElementsByClassName("header-cell-group");
	this.js.classList.remove('noscroll');

	group[0].style.height = "0px";
	group[0].classList.remove("in");
	this.icon.children[0].classList.remove("fa-close");
	this.icon.children[0].classList.add("fa-navicon");
}

window.Header = Header;