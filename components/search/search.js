function Search(searchId,searchSty){
	const container = document.getElementById(searchId)
	const searchStyle = searchSty

	const input = container.getElementsByClassName('search-input');
	input[0].onfocus = function(){
		container.classList.add(searchStyle);
		input[0].style.backgroundImage = 'none';
	}
	input[0].onblur = function(){
		if (input[0].value != '') {
			input[0].style.backgroundImage = 'none';
		}else{
			container.classList.remove(searchStyle);
			input[0].style.backgroundImage = 'url("/assets/library/search.png")';
		}
	}
}

window.Search = Search;