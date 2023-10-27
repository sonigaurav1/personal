document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('taskInput');
    const addTaskButton = document.getElementById('addTaskButton');
    const tasksList = document.getElementById('tasks');
  
    // Load tasks from local storage
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      tasksList.innerHTML = savedTasks;
    }
  
    addTaskButton.addEventListener('click', function() {
      const taskText = taskInput.value.trim();
      if (taskText !== '') {
        const li = document.createElement('li');
        li.textContent = taskText;
        tasksList.appendChild(li);
        taskInput.value = '';
  
        // Save tasks to local storage
        localStorage.setItem('tasks', tasksList.innerHTML);
      }
    });
  
    tasksList.addEventListener('click', function(event) {
      if (event.target.classList.contains('deleteButton')) {
        event.target.parentNode.remove();
  
        // Save tasks to local storage
        localStorage.setItem('tasks', tasksList.innerHTML);
      }
    });
  });