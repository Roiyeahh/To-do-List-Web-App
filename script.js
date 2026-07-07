const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something omagah!");
    return;
  }
  let li = document.createElement("li");
  li.innerHTML = `<span>${inputBox.value}</span><button class="delete-btn">&times;</button>`;
  listContainer.appendChild(li);
  inputBox.value = "";
  saveData();
}

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") addTask();
});

listContainer.addEventListener("click", function (e) {
  let li = e.target.closest("li");
  if (!li) return;
  if (e.target.classList.contains("delete-btn")) {
    li.remove();
    saveData();
  } else {
    li.classList.toggle("checked");
    saveData();
  }
});

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data") || "";
}
showTask();