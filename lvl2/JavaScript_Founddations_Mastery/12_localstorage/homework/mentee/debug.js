// ============================================================
// 🐛  localStorage — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This saves a task array to localStorage and reads it back.
// But tasks.length logs 1 instead of 3, and tasks[0] is a string.
// What's wrong?

// const tasksToSave = [
//   { id: 1, title: "Task A" },
//   { id: 2, title: "Task B" },
//   { id: 3, title: "Task C" }
// ];

// localStorage.setItem("tasks", JSON.stringify(tasksToSave));

// const tasks = localStorage.getItem("tasks");
// console.log(tasks.length);   // logs a large number — wrong
// console.log(tasks[0]);       // logs "{" — wrong, expected an object

// What's wrong ↓
// did not parse the localstorage content

// Your fix ↓
const tasksToSave = [
  { id: 1, title: "Task A" },
  { id: 2, title: "Task B" },
  { id: 3, title: "Task C" }
];

localStorage.setItem("tasks", JSON.stringify(tasksToSave));

const tasks = JSON.parse(localStorage.getItem("tasks"));
console.log(tasks.length);   
console.log(tasks[0]); 


// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This function should save the task board state and show
// a save indicator. The save works but the indicator never appears.
// What's wrong?

function saveBoardState(taskList) {
  localStorage.setItem("board", JSON.stringify(taskList));

  const indicator = document.getElementById("save-indicator");
  indicator.classList.add("visible");

  setTimeout(function() {
    indicator.classList.remove("visible");
  }, 1500);
}

// The indicator element has this CSS:
// .save-indicator { opacity: 0; transition: opacity 0.3s; }
// .save-indicator.visible { opacity: 1; }
//
// saveBoardState() is being called from inside another function
// that also does heavy DOM work immediately after.
// Think about what could prevent the class from taking visual effect.

// What's wrong ↓
// The browser can't render the visible class while busy, and by the time it finishes, the timer has already removed it.

// Your fix — conceptual explanation is enough here ↓
// Wrapping runHeavyDomCalculations() in setTimeout(..., 0) pushes it to the back of the event loop queue.


// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This loads tasks and renders them.
// It crashes on first load AND has a second bug that causes
// duplicate tasks on every subsequent load.
// Find both bugs.

// let taskList = [];

// function loadAndRender() {
// const raw = localStorage.getItem("boardTasks");
// taskList = JSON.parse(raw);

// taskList.forEach(function(task) {
// const li = document.createElement("li");
// li.textContent = task.title;
// document.getElementById("list-todo").appendChild(li);
// });
// }

// // Saving some tasks so the second bug can be demonstrated:

// localStorage.setItem("boardTasks", JSON.stringify([
// { id: 1, title: "Task A", status: "todo" },
// { id: 2, title: "Task B", status: "todo" }]));

// loadAndRender();
// loadAndRender(); // called again — what happens? // it displays the list again

// Bug 1 (crash on first load) ↓
// in the fresh browser, the local storage is going to return null 

// Bug 2 (duplicates) ↓
// it appends the list twice without clearing the DOM

// Your fix ↓
let taskList = [];

function loadAndRender() {
  const raw = localStorage.getItem("boardTasks");
  taskList  = JSON.parse(raw) || [];

  const listEl = document.getElementById("list-todo");
  // Fix 2: Clear old items so they don't duplicate on re-render
  listEl.innerHTML = "";

  taskList.forEach(function(task) {
    const li = document.createElement("li");
    li.textContent = task.title;
    document.getElementById("list-todo").appendChild(li);
  });
}

// Saving some tasks so the second bug can be demonstrated:
localStorage.setItem("boardTasks", JSON.stringify([
  { id: 1, title: "Task A", status: "todo" },
  { id: 2, title: "Task B", status: "todo" }
]));

loadAndRender();
loadAndRender();
