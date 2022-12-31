document.getElementById("btn").onclick = function() {
    const task = document.getElementById("newTask").value;
    if (task === ""){
        alert("Digite uma tarefa!")
        return;
    } 
const todoList = document.getElementById("todo-list");
const numberTask = document.getElementById("numberTask");
    if (todoList.childElementCount < numberTask.value) {
        const newTask = document.createElement("li");
        newTask.textContent = task;

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "X";
deleteBtn.addEventListener("click", function(){
    todoList.removeChild(newTask)
});
todoList.appendChild(newTask);
newTask.appendChild(deleteBtn);

} else {
alert("Você atingiu o limite máximo de tarefas!");
}

}

