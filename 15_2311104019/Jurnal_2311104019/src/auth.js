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
