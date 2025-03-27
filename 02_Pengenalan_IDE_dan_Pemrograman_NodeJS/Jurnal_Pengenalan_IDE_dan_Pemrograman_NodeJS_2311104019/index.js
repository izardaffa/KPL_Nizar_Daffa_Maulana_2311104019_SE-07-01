const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama Anda: ", (nama) => {
    console.log(`Selamat datang, ${nama}!`);

    const array = Array.from({ length: 50 }, (_, index) => index);
    array.forEach((value) => {
        if (value % 2 === 0 && value % 3 === 0) {
            console.log(`${value} #$#$`);
        } else if (value % 2 === 0) {
            console.log(`${value} ##`);
        } else if (value % 3 === 0) {
            console.log(`${value} $$`);
        } else {
            console.log(value);
        }
    });

    rl.question("Masukkan angka (1-10000): ", (nilaiString) => {
        const nilaiInt = parseInt(nilaiString, 10);

        if (isNaN(nilaiInt) || nilaiInt < 1 || nilaiInt > 10000) {
            console.log("Input tidak valid. Masukkan angka antara 1 sampai 10000.");
        } else {
            if (isPrime(nilaiInt)) {
                console.log(`Angka ${nilaiInt} merupakan bilangan prima`);
            } else {
                console.log(`Angka ${nilaiInt} bukan merupakan bilangan prima`);
            }
        }

        rl.close();
    });
});

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}