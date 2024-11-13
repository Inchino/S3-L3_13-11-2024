const btnNewTask = document.getElementById("btnNewTask");
const clearBtn = document.getElementById("clearBtn");
const input = document.getElementById("newTask");
const todo = document.getElementById("todo");
const listItems = [];

btnNewTask.addEventListener("click", function (element) {
  element.preventDefault();
  if (!check()) return;
  createArray();
  printList();
});

function check(element) {
  input.addEventListener("keypress", element);
  if (element.key === "") {
    alert("Task not valid!\n Check the input!");
    return false;
  } else {
    input.value = "";
    return true;
  }
}

clearBtn.addEventListener("click", function () {});

function createArray() {
  listItems.push(input.value);
}

function printList() {
  todo.innerHTML = "";
  for (let i = 0; i < listItems.length; i++) {
    let newP = document.createElement("p");
    newP.innerText = listItems[i];
    let btnDelete = document.createElement("button");
    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("onclick", `deleteItem(${i})`);
    btnDelete.innerText = "❌";
    newP.appendChild(btnDelete);
    todo.appendChild(newP);
  }
}

function deleteItem(index){
    listItems.splice(index,1);
    printList();
}
