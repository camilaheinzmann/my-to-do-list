var inputElement = document.querySelector('.input-todo');
var btnElement = document.querySelector('.btn-add');
var ulElement = document.querySelector('.list ul');

function addTodo() {
    var listItem = document.createElement('li');
    var textItem = document.createTextNode(inputElement.value);

    listItem.appendChild(textItem);
    ulElement.appendChild(listItem);

    inputElement.value = "";
}