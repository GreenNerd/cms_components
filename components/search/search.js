(function() {
  function SearchBox() {
    const allSearch = document.querySelectorAll("[data-comp='SearchBox']");

    for (var i = allSearch.length - 1; i >= 0; i--) {
      new Search(allSearch[i]);
    }
  }

  function Search(element) {
    const container = element;
    const searchStyle = element.getAttribute('data-style');

    const input = container.querySelector('.search-input');
    input.onfocus = function(){
      container.classList.add(searchStyle);
      input.style.backgroundImage = 'none';
    }
    input.onblur = function(){
      if (input.value != '') {
        input.style.backgroundImage = 'none';
      }else{
        container.classList.remove(searchStyle);
        input.style.backgroundImage = 'url("/assets/library/search.png")';
      }
    }
  }

  window.slpComp.Search = SearchBox;
}());
