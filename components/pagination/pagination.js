function Pagination(pageId) {
	this.container = document.getElementById(pageId);
	this.pageWrapper
	this.init()
}
Pagination.prototype.init = function() {
	var instance = this
	this.pageWrapper = this.container.getElementsByClassName('page-cell-wrapper')[0]
	if (window.addEventListener) {
		this.pageWrapper.addEventListener("click",function(){
			instance.toggleShowmenu();
		},false)
	}else{
		this.pageWrapper.onclick = function(){
			instance.toggleShowmenu();
		}
	}
}
Pagination.prototype.toggleShowmenu = function() {
	// alert('ok');
}

window.Pagination = Pagination;