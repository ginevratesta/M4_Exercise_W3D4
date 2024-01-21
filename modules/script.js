import { fetchUsersData } from "./api.js";
import {
  filterByName,
  filterByUsername,
  filterByEmail,
  showAll,
  searchBar
} from "./components.js";

const userData = await fetchUsersData();

let counter = 1;
let tableDisplay = document.getElementById("table-display");
let currentDisplay = document.getElementById("current-display");
let activeFilter = "all"; 

const displayNames = (userData) => {
  counter = 1;
  tableDisplay.innerHTML = "";
  currentDisplay.innerHTML = `<th scope="col">Name</th>`;
  userData.forEach((data) => {
    tableDisplay.innerHTML += `<tr id="name-${data.id}">
      <th scope="row">${counter}</th>
      <td class="name-element">${data.name}</td>
    </tr>`;
    counter++;
  });
};

const displayUsernames = (userData) => {
  counter = 1;
  tableDisplay.innerHTML = "";
  currentDisplay.innerHTML = `<th scope="col">Username</th>`;
  userData.forEach((data) => {
    tableDisplay.innerHTML += `<tr id="username-${data.id}">
      <th scope="row">${counter}</th>
      <td class="username-element">${data.username}</td>
    </tr>`;
    counter++;
  });
};

const displayEmails = (userData) => {
  counter = 1;
  tableDisplay.innerHTML = "";
  currentDisplay.innerHTML = `<th scope="col">Email</th>`;
  userData.forEach((data) => {
    tableDisplay.innerHTML += `<tr id="email-${data.id}">
      <th scope="row">${counter}</th>
      <td class="email-element">${data.email}</td>
    </tr>`;
    counter++;
  });
};

const displayUserInfo = (userData) => {
  counter = 1;
  currentDisplay.innerHTML = `<th scope="col"></th>
    <th scope="col">Name</th>
    <th scope="col">Username</th>
    <th scope="col">Email</th>`;
  tableDisplay.innerHTML = "";
  userData.forEach((data) => {
    tableDisplay.innerHTML += `<tr id="userInfo-${data.id}">
      <th scope="row">${counter}</th>
      <td class="row-name-element">${data.name}</td>
      <td class="row-username-element">${data.username}</td>
      <td class="row-email-element">${data.email}</td>
    </tr>`;
    counter++;
  });
};

const updateFilter = (filter) => {
  activeFilter = filter;
  displayFilteredResults(userData);
};

const displayFilteredResults = (userData) => {
  if (activeFilter === "name-element") {
    displayNames(userData);
  } else if (activeFilter === "username-element") {
    displayUsernames(userData);
  } else if (activeFilter === "email-element") {
    displayEmails(userData);
  } else {
    displayUserInfo(userData);
  }
};

displayUserInfo(userData);

filterByName.addEventListener("click", () => updateFilter("name-element"));
filterByUsername.addEventListener("click", () => updateFilter("username-element"));
filterByEmail.addEventListener("click", () => updateFilter("email-element"));
showAll.addEventListener("click", () => updateFilter("all"));

searchBar.addEventListener("keyup", () => filterTable());

function filterTable() {
  let tableRows = [...tableDisplay.querySelectorAll("tr")];
  let resultsFound = false;

  tableRows.forEach((el) => {
    const values = activeFilter === "all"
      ? ["row-name-element", "row-username-element", "row-email-element"].map((className) =>
          el.querySelector(`.${className}`).innerText.toLowerCase()
        )
      : [el.querySelector(`.${activeFilter}`).innerText.toLowerCase()];

    if (values.some((value) => value.includes(searchBar.value.toLowerCase()))) {
      el.style.display = "block";
      resultsFound = true;
    } else {
      el.style.display = "none";
    }
  });

  if (resultsFound) {
    currentDisplay.innerHTML = `<th scope="col">Results:</th>`;
  } else {
    currentDisplay.innerHTML = `<th scope="col">No results found</th>`;
  }
}
