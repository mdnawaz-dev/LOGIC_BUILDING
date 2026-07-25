const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {

    const li = document.createElement("li");

    li.textContent = taskInput.value;

    taskList.appendChild(li);

    taskInput.value = "";
});