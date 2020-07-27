var inputElement = document.querySelector('.input-todo');
var btnElement = document.querySelector('.btn-add');
var ulElement = document.querySelector('.list ul');

var todos = [];

function allTodos() {
    // limpa lista para não renderizar tudo novamente
    ulElement.innerHTML = '';

    for (todo of todos) {
        // posição da to-do no vetor
        var pos = todos.indexOf(todo);

        //cria to-do
        var listItem = document.createElement('li');
        var item = document.createElement('p');
        item.setAttribute('class', 'item');
        var textItem = document.createTextNode(todo);

        //add botao excluir
        var btnDel = document.createElement('button');
        var textDel = document.createTextNode('Delete');

        btnDel.setAttribute('class', 'btn-del')
        // adiciona método onclick para excluir todo na posição definida
        btnDel.setAttribute('onclick', 'delTodo(' + pos + ')');

        ulElement.appendChild(listItem);
        listItem.appendChild(item);
        item.appendChild(textItem);
        listItem.appendChild(btnDel);
        btnDel.appendChild(textDel);
    }
}

function addTodo() {
    if (inputElement.value !== '') {
        todos.push(inputElement.value);
        inputElement.value = "";
        allTodos();
    } else {
        alert('Write a to-do!');
    }
}

function delTodo(pos) {
    todos.splice(pos, 1);
    allTodos();
}

function delAll() {
    todos = [];
    allTodos();
}

allTodos();