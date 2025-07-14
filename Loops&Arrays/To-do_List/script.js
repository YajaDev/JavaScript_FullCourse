let todoList = JSON.parse(localStorage.getItem('todoList')) || {
    todo: [],
    date: [],
    todoP1: [],
    todoP2: []
};
// localStorage.removeItem('todoList');
console.log(todoList);

const todoNameElement = document.getElementById('to-do_name');
const todoNameElementP1 = document.getElementById('to-do_name_p1');
const todoNameElementP2 = document.getElementById('to-do_name_p2');

displaylist();

function AddTodo(todoName,inputElement) {

    const dueDateElement = document.getElementById('due_date');
    
    if (inputElement === todoNameElement) {
        !todoList.todo && (todoList.todo = [], todoList.date = [])
        todoList.todo.push(todoName);
        todoList.date.push(dueDateElement.value);

        displaylist(inputElement);
    }

    if (inputElement === todoNameElementP1) {
        !todoList.todoP1 && (todoList.todoP1 = []);
        todoList.todoP1.push(todoName);
        console.log(todoList.todoP1);
    }

    if (inputElement === todoNameElementP2) {
        !todoList.todoP2 && (todoList.todoP2 = []);
        todoList.todoP2.push(todoName);
        displaylist(inputElement);
    }

    // Destructuring
    // clear other arrays so it wont save on localStorage
    const { todoP1, todoP2, ...todoListWithoutP1P2 } = todoList;

    localStorage.setItem('todoList', JSON.stringify(todoListWithoutP1P2));
    console.log(todoList);
    
    dueDateElement.value = '';
    inputElement.value = '';    
}

function displaylist(inputElement) {
    let toDisplay = '';

    if (inputElement === todoNameElementP2) {
        // document.querySelector('#TodoListDisplay').innerHTML = list.join('<br>');
        for (let i = 0; i < todoList.todoP2.length; i++) {
            toDisplay += `<p class="todo_p2">${todoList.todoP2[i]}</p>`;
        }
        return document.getElementById('to-do_list_ontainer_P2').innerHTML = toDisplay;
    }

    for (let i = 0; i < todoList.todo.length; i++) {
            toDisplay += `
            <div class="list">
                <div id="name">${todoList.todo[i]}</div>
                <div id="date">${todoList.date[i]}</div>
                <button class="delete_btn" onclick="
                    deleteTodo(${i});
                    displaylist();
                ">Delete</button>
            </div>
            `;
        }
        document.getElementById('to-do_list_ontainer').innerHTML = toDisplay;
}

function deleteTodo(index) {
    todoList.todo.splice(index, 1);
    todoList.date.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    console.log(todoList);
}