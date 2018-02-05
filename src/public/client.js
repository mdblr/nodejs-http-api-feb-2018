(() => {
  init();

  function init() {
    tableDataFetchAll();
    const searchButton = document.getElementById('search-btn');
    searchButton.addEventListener('click', submitForm)
  }

  function submitForm(e) {
    e.preventDefault();
    const term = document.getElementById('search-term').value;
    document.getElementById('search-term').value = '';
    tableDataFetchMatches(term);
  }

  function tableDataFetch(url) {
    fetch(url)
    .then(res => res.json().then(setTable))
    .catch(err => console.log(err));
  }

  function tableDataFetchAll() {
    return tableDataFetch('/names/all');
  }

  function tableDataFetchMatches(term) {
    return tableDataFetch(`/names/search?nameQuery=${term}`)
  }

  function setTable(data) {
    const main = document.querySelector('main');
    const table = document.querySelector('table') || document.createElement('table');

    if (table.children.length > 0) {
      while (table.lastChild) {
        table.removeChild(table.lastChild);
      }
    }

    const nameNodes = data.names.map(name => createNameNode(name));
    nameNodes.forEach(node => table.appendChild(node));
    main.appendChild(table);
  }

  function createNameNode(name) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.classList.add('name-node');
    tr.appendChild(td);
    td.textContent = name;
    return tr;
  }
})()
