function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value;
    document.createElement("tr");
    if (taskText === "") {
        return;
    }
    document.createElement("td");
    var li = document.createElement("li");
    li.textContent = taskText;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Remover";
    deleteButton.onclick = function() {
        li.remove();
    };

    li.appendChild(deleteButton);
    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}