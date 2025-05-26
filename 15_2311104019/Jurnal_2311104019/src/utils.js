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
