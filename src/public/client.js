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

    if (term.trim()) {
      tableDataFetchMatches(term);
    } else {
      displayError('Input cannot be empty.');
    }
  }

  function tableDataFetch(url) {
    fetch(url)
    .then(res => {
      if (res.status > 399) {
        throw new Error('There was a problem on the server.');
      }
      res.json().then(setTable)
    })
    .catch((err) => displayError(err));
  }

  function tableDataFetchAll() {
    return tableDataFetch('/names/all');
  }

  function tableDataFetchMatches(term) {
    return tableDataFetch(`/names/search?nameQuery=${term}`)
  }

  function setTable(data) {
    const main = document.querySelector('main');
    const table = clearTable();

    const tableNodes = (
      data.names.length > 0
      ? data.names.map(name => createDataNode(name))
      : [ createDataNode('No results. Try another name.') ]
    );

    tableNodes.forEach(node => table.appendChild(node));
    main.appendChild(table);
  }

  function displayError(error) {
    const table = clearTable();
    const errorNode = createDataNode(error);
    table.appendChild(errorNode);
  }

  function clearTable() {
    const table = (
      document.querySelector('table') || document.createElement('table'));

    if (table.children.length > 0) {
      while (table.lastChild) {
        table.removeChild(table.lastChild);
      }
    }
    return table;
  }

  function createDataNode(name) {
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = name;
    return tr;
  }
})()
