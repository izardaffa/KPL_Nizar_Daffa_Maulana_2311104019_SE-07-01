# Jurnal 15

## Kode

`utils.js`

```js
const bcrypt = require('bcrypt');

/**
 * Validasi username hanya huruf ASCII, panjang 3-20
 */
function validateUsername(username) {
  return /^[a-zA-Z]+$/.test(username) && username.length >= 3 && username.length <= 20;
}

/**
 * Validasi password: min 8, max 20, ada simbol, dan tidak mengandung username
 */
function validatePassword(password, username) {
  const hasSymbol = /[!@#$%^&*]/.test(password);
  const notContainUsername = !password.toLowerCase().includes(username.toLowerCase());
  return password.length >= 8 && password.length <= 20 && hasSymbol && notContainUsername;
}

/**
 * Hash password menggunakan bcrypt
 */
function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

/**
 * Cek password hash
 */
function checkPassword(password, hashed) {
  return bcrypt.compareSync(password, hashed);
}

module.exports = {
  validateUsername,
  validatePassword,
  hashPassword,
  checkPassword
};

```

`auth.js`

```js
const fs = require('fs');
const path = require('path');
const {
  validateUsername,
  validatePassword,
  hashPassword,
  checkPassword
} = require('./utils.js');

const DB_PATH = path.join(__dirname, '../data/users.json');

function loadUsers() {
  if (!fs.existsSync(DB_PATH)) return [];
  return JSON.parse(fs.readFileSync(DB_PATH));
}

function saveUsers(users) {
  fs.writeFileSync(DB_PATH, JSON.stringify(users, null, 2));
}

function register(username, password) {
  if (!validateUsername(username)) {
    return 'Username tidak valid.';
  }
  if (!validatePassword(password, username)) {
    return 'Password tidak valid.';
  }

  const users = loadUsers();
  if (users.find(u => u.username === username)) {
    return 'Username sudah terdaftar.';
  }

  const hashed = hashPassword(password);
  users.push({ username, password: hashed });
  saveUsers(users);

  return 'Registrasi berhasil.';
}

function login(username, password) {
  const users = loadUsers();
  const user = users.find(u => u.username === username);
  if (!user) return 'Username tidak ditemukan.';

  const valid = checkPassword(password, user.password);
  return valid ? 'Login berhasil!' : 'Password salah.';
}

module.exports = { register, login };

```

`main.js`

```js
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

```

## Hasil

Isi file `users.json` ketika project baru dibuat.

```js
[]
```

Isi file `users.json` setelah saya mencoba menjalankan program.

```js
[
  {
    "username": "admin",
    "password": "$2b$10$z/uGCQwoIMgo3Yu3MrxTWOWyfiLJKzfnZ1lqsizggtC2IkSohbHvq" // nimda1234#
  }
]
```
