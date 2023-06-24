function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskList = document.getElementById("taskList");
  
  if (taskInput.value === "") {
    return; // Don't add empty tasks
  }
  
  var listItem = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  
  var taskText = document.createTextNode(taskInput.value);
  
  listItem.appendChild(checkbox);
  listItem.appendChild(taskText);
  taskList.appendChild(listItem);
  
  taskInput.value = ""; // Clear the input field
}
