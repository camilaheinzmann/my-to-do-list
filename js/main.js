var inputElement = document.querySelector('.input-todo');
var dateElement = document.querySelector('.date-todo');
var timeElement = document.querySelector('.time-todo');
var btnElement = document.querySelector('.btn-add');
var ulElement = document.querySelector('.list ul');

var todos = JSON.parse(localStorage.getItem('todos_list')) || [];

moment.locale('pt-br');

function allTodos() {
    // limpa lista para não renderizar tudo novamente
    ulElement.innerHTML = '';

    for (todo of todos) {
        // posição da to-do no vetor
        var pos = todos.indexOf(todo);

        //cria to-do
        var listItem = document.createElement('li');
        var dataItem = document.createElement('div');
        dataItem.setAttribute('class', 'data-item');

        var item = document.createElement('p');
        item.setAttribute('class', 'item-list');
        var textItem = document.createTextNode(todo.name);

        // add data e hora
        var dateTodo = document.createElement('span');
        dateTodo.setAttribute('class', 'date-todo-list');
        var textDate = document.createTextNode(todo.date + " - " + todo.time);

        //add botao excluir
        var btnDel = document.createElement('button');
        btnDel.setAttribute('class', 'btn-del-list');
        var textDel = document.createTextNode('Delete');

        // adiciona método onclick para excluir todo na posição definida
        btnDel.setAttribute('onclick', 'delTodo(' + pos + ')');

        ulElement.appendChild(listItem);
        listItem.appendChild(dataItem);
        dataItem.appendChild(item);
        item.appendChild(textItem);
        dataItem.appendChild(dateTodo);
        dateTodo.appendChild(textDate);
        listItem.appendChild(btnDel);
        btnDel.appendChild(textDel);
    }
}

function addTodo() {
    if (inputElement.value !== '') {
        if (dateElement.value !== "" && timeElement.value !== "") {
            var input = {};
            input.name = inputElement.value;
            input.date = moment(dateElement.value).format('DD/MM/YYYY');
            input.time = timeElement.value;
            todos.push(input);
            inputElement.value = "";
            dateElement.value = "";
            timeElement.value = "";
            allTodos();

            saveStorage();
        } else {
            alert("Please, enter date and time correctly");
        }
    } else {
        alert('Write a to-do!');
    }
}

function delTodo(pos) {
    todos.splice(pos, 1);
    allTodos();
    saveStorage();
}

function delAll() {
    todos = [];
    allTodos();
    saveStorage();
}

// função para armazenar os dados no storage
function saveStorage() {
    localStorage.setItem('todos_list', JSON.stringify(todos));
}

allTodos();
