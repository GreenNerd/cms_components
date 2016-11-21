(function(){
  function Collapse() {
    const allCollapse = document.querySelectorAll("[data-comp='Collapse']");

    for (var i = allCollapse.length - 1; i >= 0; i--) {
      new CollapseItem(allCollapse[i]);
    }
    // const mountedElements = document.querySelectorAll("[data-comp]");
    // mountedElements.forEach(element){
    //   new SlpComp[element.getAttribute('data-comp')](element, args)
    // }

  }

  function CollapseItem(element){
    this.element = element;
    this.compatible = element.getAttribute('data-compatible') === 'true';
    this.activeIndex = parseInt(element.getAttribute('data-activeindex'));
    this.style = this._parseStyle();
    this.iconClass = this._getIconClass();
    this.init();
  }

  CollapseItem.prototype._getIconClass = function(){
    var defaultClass;
    switch (this.style){
      case 'default':
        defaultClass = {
          open: 'fa fa-caret-down left',
          close: 'fa fa-caret-right left'
        }
        break;
      case 'primary':
        defaultClass = {
          open: 'fa fa-minus right',
          close: 'fa fa-plus right'
        }
        break;
      default:
        defaultClass = {}
    }
    return defaultClass
  }

  CollapseItem.prototype._parseStyle = function(){
    const reg = /\s(default|primary)\s/;
    const extendClass = ' ' + this.element.className + ' ';
    if (reg.test(extendClass)) {
      return extendClass.match(reg)[1];
    } else {
      return null;
    }
  }
  //初始化，给title添加点击事件，设置icon
  CollapseItem.prototype.init = function(){
    this.addIcon();
    this.enableActive();
    this.bindEvents();
  }
  CollapseItem.prototype.addIcon = function(){
    var allTitle = this.element.querySelectorAll('.collapse-title');
    for (var i = allTitle.length - 1; i >= 0; i--) {
      var newIcon = document.createElement('i');
      newIcon.className = i === this.activeIndex ? this.iconClass.open : this.iconClass.close;
      switch (this.style) {
        case 'default':
          allTitle[i].insertBefore(newIcon,allTitle[i].querySelector('.collapse-title-txt'));
          break;
        case 'primary':
          allTitle[i].appendChild(newIcon);
          break;
        default:
          break;
      }
    }
    // allTitle.forEach(function(el, index){
    //   var newIcon = document.createElement('i');
    //   newIcon.className = index === this.activeIndex ? this.iconClass.open : this.iconClass.close;
    //   switch (this.style) {
    //     case 'default':
    //       el.insertBefore(newIcon,el.querySelector('.collapse-title-txt'));
    //       break;
    //     case 'primary':
    //       el.appendChild(newIcon);
    //       break;
    //     default:
    //       break;
    //   }
    // }.bind(this))
  }
  CollapseItem.prototype.enableActive = function(){
    const active = this.element.querySelectorAll('.collapse-div')[this.activeIndex];
    active.classList.add('active');
    this._setHeight(active);
  }
  CollapseItem.prototype._setHeight = function(element){
    element.querySelector('.collapse-body').style.height = element.querySelector('.collapse-content').getBoundingClientRect().height + 'px';
  }
  CollapseItem.prototype.bindEvents = function(){
    this.element.addEventListener('click',function(event){
      var el = event.target;
      while(!el.classList.contains('collapse-title') && el !== this.element.parentElement) {
        el = el.parentElement;
      }

      if (el.classList.contains('collapse-title')) {
        this._toggleDisplay(el);
      }
    }.bind(this),false)
  }
  CollapseItem.prototype._hide = function(element){
    element.classList.remove('active');
    element.querySelector('.collapse-body').removeAttribute('style');
    element.querySelector('.fa').className = this.iconClass.close;
  }
  //处理折叠
  CollapseItem.prototype._toggleDisplay = function(title){
    var target = title.parentElement;
    if(target.classList.contains('active')){
      this._hide(target);
    } else {
      if (this.compatible) {
        const otherActive = this.element.querySelector('.active');
        if (otherActive) {
          this._hide(otherActive);
        }
      }
      target.classList.add('active');
      target.querySelector('.fa').className = this.iconClass.open;
      this._setHeight(target);
    }

  }

  window.Collapse = Collapse;
}());