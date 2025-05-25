const readline = require('readline');
const { tandaBilangan } = require('./src/tandaBilangan');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Masukkan angka: ', (input) => {
  const angka = parseInt(input);
  if (isNaN(angka)) {
    console.log("Input tidak valid");
  } else {
    console.log("Tanda bilangan:", tandaBilangan(angka));
  }
  rl.close();
});
