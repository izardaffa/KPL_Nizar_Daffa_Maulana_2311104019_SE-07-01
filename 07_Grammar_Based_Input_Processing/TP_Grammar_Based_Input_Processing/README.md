# TP_Grammar_Based_Input_Processing_2311104019

### Parsing JSON 1

```js
import fs from 'fs';

function ReadJSON() {
    const filePath = './tp7_1_2311104019.json';     
    const jsonData = fs.readFileSync(filePath, 'utf-8');    
    const mahasiswa = JSON.parse(jsonData);
    
    console.log(`Nama ${mahasiswa.nama.depan} ${mahasiswa.nama.belakang} dengan nim ${mahasiswa.nim} dari fakultas ${mahasiswa.fakultas}.`);
}

ReadJSON();
```

Penjelasan:

- Mengimpor modul fs (file system) bawaan dari Node.js. Modul ini memungkinkan kita untuk membaca, menulis, dan memanipulasi file di sistem.
- Fungsi bernama ReadJSON untuk membaca file JSON dan menampilkannya ke konsol. Pada fungsi ReadJSON terdapat:
    - Variabel filePath menyimpan path ke file JSON yang akan diparsing.
    - Selanjutnya membaca isi file fs.readFileSync. Argumen kedua 'utf-8' digunakan agar isi file dibaca sebagai teks string, bukan dalam bentuk buffer.
    - jsonData (berupa string) di-parse menjadi objek JavaScript dengan JSON.parse().
    - Terakhir menampilkan informasi dari data mahasiswa ke konsol menggunakan template literal.

### Output

```bash
Nama Nizar Daffa Maulana dengan nim 2311104019 dari fakultas informatika.

```

### Parsing JSON 2

```js
import fs from 'fs';

function ReadJSON() {
    const filePath = './tp7_2_2311104019.json';    
    const jsonData = fs.readFileSync(filePath, 'utf-8');    
    const data = JSON.parse(jsonData);
    const courses = data.courses;
    
    courses.forEach((course, index) => {
        console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
    });
}

ReadJSON();
```

Penjelasan:

- Mengimpor modul fs (file system) bawaan dari Node.js. Modul ini memungkinkan kita untuk membaca, menulis, dan memanipulasi file di sistem.
- Fungsi bernama ReadJSON untuk membaca file JSON dan menampilkannya ke konsol. Pada fungsi ReadJSON terdapat:
    - Variabel filePath menyimpan path ke file JSON yang akan diparsing.
    - Selanjutnya membaca isi file fs.readFileSync.
    - jsonData (berupa string) di-parse menjadi objek JavaScript dengan JSON.parse().
    - Selanjutnya mengakses properti courses dari objek JSON.
    - Terakhir menampilkan informasi dari data mahasiswa ke konsol menggunakan template literal dengan melakukan iterasi pada setiap elemen array courses menggunakan forEach.

### Output

```bash
MK 1 CCK2JAC2 - Proyek Tingkat II
MK 2 CCK2KAB4 - Konstruksi Perangkat Lunak
MK 3 CCK2HAB4 - Basis Data
MK 4 CCK2FAB4 - Arsitektur dan Desain Perangkat Lunak
MK 5 CCK2KAB4 - Konstruksi Perangkat Lunak
MK 6 CCK2FAB4 - Arsitektur dan Desain Perangkat Lunak
MK 7 CCK1KAB3 - Rekayasa Kebutuhan Perangkat Lunak
MK 8 CCK2HAB4 - Basis Data
MK 9 CCK2GAB3 - Interaksi Manusia Komputer
MK 10 CCK2CAB3 - Pemodelan Perangkan Lunak

```
