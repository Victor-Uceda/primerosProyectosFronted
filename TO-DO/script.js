const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");




function addTask() {
    let taskItem;

    const taskText = taskInput.value.trim();


    if (taskText !== "") {
        taskItem = document.createElement("li");
        taskItem.innerHTML = `<span>${taskText}</span>
        <div class="botones">
        <button class="edit-btn">Editar</button>
        <button class="delete-btn"> Eliminar </button>
        </div>`

        //boton editar
        const editBtn = taskItem.querySelector(".edit-btn");
        editBtn.addEventListener("click", editeTask);

        //boton eliminar
        const deleteBtn = taskItem.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", deleteTask);


        taskList.appendChild(taskItem);
        taskInput.value = "";
    }

}

function editeTask() {
    const li = this.closest("li");

    li.innerHTML = `
        <input type="text" class="task-inputEdit">
        <button class="aceptEdit-btn">Aceptar</button>
    `;

    const aceptarBtn = li.querySelector(".aceptEdit-btn");

    aceptarBtn.addEventListener("click", function () {
        const nuevoTexto = li.querySelector(".task-inputEdit").value;

        if (nuevoTexto !== "") {
            li.innerHTML = `
       <span>${nuevoTexto}</span>
       <div class="botones">
            <button class="edit-btn">Editar</button>
            <button class="delete-btn">Eliminar</button>
       </div>
    `;

            const editBtn = li.querySelector(".edit-btn");
            const deleteBtn = li.querySelector(".delete-btn");

            editBtn.addEventListener("click", editeTask);
            deleteBtn.addEventListener("click", deleteTask);
        }

    });
}

function deleteTask() {
    this.parentElement.parentElement.remove();
}


addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask();
    }
})


taskList.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
        e.target.classList.toggle("complete");
    }
})


