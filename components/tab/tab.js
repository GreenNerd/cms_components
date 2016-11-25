(function(){
	function AllTab() {
    const allTab = document.querySelectorAll("[data-comp='Tab']");
    for (var i = allTab.length - 1; i >= 0; i--) {
      new Tab(allTab[i]);
    }
	}

	function Tab(element) {
		this.tabMenu = element.querySelector(".tab-menu");
		this.titleBindEvents(this.tabMenu);
		this.iconClass = {
			open: 'fa fa-angle-down',
			close: 'fa fa-angle-up'
		}
	}

	Tab.prototype.titleBindEvents = function(element) {
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
		var target = el;
		if (target.classList.contains('active')) {
			this._hide(target);
		} else {
			const otherActive = this.tabMenu.querySelector('.active');
			if (otherActive) {
				this._hide(otherActive);
			} 
			target.classList.add('active');
			target.querySelector('.fa').className = this.iconClass.open;
			target.parentElement.querySelector('.tab-content').classList.add('show');
		}

		this.contentBindEvents();
	}
	Tab.prototype._hide = function(element) {
		element.classList.remove('active');
		element.querySelector('.fa').className = this.iconClass.close;
		element.parentElement.querySelector('.tab-content').classList.remove('show');
	}
	Tab.prototype.contentBindEvents = function() {
		var curActive = this.tabMenu.querySelector('.active');
		if (curActive) {
			curActive.parentElement.addEventListener('click',function(event){
				var el = event.target;
				while(el.tagName !== 'LI' && el !== this.tabMenu) {
				  el = el.parentElement;
				}

				if (el.tagName === 'LI') {
				  this._toggleIcon(el);
				}
			}.bind(this),false);
		}
	}
	Tab.prototype._toggleIcon = function(el) {
		var prevActive = el.parentElement.querySelector('.selected');
		var Icon = prevActive.querySelector('i');
		prevActive.querySelector('.blank').removeChild(Icon);
		prevActive.classList.remove('selected');

		el.classList.add('selected');
		el.querySelector('.blank').appendChild(Icon);
	}

	window.slpComp.Tab = AllTab;
}());