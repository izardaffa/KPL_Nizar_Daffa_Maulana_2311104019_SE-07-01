# TP_Grammar_Based_Input_Processing_2311104019

### Parsing JSON 1

```js
import fs from 'fs';

function ReadJSON() {
    const filePath = './jurnal7_1_2311104019.json';     
    const jsonData = fs.readFileSync(filePath, 'utf-8');    
    const mahasiswa = JSON.parse(jsonData);
    
    console.log(`[Data Mahasiswa]`);
    console.log(`Name: ${mahasiswa.firstName} ${mahasiswa.lastName}`);
    console.log(`Gender: ${mahasiswa.gender}`);
    console.log(`Age: ${mahasiswa.age} years`);
    console.log(`Address: ${mahasiswa.address.streetAddress}, ${mahasiswa.address.city}, ${mahasiswa.address.state}`);
    console.log(`Courses:`);
    mahasiswa.courses.forEach((course, index) => {
        console.log(`    ${index + 1}. ${course.code} - ${course.name}`);
    });
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
[Data Mahasiswa]
Name: Nizar Daffa Maulana
Gender: male
Age: 20 years
Address: Kembaran Wetan, Purbalingga, Center Java
Courses:
    1. CRI2C4 - Konstruksi Perangkat Lunak
    2. CRI2R2 - Arsitektur dan Desain Perangkat Lunak

```

### Parsing JSON 2

```js
import fs from 'fs';

function ReadJSON() {
    const filePath = './jurnal7_2_2311104019.json';    
    const jsonData = fs.readFileSync(filePath, 'utf-8');    
    const data = JSON.parse(jsonData);
    const members = data.members;
    
    console.log(`Team member list:`);
    members.forEach((member, index) => {
        console.log(`${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`);
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
    - Selanjutnya mengakses properti members dari objek JSON.
    - Terakhir menampilkan informasi dari data members ke konsol menggunakan template literal dengan melakukan iterasi pada setiap elemen menggunakan forEach.

### Output

```bash
Team member list:
2311104019 Nizar Daffa Maulana (20 male)
2311104017 M Faris (20 male)
2311104023 Yoga Eka Pratama (20 male)
2311104020 Raihan Sastra Wibyanto (20 male)
2311104018 Tegar Kang Ageng Gilang (20 male)

```

### Parsing JSON 3

```js
import fs from 'fs';

function ReadJSON() {
    const filePath = './jurnal7_3_2311104019.json';     
    const jsonData = fs.readFileSync(filePath, 'utf-8');    
    const data = JSON.parse(jsonData);
    const glossEntry = data.glossary.GlossDiv.GlossList.GlossEntry;

    console.log("GlossEntry Details:");
    console.log(`ID: ${glossEntry.ID}`);
    console.log(`SortAs: ${glossEntry.SortAs}`);
    console.log(`GlossTerm: ${glossEntry.GlossTerm}`);
    console.log(`Acronym: ${glossEntry.Acronym}`);
    console.log(`Abbreviation: ${glossEntry.Abbrev}`);
    console.log(`Definition: ${glossEntry.GlossDef.para}`);
    console.log(`GlossSeeAlso: ${glossEntry.GlossDef.GlossSeeAlso.join(', ')}`);
    console.log(`GlossSee: ${glossEntry.GlossSee}`);
}

ReadJSON();
```

Penjelasan:

- Mengimpor modul fs (file system) bawaan dari Node.js. Modul ini memungkinkan kita untuk membaca, menulis, dan memanipulasi file di sistem.
- Fungsi bernama ReadJSON untuk membaca file JSON dan menampilkannya ke konsol. Pada fungsi ReadJSON terdapat:
    - Variabel filePath menyimpan path ke file JSON yang akan diparsing.
    - Selanjutnya membaca isi file fs.readFileSync.
    - jsonData (berupa string) di-parse menjadi objek JavaScript dengan JSON.parse().
    - Selanjutnya mengakses properti GlossEntry dari objek JSON.
    - Terakhir menampilkan informasi dari data glossEntry ke konsol menggunakan template literal.

### Output

```bash
GlossEntry Details:
ID: SGML
SortAs: SGML
GlossTerm: Standard Generalized Markup Language
Acronym: SGML
Abbreviation: ISO 8879:1986
Definition: A meta-markup language, used to create markup languages such as DocBook.
GlossSeeAlso: GML, XML
GlossSee: markup

```
