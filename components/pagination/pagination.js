(function(){
  function Pagination() {
    const allPagination = document.querySelectorAll("[data-comp='Pagination']");
    
    for (var i = allPagination.length - 1; i >= 0; i--) {
      new PaginationItem(allPagination[i]);
    }
  }
  function PaginationItem(element) {
    this.container = element;
    this.pageWrapper = this.container.querySelector('.page-cell-wrapper');
    this.init()
  }
  PaginationItem.prototype.init = function() {
    var instance = this
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
  PaginationItem.prototype.toggleShowmenu = function() {
    const pagelist = this.pageWrapper.querySelector('.pagenumber-alt');
    const page_icon = this.pageWrapper.querySelector('.fa');
    if (pagelist.classList.contains('in')) {
      pagelist.classList.remove('in');
      pagelist.style.height = 0;
      page_icon.classList.remove('fa-angle-down');
      page_icon.classList.add('fa-angle-up');
    }else {
      pagelist.classList.add('in');
      pagelist.style.height = pagelist.querySelector('ul').offsetHeight + 'px';
      page_icon.classList.remove('fa-angle-up');
      page_icon.classList.add('fa-angle-down');
    }
  }

  window.slpComp.Pagination = Pagination;
}());
