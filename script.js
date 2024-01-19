import { fetchUsersData } from "./api.js";

const dataObj = await fetchUsersData();

const userData = dataObj.data;
const emails = dataObj.emails;
const names = dataObj.names;
const usernames = dataObj.usernames;
console.log(emails, names, usernames, userData);
let counter = 1;
let tableDisplay = document.getElementById("table-display");
const filterByName = document.getElementById("name");
const filterByUsername = document.getElementById("username");
const filterByEmail = document.getElementById("email");
const showAll = document.getElementById("show-all");


const displayNames = (names) => {
    filterByName.addEventListener("click", () => {
        counter = 1;
        tableDisplay.innerHTML = "";
        names.forEach((name) => {
            tableDisplay.innerHTML += `<tr>
            <th scope="row">${counter}</th>
            <td>${name}</td>
            </tr>`;
            counter++;
        });
    });
  };

  
  const displayUsernames = (usernames) => {
      filterByUsername.addEventListener("click", () => {
          counter = 1;
          tableDisplay.innerHTML = "";
          usernames.forEach((username) => {
              tableDisplay.innerHTML += `<tr>
              <th scope="row">${counter}</th>
              <td>${username}</td>
              </tr>`;
              counter++;
            });
        });
    };
    
    
    const displayEmails = (emails) => {
        filterByEmail.addEventListener("click", () => {
            counter = 1;
            tableDisplay.innerHTML = "";
            emails.forEach((email) => {
                tableDisplay.innerHTML += `<tr>
                <th scope="row">${counter}</th>
                <td>${email}</td>
        </tr>`;
        counter++;
      });
    });
};


const displayUserInfo = (userData) => {
  userData.forEach((data) => {
    const name = data.name;
    const email = data.email;
    const username = data.username;
    tableDisplay.innerHTML += `<tr>
 <th scope="row">${counter}</th>
 <td>${name}</td>
 <td>${username}</td>
 <td>${email}</td>
</tr>`;
    counter++;
  });
  displayNames(names);
  displayUsernames(usernames);
  displayEmails(emails);
};

displayUserInfo(userData);
showAll.addEventListener("click", () => {
    counter = 1;
    tableDisplay.innerHTML = "";
    displayUserInfo(userData);
  });
  