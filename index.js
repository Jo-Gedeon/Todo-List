const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("task-list");


function addTask() {
    const task = inputBox.value.trim();
    if (task === "") {
        return;
    }
    const li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" onclick="toggleTask(event)" /> <span class="task-text">${task}</span> <button onclick="deleteTask(event)">Delete</button> <button onclick="editTask(event)">Edit</button>`;
    listContainer.appendChild(li);
    inputBox.value = "";
}

function deleteTask(event) {
    const li = event.target.parentElement;
    li.remove();
}

function editTask(event) {
    const newTask = prompt("Edit task");
    if (newTask === null || newTask === "") {
        return;
    }
    const li = event.target.parentElement;
    li.innerHTML = `<input type="checkbox" onclick="toggleTask(event)" /> <span class="task-text">${newTask}</span> <button onclick="deleteTask(event)">Delete</button> <button onclick="editTask(event)">Edit</button>`;
}

function toggleTask(event) {
    const li = event.target.parentElement;
    li.classList.toggle("checked");

}