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
	const pagelist = this.pageWrapper.getElementsByClassName('pagenumber-alt')[0];
	const page_icon = this.pageWrapper.getElementsByClassName('fa')[0];
	if (pagelist.classList.contains('in')) {
		pagelist.classList.remove('in');
		pagelist.style.height = 0;
		page_icon.classList.remove('fa-angle-down');
		page_icon.classList.add('fa-angle-up');
	}else {
		pagelist.classList.add('in');
		pagelist.style.height = pagelist.children[0].offsetHeight + 'px';
		page_icon.classList.remove('fa-angle-up');
		page_icon.classList.add('fa-angle-down');
	}
}

window.Pagination = Pagination;