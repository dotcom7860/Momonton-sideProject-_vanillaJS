const toDoForm = document.querySelector(".js-toDoform"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "todos";
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(todo){
        return todo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    const delBtn = document.createElement('button');
    const newId = toDos.length + 1;
    delBtn.innerText = '❌';
    delBtn.addEventListener('click',deleteToDo);
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = toDos.length + 1;
    toDoList.appendChild(li);
    const toDosObj = {
        text:text,
        id:newId
    };
    toDos.push(toDosObj);
    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDoList(){
    const loadToDos = localStorage.getItem(TODO_LS);
    if(loadToDos !== null){
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function(todo){
            paintToDo(todo.text);
        });
    }
}

function init(){
    loadToDoList();
    toDoForm.addEventListener("submit",handleSubmit);
}

init();