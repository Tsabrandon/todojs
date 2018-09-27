//selecting documents
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const btn = document.querySelector(".clear-tasks");
const taskInput = document.querySelector("#task");

// add task event
form.addEventListener("submit", function(e) {
//   if (taskInput.value === "") {
//     alert("Add A task");
//   } else {
    // create li element
    const li = document.createElement("li");
    // add class
    li.className = "collection-item";
    // create text node & append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // create a new link element
    const link = document.createElement("a");
    // add class
    link.className = "delete-item secondary-content";
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the link to li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);
    // clear input
    taskInput.value = "";
    e.preventDefault();
});
// remove task
taskList.addEventListener("click", function(e) {
  e.target.parentElement.parentElement.remove();
});

// clear task event
btn.addEventListener("click", function() {
  taskList.innerHTML = "";
});
