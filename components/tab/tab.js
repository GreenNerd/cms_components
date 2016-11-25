(function(){
	function AllTab() {
    const allTab = document.querySelectorAll("[data-comp='Tab']");
    for (var i = allTab.length - 1; i >= 0; i--) {
      new Tab(allTab[i]);
    }
	}

	function Tab(element) {
		this.tabMenu = element.querySelector(".tab-menu");
		this.tabBox = element.querySelector(".tab-box");

		this.menuBindEvents(this.tabMenu);
		this.boxBindEvents();
	}

	Tab.prototype.menuBindEvents = function(element) {
		element.addEventListener('click',function(event){
			var el = event.target;
			while(!el.classList.contains('tab-item') && el !== element) {
			  el = el.parentElement;
			}

			if (el.classList.contains('tab-item')) {
			  this._toggleDisplay(el);
			}
		}.bind(this),false);
	}
	Tab.prototype._toggleDisplay = function(el) {
		const otherActive = this.tabMenu.querySelectorAll('.active');
		for (var i = otherActive.length - 1; i >= 0; i--) {
			otherActive[i].classList.remove('active');
		}
		el.classList.add('active');

		var index = this._getIndex(el);
		const otherBox = this.tabBox.querySelectorAll('.selected');
		for (var i = otherBox.length - 1; i >= 0; i--) {
			otherBox[i].classList.remove('selected');
		}
		this.tabBox.querySelectorAll('.tab-content')[index].classList.add('selected');
	}
	Tab.prototype._getIndex = function(element) {
		const menuItem = this.tabMenu.querySelectorAll('.tab-item');
		for (var i = menuItem.length - 1; i >= 0; i--) {
			if(menuItem[i] === element){
				return i;
			}
		}
	}
	Tab.prototype.boxBindEvents = function() {
		this.tabBox.addEventListener('click',function(event){
			var el = event.target;
			while(el.tagName !== 'LI' && el !== this.tabBox) {
			  el = el.parentElement;
			}

			if (el.tagName === 'LI') {
			  this._toggleIcon(el);
			}
		}.bind(this),false);
	}
	Tab.prototype._toggleIcon = function(el) {
		var prevActive = el.parentElement.querySelector('.active');
		var Icon = prevActive.querySelector('i');
		prevActive.removeChild(Icon);
		prevActive.classList.remove('active');

		el.classList.add('active');
		el.insertBefore(Icon,el.querySelector('span'));
	}

	window.slpComp.Tab = AllTab;
}());