const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");




function addTask(){
    let taskItem;
    
    const taskText = taskInput.value.trim();


    if(taskText !== ""){
        taskItem = document.createElement("li");
        taskItem.innerHTML = `<span>${taskText}</span>
        <button class="delete-btn"> Eliminar </button>`

        const deleteBtn = taskItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click",deleteTask);
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }

}


function deleteTask(){
    this.parentElement.remove();
}


addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if (e.key === "Enter") {
        addTask();
    }
})


taskList.addEventListener("click", function(e){
    if (e.target.tagName === "SPAN"){
        e.target.classList.toggle("complete");
    }
})


