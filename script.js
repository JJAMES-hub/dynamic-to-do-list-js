// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Select DOM elements
  const addButton = document.getElementById('add-task');
  const taskInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');

  // Function to add a task
  function addTask() {
    // Get and trim the value from the input field
    const taskText = taskInput.value.trim();

    // If input is empty, alert the user
    if (taskText === '') {
      alert('Please enter a task!');
      return;
    }

    // Create a new <li> element
    const li = document.createElement('li');
    li.textContent = taskText;

    // Create a Remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.className = 'remove-btn';

    // Add click event to remove the task
    removeButton.onclick = function () {
      taskList.removeChild(li);
    };

    // Append button to li and li to the task list
    li.appendChild(removeButton);
    taskList.appendChild(li);

    // Clear input field
    taskInput.value = '';
  }

  // Add click event listener to Add Task button
  addButton.addEventListener('click', addTask);

  // Add keypress event listener for Enter key in input
  taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      addTask();
    }
  });

  // Optionally invoke addTask on load (based on last instruction)
  // Uncomment this if preloading or fetching tasks is needed
  // addTask();
});
