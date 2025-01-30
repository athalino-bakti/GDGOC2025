function addTask() {
    const input = document.getElementById("tf-input");
    const taskText = input.value.trim();
    if (!taskText) return;
    
    const task = createTaskElement(taskText);
    document.getElementById("task-container").appendChild(task);
    input.value = "";
}

function createTaskElement(text) {
    const task = document.createElement("li");
    task.classList.add("list-item");
    
    const taskContent = document.createElement("span");
    taskContent.textContent = text;
    task.appendChild(taskContent);
    
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-button");
    editButton.onclick = function () {
        const newText = prompt("Edit your task:", taskContent.textContent);
        if (newText !== null && newText.trim() !== "") {
            taskContent.textContent = newText.trim();
        }
    };
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-button");
    deleteButton.onclick = function () {
        task.remove();
    };
    
    task.appendChild(editButton);
    task.appendChild(deleteButton);
    return task;
}

// Add edit buttons to existing tasks
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#task-container li").forEach(task => {
        const text = task.textContent.trim().replace("Delete", "").trim();
        task.innerHTML = ""; // Clear existing content
        
        const newTask = createTaskElement(text);
        task.replaceWith(newTask);
    });
});
