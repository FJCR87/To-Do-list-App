const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list");

function addTask (){
    if(inputBox.value === ""){
        alert("Please, write your task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("cheched");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}, false);

function saveData(){
    localStorage.setItem("data", todoList.innerHTML);
}
function showTask(){
    todoList.innerHTML = localStorage.getItem("data");
}
showTask();