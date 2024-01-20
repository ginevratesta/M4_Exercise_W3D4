import { fetchUsersData } from "./api.js";

const userData = await fetchUsersData();

let counter = 1;
let tableDisplay = document.getElementById("table-display");
let currentDipsplay = document.getElementById("current-display");
const filterByName = document.getElementById("name");
const filterByUsername = document.getElementById("username");
const filterByEmail = document.getElementById("email");
const showAll = document.getElementById("show-all");
const searchBar = document.getElementById("search-bar");

const displayNames = (userData) => {
  filterByName.addEventListener("click", () => {
    counter = 1;
    tableDisplay.innerHTML = "";
    currentDipsplay.innerHTML = `<th scope="col">Name</th>`;
    userData.forEach((data) => {
      tableDisplay.innerHTML += `<tr>
            <th scope="row">${counter}</th>
            <td class="name-element">${data.name}</td>
            </tr>`;
      counter++;
    });
  });
};

const displayUsernames = (userData) => {
  filterByUsername.addEventListener("click", () => {
    counter = 1;
    tableDisplay.innerHTML = "";
    currentDipsplay.innerHTML = `<th scope="col">Username</th>`;
    userData.forEach((data) => {
      tableDisplay.innerHTML += `<tr>
              <th scope="row">${counter}</th>
              <td class="username-element">${data.username}</td>
              </tr>`;
      counter++;
    });
  });
};

const displayEmails = (userData) => {
  filterByEmail.addEventListener("click", () => {
    counter = 1;
    tableDisplay.innerHTML = "";
    currentDipsplay.innerHTML = `<th scope="col">Email</th>`;
    userData.forEach((data) => {
      tableDisplay.innerHTML += `<tr>
                <th scope="row">${counter}</th>
                <td class="email-element">${data.email}</td>
        </tr>`;
      counter++;
    });
  });
};

const displayUserInfo = (userData) => {
  userData.forEach((data) => {
    currentDipsplay.innerHTML = `<th scope="col"></th>
    <th scope="col">Name</th>
    <th scope="col">Username</th>
    <th scope="col">Email</th>`;
    tableDisplay.innerHTML += `<tr>
 <th scope="row">${counter}</th>
 <td class="row-name-element">${data.name}</td>
 <td class="row-username-element">${data.username}</td>
 <td class="row-email-element">${data.email}</td>
 </tr>`;
    counter++;
  });
  displayNames(userData);
  displayUsernames(userData);
  displayEmails(userData);
};

displayUserInfo(userData);

showAll.addEventListener("click", () => {
  counter = 1;
  tableDisplay.innerHTML = "";
  displayUserInfo(userData);
});



searchBar.addEventListener("keyup", () => {
  let tableRows = [...tableDisplay.querySelectorAll("tr")];
  let resultsFound = false;

  tableRows.forEach((el) => {
    const name = el.querySelector(".name-element").innerText.toLowerCase();

    if (
      name.includes(searchBar.value.toLowerCase())
    ) {
      el.style.display = "block";
      resultsFound = true;
    } else {
      el.style.display = "none";
    }
  });

  if (resultsFound) {
    currentDipsplay.innerHTML = `<th scope="col">Results:</th>`;
  } else {
    currentDipsplay.innerHTML = `<th scope="col">No results found</th>`;
  }
});

searchBar.addEventListener("keyup", () => {
  let tableRows = [...tableDisplay.querySelectorAll("tr")];
  let resultsFound = false;

  tableRows.forEach((el) => {
    const username = el.querySelector(".username-element").innerText.toLowerCase();

    if (
      username.includes(searchBar.value.toLowerCase())
    ) {
      el.style.display = "block";
      resultsFound = true;
    } else {
      el.style.display = "none";
    }
  });

  if (resultsFound) {
    currentDipsplay.innerHTML = `<th scope="col">Results:</th>`;
  } else {
    currentDipsplay.innerHTML = `<th scope="col">No results found</th>`;
  }
});

searchBar.addEventListener("keyup", () => {
  let tableRows = [...tableDisplay.querySelectorAll("tr")];
  let resultsFound = false;

  tableRows.forEach((el) => {
    const email = el.querySelector(".email-element").innerText.toLowerCase();

    if (
      email.includes(searchBar.value.toLowerCase())
    ) {
      el.style.display = "block";
      resultsFound = true;
    } else {
      el.style.display = "none";
    }
  });

  if (resultsFound) {
    currentDipsplay.innerHTML = `<th scope="col">Results:</th>`;
  } else {
    currentDipsplay.innerHTML = `<th scope="col">No results found</th>`;
  }
});


    

searchBar.addEventListener("keyup", () => {
  let tableRows = [...tableDisplay.querySelectorAll("tr")];
  let resultsFound = false;

  tableRows.forEach((el) => {
    const name = el.querySelector(".row-name-element").innerText.toLowerCase();
    const username = el.querySelector(".row-username-element").innerText.toLowerCase();
    const email = el.querySelector(".row-email-element").innerText.toLowerCase();

    if (
      name.includes(searchBar.value.toLowerCase()) ||
      username.includes(searchBar.value.toLowerCase()) ||
      email.includes(searchBar.value.toLowerCase())
    ) {
      el.style.display = "block";
      resultsFound = true;
    } else {
      el.style.display = "none";
    }
  });

  if (resultsFound) {
    currentDipsplay.innerHTML = `<th scope="col">Results:</th>`;
  } else {
    currentDipsplay.innerHTML = `<th scope="col">No results found</th>`;
  }
});

