// Select elements
const clickBtn = document.getElementById('clickBtn');
const hoverBox = document.getElementById('hoverBox');
const form = document.getElementById('todo-form');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const keyInput = document.getElementById('keyInput');
const keyLog = document.getElementById('keyLog');

// 1. Click Event
clickBtn.addEventListener('click', () => {
  alert('Button was clicked');
});

// 2. Hover Event
hoverBox.addEventListener('mouseover', () => {
  hoverBox.textContent = "You're hovering!";
  hoverBox.style.backgroundColor = '#82e0aa';
});
hoverBox.addEventListener('mouseout', () => {
  hoverBox.textContent = 'Hover over Royal Harsh!';
  hoverBox.style.backgroundColor = '#a3d5f7';
});

// 3. Form Submit
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  // Toggle done class
  li.addEventListener('click', () => {
    li.classList.toggle('done');
  });

  taskList.appendChild(li);
  taskInput.value = '';
});

// 4. Keyboard Event
keyInput.addEventListener('keydown', (event) => {
  keyLog.textContent = `Key pressed: ${event.key}`;
});
