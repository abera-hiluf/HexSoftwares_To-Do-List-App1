// Select elements
const form = document.getElementById("task-form");
const input = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

// Handle form submission
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload

  const taskText = input.value.trim();

  if (taskText !== "") {
    addTask(taskText);
    input.value = ""; // Clear input
  }
});

// Function to add a task
function addTask(taskText) {
  // Create li element
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create buttons container
  const buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("task-buttons");

  // Create Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.addEventListener("click", function () {
    const newText = prompt("Edit task:", li.firstChild.textContent);
    if (newText !== null && newText.trim() !== "") {
      li.firstChild.textContent = newText;
    }
  });

  // Create Remove button
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", function () {
    li.remove();
  });

  // Append buttons to div
  buttonsDiv.appendChild(editBtn);
  buttonsDiv.appendChild(removeBtn);

  // Add text and buttons to li
  li.appendChild(buttonsDiv);

  // Add li to task list
  taskList.appendChild(li);
}
