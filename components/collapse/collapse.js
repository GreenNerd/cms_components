function Collapse(className,close_prev,default_open){
  this._elements = [];
  this._className = String(className);
  this._previous = Boolean(close_prev);
  this._default = typeof(default_open) === 'number' ? default_open:-1;
  this.getCurrent;
  this.init()
}
//获取title对应下的折叠内容
Collapse.prototype.getCurrent = function(header){
  var cur;
  if (window.addEventListener) {
    cur = header.parentNode;
  }else{
    cur = header.parentElement;
  }
  return cur.getElementsByClassName("collapse-body")[0];
}
//初始化，给title添加点击事件
Collapse.prototype.init = function(){
  var instance = this;
  this.collectElementbyClass();
  if (this._elements.length === 0) {
    return;
  }
  this._elements[this._default].getElementsByClassName("collapse-title")[0].children[1].classList.remove('fa-plus');
  this._elements[this._default].getElementsByClassName("collapse-title")[0].children[1].classList.add('fa-minus');
  for(var i = 0;i<this._elements.length;i++){
    var h3s = this._elements[i].getElementsByClassName("collapse-title");
    // console.log(h3s)
    if (window.addEventListener) {
      h3s[0].addEventListener("click",function(){
        instance.toggleDisplay(this);
      },false);
    }else{
      h3s[0].onclick = function(){
        instance.toggleDisplay(this);
      }
    }
  }
}
//处理折叠
Collapse.prototype.toggleDisplay = function(header){
  var cur = this.getCurrent(header);


  if(this.isOpen(cur)){
    this.close(cur);
    header.children[1].classList.remove('fa-minus');
    header.children[1].classList.add('fa-plus');
  }else{
    this.open(cur);
    header.children[1].classList.remove('fa-plus');
    header.children[1].classList.add('fa-minus');
  }
  if (this._previous) {
    for(var i = 0;i<this._elements.length;i++){
      if (this._elements[i]!==(cur.parentNode||cur.parentElement)) {
        var collapse_body = this._elements[i].getElementsByClassName("collapse-body");
        collapse_body[0].style.height = "0px";
        collapse_body[0].style.visibility = "hidden";
        this._elements[i].getElementsByClassName("collapse-title")[0].children[1].classList.remove('fa-minus');
        this._elements[i].getElementsByClassName("collapse-title")[0].children[1].classList.add('fa-plus');
      }
    }
  }
}
//判断是否已经打开折叠
Collapse.prototype.isOpen = function(elem){
  return elem.style.visibility === 'visible';
}
//关闭折叠
Collapse.prototype.close = function(elem){
  elem.style.height = '0px';
  elem.style.visibility = 'hidden';
}
//打开折叠
Collapse.prototype.open = function(elem){
  elem.style.height = elem.scrollHeight + 'px';
  elem.style.visibility = 'visible';
}
Collapse.prototype.collectElementbyClass = function(){
  this._elements = [];
  var container = document.getElementById('collapse-container');
  var allelements = container.getElementsByTagName("div");

  for(var i = 0;i<allelements.length;i++){
    var collapse_div = allelements[i];
    if (typeof collapse_div.className === "string" && collapse_div.className === this._className) {
      var h3s = collapse_div.getElementsByClassName("collapse-title");
      var collapse_body = collapse_div.getElementsByClassName("collapse-body");
      if (h3s.length === 1 && collapse_body.length === 1) {
        h3s[0].style.cursor = "pointer";

        if (this._default === this._elements.length) {
          collapse_body[0].style.visibility = "visible";
          collapse_body[0].style.height = collapse_body[0].scrollHeight + "px";
        }else{
          collapse_body[0].style.height = "0px";
          collapse_body[0].style.visibility = "hidden";
        }

        this._elements[this._elements.length] = collapse_div;
      }
    }
  }
}

window.Collapse = Collapse;