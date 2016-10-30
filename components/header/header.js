function Header(className){
	this._className = String(className)
	this.container
	this.icon
	this.init()
}
Header.prototype.init = function(){
	const instance = this;
	this.container = document.getElementsByClassName(this._className)[0];
	this.icon = this.container.getElementsByClassName("header-main-right")[0];
	
	const button = this.container.getElementsByClassName("header-main-right");
	if (window.addEventListener) {
		button[0].addEventListener("click",function(){
			instance.toggleDisPlay();
		},false)
	}else{
		button[0].onclick = function(){
			instance.toggleDisPlay();
		}
	}
}

Header.prototype.toggleDisPlay = function(){
	const group = this.container.getElementsByClassName("header-cell-group");
	var handler = function(event){
		event.preventDefault();
	}
	if (group[0].classList.contains("in")) {
		group[0].style.height = "0px";
		group[0].classList.remove("in");
		this.icon.children[0].classList.remove("fa-close");
		this.icon.children[0].classList.add("fa-reorder");
		// document.body.style.overflow = "";
		// document.body.removeEventListener('touchmove',handler,false);
	}else{
		group[0].classList.add("in")
		group[0].style.height = group[0].scrollHeight + "px";
		this.icon.children[0].classList.remove("fa-reorder");
		this.icon.children[0].classList.add("fa-close");
		// document.body.style.overflow = "hidden";
		// document.body.onmousewheel = function (){return false;}
		// document.body.addEventListener('touchmove',handler,false);
	}
}

window.Header = Header;