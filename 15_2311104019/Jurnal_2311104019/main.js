const readline = require('readline-sync');
const { register, login } = require('./src/auth.js');

console.log("1. Register");
console.log("2. Login");
const pilihan = readline.question("Pilih: ");

const username = readline.question("Username: ");
const password = readline.question("Password: ", { hideEchoBack: true });

let result;
if (pilihan === "1") {
  result = register(username, password);
} else if (pilihan === "2") {
  result = login(username, password);
} else {
  result = "Pilihan tidak valid.";
}

console.log(result);
