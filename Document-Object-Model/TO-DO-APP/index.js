//These are the select DOM elements
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

// This is theEvent Listener for adding a task
taskForm.addEventListener('submit', addTask);

// Function to add a task
function addTask(e) {
    e.preventDefault();
    
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    // Create the task item
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(taskText));
    
    // Create the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.appendChild(document.createTextNode('Delete'));
    deleteBtn.className = 'delete-btn';
    deleteBtn.addEventListener('click', deleteTask);
    li.appendChild(deleteBtn);
    

    taskList.appendChild(li);
    taskInput.value = '';
}

// Function to delete a task
function deleteTask(e) {
    if (confirm('Are you sure you want to delete this task?')) {
        const li = e.target.parentElement;
        taskList.removeChild(li);
    }
}


taskList.addEventListener('click', markAsCompleted);


function markAsCompleted(e) {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
}
