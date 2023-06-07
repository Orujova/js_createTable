let inputName = document.getElementById("inputName");
let inputSurname = document.getElementById("inputSurname");
let inputAge = document.getElementById("inputAge");
let saveButton = document.getElementById("saveButton");
let tbody = document.getElementById("tbody");
let searchInput = document.getElementById("searchInput");
const arr = [];
saveButton.addEventListener("click", () => {
  if (
    !inputName.value.trim() &&
    !inputSurname.value.trim() &&
    !inputAge.value.trim()
  ) {
    return;
  }
  let new_tr_element = document.createElement("tr");
  new_tr_element.innerHTML = `
  <td>${inputName.value}</td>
  <td>${inputSurname.value}</td>
  <td>${inputAge.value}</td>
  `;
  let people = {
    name: inputName.value,
    surname: inputSurname.value,
    age: inputAge.value,
  };
  arr.push(people);
  tbody.append(new_tr_element);
  resetInputs();

  const remove = document.createElement("button");
  remove.classList.add("remove");
  remove.addEventListener("click", () => {
    new_tr_element.remove();
  });
  remove.textContent = "del";
  new_tr_element.append(remove);
});

searchInput.addEventListener("keyup", () => {
  const searchInputValue = searchInput.value.trim().toLowerCase();
  Array.from(tbody.children).forEach((item) => {
    const name = item.children[0].textContent.trim().toLowerCase();
    const surname = item.children[1].textContent.trim().toLowerCase();
    const age = item.children[2].textContent.trim().toLowerCase();
    if (
      name.toLowerCase().startsWith(searchInputValue.toLowerCase()) ||
      surname.toLowerCase().startsWith(searchInputValue.toLowerCase()) ||
      age.toLowerCase().startsWith(searchInputValue.toLowerCase())
    ) {
      item.style.display = "table-row";
    } else {
      item.style.display = "none";
    }
  });
});

function resetInputs() {
  inputName.value = "";
  inputSurname.value = "";
  inputAge.value = "";
}
