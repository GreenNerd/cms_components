(function() {
  function SearchBox() {
    const allSearch = document.querySelectorAll("[data-comp='SearchBox']");

    for (var i = allSearch.length - 1; i >= 0; i--) {
      new Search(allSearch[i]);
    }
  }

  function Search(element) {
    const searchStyle = element.getAttribute('data-style');
    const form = element.querySelector('.search-form');
    const bar = element.querySelector('.search-bar');
    const input = bar.querySelector('.search-input');
    form.addEventListener('click',function(e){
      element.classList.add(searchStyle);
      form.style.display = 'none';
      bar.style = 'none';
      input.focus();
    },false);
    input.addEventListener('blur',function(e){
      element.classList.remove(searchStyle);
      form.style.display = 'block';
      bar.style.display = 'none';
    },false)
  }

  window.slpComp.Search = SearchBox;
}());
