// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Trim input

        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }

        // Create a new <li> element
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create the remove button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';

        // Use classList.add instead of className
        removeButton.classList.add('remove-btn');

        // Remove the task when the button is clicked
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the button to the list item, then add to task list
        li.appendChild(removeButton);
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }

    // Add click event to "Add Task" button
    addButton.addEventListener('click', addTask);

    // Add keypress event to allow Enter key submission
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
