import { fetchUsersData } from "./api.js";
export { displayUserInfo };

const dataObj = await fetchUsersData();
const userData = dataObj.data;
const ids = dataObj.ids;

let counter = 1;
let tableDisplay = document.getElementById("table-display");
let currentDipsplay = document.getElementById("current-display");
const filterByName = document.getElementById("name");
const filterByUsername = document.getElementById("username");
const filterByEmail = document.getElementById("email");
const showAll = document.getElementById("show-all");
const searchBar = document.getElementById("searchBar");

const displayNames = (userData) => {
  filterByName.addEventListener("click", () => {
    counter = 1;
    tableDisplay.innerHTML = "";
    currentDipsplay.innerHTML = `<th scope="col"></th>
                                      <th scope="col">Name</th>`;
    userData.forEach((data) => {
      tableDisplay.innerHTML += `<tr id="name-${data.id}">
            <th scope="row">${counter}</th>
            <td>${data.name}</td>
            </tr>`;
      counter++;
    });
  });
};

const displayUsernames = (userData) => {
  filterByUsername.addEventListener("click", () => {
    counter = 1;
    tableDisplay.innerHTML = "";
    currentDipsplay.innerHTML = `<th scope="col"></th>
                                      <th scope="col">Username</th>`;
    userData.forEach((data) => {
      tableDisplay.innerHTML += `<tr id="username-${data.id}">
              <th scope="row">${counter}</th>
              <td>${data.username}</td>
              </tr>`;
      counter++;
    });
  });
};

const displayEmails = (userData) => {
  filterByEmail.addEventListener("click", () => {
    counter = 1;
    tableDisplay.innerHTML = "";
    currentDipsplay.innerHTML = `<th scope="col"></th>
                                      <th scope="col">Email</th>`;
    userData.forEach((data) => {
      tableDisplay.innerHTML += `<tr id="mail-${data.id}">
                <th scope="row">${counter}</th>
                <td>${data.email}</td>
        </tr>`;
      counter++;
    });
  });
};

const filterUserData = (ids) => {
  ids.forEach((id) => {
    let trId = document.getElementById(`tr-${id}`);
    console.log(trId);
  });
};

const displayUserInfo = (userData) => {
  userData.forEach((data) => {
    const name = data.name;
    const email = data.email;
    const username = data.username;
    const id = data.id;
    currentDipsplay.innerHTML = `<th scope="col"></th>
    <th scope="col">Name</th>
    <th scope="col">Username</th>
    <th scope="col">Email</th>`
    tableDisplay.innerHTML += `<tr id="tr-${id}">
 <th scope="row">${counter}</th>
 <td>${name}</td>
 <td>${username}</td>
 <td>${email}</td>
 </tr>`;
    counter++;
  });
  displayNames(userData);
  displayUsernames(userData);
  displayEmails(userData);
  filterUserData(ids);
};

displayUserInfo(userData);

showAll.addEventListener("click", () => {
  counter = 1;
  tableDisplay.innerHTML = "";
  displayUserInfo(userData);
});
