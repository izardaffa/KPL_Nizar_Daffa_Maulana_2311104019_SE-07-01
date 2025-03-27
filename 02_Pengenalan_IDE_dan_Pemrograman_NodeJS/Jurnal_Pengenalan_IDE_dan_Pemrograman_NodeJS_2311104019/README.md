# Jurnal_Pengenalan_IDE_dan_Pemrograman_NodeJS_2311104019

### Menerima input nama praktikan

```js
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Masukkan nama Anda: ", (nama) => {
    console.log(`Selamat datang, ${nama}!`);
...
```

Penjelasan:

- `readline` digunakan untuk membaca input dari pengguna.
- `rl.question()` meminta pengguna memasukkan nama.
- Setelah pengguna mengetikkan namanya, program mencetak "Selamat datang, `nama`!".

### Melakukan print array 50 element dengan aturan khusus

```js
...
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
...
```

Penjelasan:

- `Array.from({ length: 50 }, (_, index) => index)` membuat array dari 0 sampai 49 (50 element).
- Perulangan `forEach` untuk mencetak array dengan aturan khusus.

### Menerima input angka (1-10000), lalu melakukan pengecekkan apakah input merupakan bilangan prima

```js
...
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

...

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
```

Penjelasan:

- Pengguna diminta memasukkan angka (1-10000).
- `parseInt()` mengubah input string menjadi bilangan bulat.
- Jika input tidak valid, program akan menampilkan pesan error.
- Jika valid, program akan mengecek apakah angka tersebut bilangan prima menggunakan fungsi `isPrime(number)`.

### Output

```bash
Masukkan nama Anda: Nizar
Selamat datang, Nizar!
0 #$#$
1
2 ##
3 $$
4 ##
5
6 #$#$
7
8 ##
9 $$
10 ##
11
12 #$#$
13
14 ##
15 $$
16 ##
17
18 #$#$
19
20 ##
21 $$
22 ##
23
24 #$#$
25
26 ##
27 $$
28 ##
29
30 #$#$
31
32 ##
33 $$
34 ##
35
36 #$#$
37
38 ##
39 $$
40 ##
41
42 #$#$
43
44 ##
45 $$
46 ##
47
48 #$#$
49
Masukkan angka (1-10000): 5
Angka 5 merupakan bilangan prima
```
