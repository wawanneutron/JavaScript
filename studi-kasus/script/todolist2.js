// state
// const todoList = []; // data lama
const tasks = JSON.parse(localStorage.getItem("tasks")) || {};
console.log(tasks);

// ketika di submit
document.forms["todoForm"].onsubmit = function (event) {
  event.preventDefault();

  const todo = document.forms["todoForm"]["task"];

  localStorage.setItem(
    "tasks",
    JSON.stringify([
      ...JSON.parse(localStorage.getItem("tasks") || "[]"),
      {
        task: todo.value,
      },
    ])
  );
  document.forms["todoForm"].reset();
  displayTodoList();
  window.location.reload();
};

// component  yang ditampilkan
function addTodoList(todo, index) {
  const cardList = document.getElementById("cardTodo");

  const card = document.createElement("div");
  const row = document.createElement("div");
  const col10 = document.createElement("div");
  const col2 = document.createElement("div");
  const buttonRemove = document.createElement("button");
  const task = document.createElement("div");

  card.className = "card card-body";
  row.className = "row align-items-center";
  col10.className = "col-md-10";
  col2.className = "col-md-2";
  buttonRemove.className = "btn btn-danger";
  buttonRemove.textContent = "Delete";
  task.className = "task mb-3";
  task.textContent = todo;

  cardList.appendChild(card);
  card.appendChild(row);
  row.appendChild(col10);
  row.appendChild(col2);
  col10.appendChild(task);
  col2.appendChild(buttonRemove);

  // remove function
  buttonRemove.onclick = function () {
    clearTodo(index);
  };
}

// menampilkan
function displayTodoList() {
  // panggil function clear || hanya untuk data yg tidak disimpan di local atau static
  // clearFistChild();
  const textSearch = document.getElementById("search").value.toLowerCase();

  for (let i = 0; i < tasks.length; i++) {
    const todo = tasks[i].task;

    if (todo.toLowerCase().includes(textSearch)) {
      addTodoList(todo, i); //looping component
    }
  }
}

// hapus child pertama
// function clearFistChild() {
//   let todoBody = document.getElementById("cardTodo");
//   while (todoBody.firstChild) {
//     todoBody.removeChild(todoBody.firstChild);
//   }
// }

// hapus todo
function clearTodo(index) {
  let getTasks = JSON.parse(localStorage.getItem("tasks"));
  getTasks.splice(index, 1);
  // set ulang setelah di hapus
  localStorage.setItem("tasks", JSON.stringify(getTasks));
  window.location.reload();
}

// search text
const textSearch = document.getElementById("search");
textSearch.onkeyup = function () {
  displayTodoList();
};

// tampilkan default
displayTodoList();
