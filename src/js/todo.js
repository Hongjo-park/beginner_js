const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDOList = document.querySelector("#todo-list");

const TODOS_KEY = "toDos";
let toDos = [];

function deleteToDo(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintToDo(newTodoObj){
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    span.innerText = newTodoObj.text;
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(button);
    
    toDOList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";

    const toDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(toDoObj);
    paintToDo(toDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const saveToDoList = localStorage.getItem(TODOS_KEY);

if (saveToDoList) {
    const parsedToDos = JSON.parse(saveToDoList);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

