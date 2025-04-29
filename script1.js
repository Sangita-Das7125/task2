// Form Validation
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const error = document.getElementById('error=message');
  
    error.textContent = '';
  
    if (!name || !email || !message) {
      error.textContent = 'All fields are required.';
      return;
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      error.textContent = 'Enter a valid email address.';
      return;
    }
  
    alert('Message sent successfully!');
    this.reset();
  });
  
  // To-Do List Functionality
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');
  
  addTaskBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
  
    if (taskText === '') {
      alert('Please enter a task.');
      return;
    }
  
    const li = document.createElement('li');
    li.textContent = taskText;
  
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('remove-btn');
  
    removeBtn.addEventListener('click', () => {
      taskList.removeChild(li);
    });
  
    li.appendChild(removeBtn);
    taskList.appendChild(li);
  
    taskInput.value = '';
  });