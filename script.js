import { fetchUsersData } from "./api.js";

const dataObj = await fetchUsersData();

const userData = dataObj.data;
const emails = dataObj.emails;
const names = dataObj.names;
const usernames = dataObj.usernames;
// console.log(emails, names, usernames, userData);

let counter = 1;
let tableDisplay = document.getElementById("table-display")

const displayDefaultInfo = (userData) => {
 userData.forEach( data => {
 const name = data.name;
 const email = data.email;
 const username = data.username;
 tableDisplay.innerHTML += `<tr>
 <th scope="row">${counter}</th>
 <td>${name}</td>
 <td>${username}</td>
 <td>${email}</td>
</tr>`
counter ++
 });
};

displayDefaultInfo(userData);

