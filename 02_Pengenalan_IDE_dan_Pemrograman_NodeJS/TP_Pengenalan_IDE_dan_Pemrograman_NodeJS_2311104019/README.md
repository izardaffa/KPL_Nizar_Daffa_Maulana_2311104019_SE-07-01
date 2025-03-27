# TP_Pengenalan_IDE_dan_Pemrograman_NodeJS_2311104019

### Cek input huruf vokal

```js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan satu huruf: ", (huruf) => {
    if (huruf.length !== 1 || !/^[A-Z]$/.test(huruf)) {
        console.log("Input tidak valid. Masukkan satu huruf kapital (A-Z).");
    } else {
        const vokal = ['A', 'I', 'U', 'E', 'O'];
        if (vokal.includes(huruf)) {
            console.log(`Huruf ${huruf} merupakan huruf vokal`);
        } else {
            console.log(`Huruf ${huruf} merupakan huruf konsonan`);
        }
    }
...
```

Penjelasan:

- Program meminta input satu huruf dari user menggunakan `readline`.
- Program mengecek apakah input valid (satu huruf) menggunakan regex `!/^[A-Z]$/`.
- Jika huruf merupakan huruf vokal A, I, U, E, atau O, maka program akan menampilkan pesan "Huruf [huruf] merupakan huruf vokal", jika huruf bukan huruf vokal, maka program akan menampilkan pesan "Huruf [huruf] merupakan huruf konsonan".

### Iterasi elemen array

```js
...
    const bilanganGenap = [2, 4, 6, 8, 10];
    bilanganGenap.forEach((angka, index) => {
        console.log(`Angka genap ${index + 1} : ${angka}`);
    });
...
```

Penjelasan:

- Membuat array `bilanganGenap` yang berisi 5 bilangan genap (2, 4, 6, 8, 10).
- Melakukan iterasi pada array menggunakan forEach dan mencetak elemen dengan `console.log()`.

### Output

```bash
Masukkan satu huruf: Z
Huruf Z merupakan huruf konsonan
Angka genap 1 : 2
Angka genap 2 : 4
Angka genap 3 : 6
Angka genap 4 : 8
Angka genap 5 : 10
```
