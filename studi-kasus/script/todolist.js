const todoList = ["Belajar HTML", "Belajar JavaScript"];

document.forms["todoForm"].onsubmit = function (event) {
  event.preventDefault();
  const todo = document.forms["todoForm"]["todo"].value;
  todoList.push(todo);

  document.forms["todoForm"].reset();
  displayTodolist();
};

/* untuk menghindari duplikat looop, 
cek dulu  apakah ada todolist di child pertama jika ada hapus */
function clearTodoList() {
  let todoListBody = document.getElementById("todoListBody");
  while (todoListBody.firstChild) {
    todoListBody.removeChild(todoListBody.firstChild);
  }
}

function addTodoList(todo, index) {
  let tr = document.createElement("tr");
  let tdButton = document.createElement("td");
  let tdTodo = document.createElement("td");

  let buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Done";

  // remove todo
  buttonDone.onclick = function () {
    removeTodo(index);
  };

  tdButton.appendChild(buttonDone);
  tr.appendChild(tdButton);
  tr.appendChild(tdTodo);

  tdTodo.textContent = todo;

  let todoListBody = document.getElementById("todoListBody");
  todoListBody.append(tr);
}

// iterasi untuk ditampilkan
function displayTodolist() {
  clearTodoList(); //jalankan

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];

    const searchText = document.getElementById("search").value.toLowerCase();
    if (todo.toLowerCase().includes(searchText)) {
      addTodoList(todo, i); //panggil method
    }
  }
}

function removeTodo(index) {
  console.log(`remove todo ke ${index}`);
  todoList.splice(index, 1);

  displayTodolist();
}

// pencarian
const searchText = document.getElementById("search");

searchText.onkeyup = function () {
  displayTodolist();
};
searchText.onkeydown = function () {
  displayTodolist();
};

// tampilkan default
displayTodolist();
