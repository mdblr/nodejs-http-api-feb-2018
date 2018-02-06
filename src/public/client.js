const app = {};

app.init = function () {
  app.tableDataFetchAll();
  const searchButton = document.getElementById('search-btn');
  searchButton.addEventListener('click', app.submitForm);
}

app.submitForm = function(e) {
  e.preventDefault();
  const term = document.getElementById('search-term').value;
  document.getElementById('search-term').value = '';

  if (term.trim()) {
    app.tableDataFetchMatches(term);
  } else {
    app.displayError('Input cannot be empty.');
  }
}

app.tableDataFetch = function (url) {
  fetch(url)
  .then(res => {
    if (res.status > 399) {
      throw new Error('There was a problem on the server.');
    }
    res.json().then(app.setTable);
  })
  .catch((err) => app.displayError(err));
}

app.tableDataFetchAll = function() {
  return app.tableDataFetch('/names/all');
}

app.tableDataFetchMatches = function(term) {
  return app.tableDataFetch(`/names/search?nameQuery=${term}`);
}

app.setTable = function(data) {
  const main = document.querySelector('main');
  const table = app.clearTable();

  const tableNodes = (
    data.names.length > 0
    ? data.names.map(name => app.createDataNode(name))
    : [ app.createDataNode('No results. Try another name.') ]
  );

  tableNodes.forEach(node => table.appendChild(node));
  main.appendChild(table);
}

app.displayError = function(error) {
  const table = app.clearTable();
  const errorNode = app.createDataNode(error);
  table.appendChild(errorNode);
}

app.clearTable = function() {
  const table = (
    document.querySelector('table') || document.createElement('table'));

  if (table.children.length > 0) {
    while (table.lastChild) {
      table.removeChild(table.lastChild);
    }
  }
  return table;
}

app.createDataNode = function(name) {
  const tr = document.createElement('tr');
  const td = document.createElement('td');
  tr.appendChild(td);
  td.textContent = name;
  return tr;
}

window.app = app;
