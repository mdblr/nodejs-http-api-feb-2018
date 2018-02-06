'use strict';

describe('test app.setTable', () => {

  beforeEach(() => {
    document.body.innerHTML = window.__html__['src/public/index.html'];
  });

  it('should create a table', () => {
    const results = {names: []};
    window.app.setTable(results);

    const table = document.querySelector('table');
    expect(table).to.not.be.null;
  });

  it('should create a table with three children', () => {
    const results = {names: ['James', 'Jackie', 'Ryan']};
    window.app.setTable(results);

    const table = document.querySelector('table');
    expect(table.children.length).to.equal(3);
  });

  it('should create a table with three children', () => {
    const results = {names: ['James', 'Jackie', 'Ryan']};
    window.app.setTable(results);

    const table = document.querySelector('table');
    const cells = Object.keys(table.children).map(key => table.children[key]);
    const names = cells.map(cell => cell.innerText);

    expect(names).to.deep.equal(results.names);
  });

  it('should create a table with 1 child given empty results', () => {
    const results = {names: []};
    window.app.setTable(results);

    const table = document.querySelector('table');

    expect(table.children.length).to.equal(1);
  });

  it('should display a message given empty results', () => {
    const results = {names: []};
    window.app.setTable(results);

    const table = document.querySelector('table');
    const message = table.firstChild.firstChild.innerText;

    expect(message).to.equal('No results. Try another name.');
  });
});

// TODO
// createDataNode
// - should return a cell nested in a row
// - should have text argument nested in cell
//
// clearTable
// - should create a table element
// - should keep cached table element
// - should empty child nodes from table
//
// displayError
// - should append row in table
// - should contain the correct message
//
// setTable
// - should append a table within a main element
// - should diplay correct names in table
// - should display message when [names] is empty
