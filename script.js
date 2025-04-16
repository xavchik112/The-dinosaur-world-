document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    const articleTitles = Array.from(document.querySelectorAll('h2[id]')).map(h2 => ({
      id: h2.id,
      title: h2.textContent
    }));
  
    searchInput.addEventListener('input', function () {
      const searchTerm = this.value.toLowerCase();
      const filteredResults = articleTitles.filter(article =>
        article.title.toLowerCase().includes(searchTerm)
      );
  
      searchResults.innerHTML = '';
  
      if (searchTerm && filteredResults.length > 0) {
        filteredResults.forEach(article => {
          const li = document.createElement('li');
          li.textContent = article.title;
          li.addEventListener('click', function () {
            window.location.hash = article.id;
            searchResults.style.display = 'none';
          });
          searchResults.appendChild(li);
        });
        searchResults.style.display = 'block';
      } else {
        searchResults.style.display = 'none';
      }
    });
  
    document.addEventListener('click', function (event) {
      if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
        searchResults.style.display = 'none';
      }
    });
  });
  
  