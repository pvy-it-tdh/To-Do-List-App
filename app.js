const inputbox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  // Validate input
  if (inputbox.value.trim() === "") {
    alert("You must write something!");
    return; // Exit the function early if input is empty
  }

  // Create a new list item (li) element
  const newTask = document.createElement("li");
  newTask.textContent = inputbox.value.trim(); // Use textContent for better performance and security

  // Create a close button (span) element
  const closeButton = document.createElement("span");
  closeButton.textContent = "\u00d7"; // Cross symbol for close button
  closeButton.classList.add("close-button"); // Add a CSS class for styling (uncommented)

  // Add functionality to close the task on button click
  closeButton.addEventListener("click", function () {
    this.parentElement.remove(); // Remove the task list item (li)
  });

  // Append the close button to the task list item
  newTask.appendChild(closeButton);

  // Append the task list item to the list container
  listContainer.appendChild(newTask);

  // Clear the input box after adding the task
  inputbox.value = "";
  saveData();
}

// Single event listener for click events on the list container
listContainer.addEventListener("click", function (event) {
  const clickedElement = event.target; // Get the element that was clicked

  // Handle clicks on list items (li)
  if (clickedElement.tagName === "LI") {
    clickedElement.classList.toggle("checked"); // Toggle "checked" class for task completion
  } else if (clickedElement.tagName === "SPAN") {
    // Handle clicks on close buttons (span)
    clickedElement.parentElement.remove(); // Remove the task list item (li)
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
