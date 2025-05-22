const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const dropdown = document.getElementById("dropdown");

const todoList = [
  {
    id: 1,
    todo: "Wakker blijven",
    winkel: "school",
    status: true,
  },
  {
    id: 2,
    todo: "Roikel soepje drinken",
    winkel: "De kesel zijn stash",
    status: true,
  },
  {
    id: 3,
    todo: "Speech maken pyhton is beter dan JS",
    winkel: "Aldi",
    status: true,
  },
];

function addtolist(List) {
  list.innerHTML = "";
  List.forEach((element) => {
    const li = document.createElement("li");
    li.innerText = `${element.todo}`;
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
    list.appendChild(li);
  });
}

function fillSelect(element, listen, valueOption) {
  element.innerHTML = "";
  listen.forEach((item) => {
    const newOption = document.createElement("option");
    newOption.value = item[valueOption];
    newOption.innerHTML = item.winkel;
    element.appendChild(newOption);
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  // list.splice(0, maxID(todoList, "id"));
  const text = input.value.trim();
  if (text !== "") {
    todoList.push({
      id: maxID(todoList, "id") + 1,
      todo: `${text}`,
      winkel: "azerty",
      status: true,
    });
    input.value = "";
    addtolist(todoList);
    console.log(todoList);
  }
});

const maxID = (lijst, veldNaamID) => {
  let maxId = 1;
  lijst.forEach((gebruiker) => {
    const id = gebruiker[veldNaamID];
    console.log(id);
    if (gebruiker[veldNaamID] > maxId) maxId = gebruiker[veldNaamID];
  });
  return maxId;
};

addtolist(todoList);
fillSelect(dropdown, list, "id");
