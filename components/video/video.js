(function (){
	function selectVideo() {
	  const allVideo = document.querySelectorAll("[data-comp='video']");
	  
	  for (var i = allVideo.length - 1; i >= 0; i--) {
	    new Video(allVideo[i]);
	  }
	}
	function Video(element) {
		this.video = element.querySelector('video');
		this.button = element.querySelector('.play');
		const instance = this
		_addEventListener(this.button, 'click', function(){
			instance.play();
		});
	}
	Video.prototype.play = function() {
		if (this.video.paused) {
			this.video.play();
			this.button.classList.add('none');
		}else {
			this.video.pause();
		}
	}

	window.slpComp.Video = selectVideo

}());