_addEventListener = function (el, eventName, cb, useCapture) {
	if (window.addEventListener) {
		el.addEventListener(eventName, cb, Boolean(useCapture));
	} else {
		el["on"+ eventName] = cb;
	}
}
function Header(selector){
	this._selector = String(selector)
	this.container = document.querySelector(this._selector);
	this.toggler = this.container.querySelector(".toggler");
	this.togglerIcon = this.toggler.children[0];
	this.headerGroup = this.container.querySelector(".header-cell-group");
	this.init()
}
Header.prototype.init = function(){
	const instance = this;
	
	_addEventListener(this.toggler, 'click', function(){
		instance.toggleDisplay();
	});
}

Header.prototype.toggleDisplay = function(){
	const group = this.headerGroup;
	if (group.classList.contains("in")) {
		group.style.height = "0px";
		group.classList.remove("in");
		this.togglerIcon.classList.remove("fa-close");
		this.togglerIcon.classList.add("fa-navicon");
	} else {
		group.classList.add("in");
		group.style.height = group.children[0].offsetHeight + "px";
		this.togglerIcon.classList.remove("fa-navicon");
		this.togglerIcon.classList.add("fa-close");
	}
}

window.Header = Header;