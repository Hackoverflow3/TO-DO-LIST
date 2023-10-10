document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Add a new task to the list
    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;

        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="remove">Remove</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = "";
    });

    // Remove a task from the list
    taskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove")) {
            event.target.parentElement.remove();
        }
    });
});
