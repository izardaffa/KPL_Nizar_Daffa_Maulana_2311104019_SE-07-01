# Jurnal_Generics_2311104019

## Implementasi Generics Method

### Class Penjumlahan

```js
class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
        let hasil = 0;
        hasil = a + b + c;
        return hasil;
    }
}
```

Penjelasan:

- Class Penjumlahan dibuat dengan method generik `JumlahTigaAngka` yang menerima tiga parameter.
- Method `JumlahTigaAngka` menjumlahkan ketiga parameter dan mengembalikan hasilnya.

### Contoh Penggunaan

```js
const penjumlahan = new Penjumlahan();
const hasil = penjumlahan.JumlahTigaAngka(231, 110, 4019);
console.log(`Hasil penjumlahan: ${hasil}`);
```

Contoh penggunaan method `JumlahTigaAngka` dengan tiga angka yaitu 231, 110, dan 4019.

### Output

```bash
Hasil penjumlahan: 4360
```

## Implementasi Generics Class

### Class SimpleDatabase

```js
class SimpleDataBase {
    storedData = [];
    inputDates = [];

    constructor() {}

    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date());
    }

    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index].toUTCString()}`);
        });
    }
}
```

Penjelasan:

- `storedData` adalah array yang digunakan untuk menyimpan data yang ditambahkan.
- `inputDates` adalah array yang digunakan untuk menyimpan tanggal dan waktu saat data ditambahkan.
- Konstruktor `SimpleDataBase` adalah fungsi yang dipanggil saat instance dari class ini dibuat. Pada kode ini, konstruktor tidak melakukan inisialisasi tambahan.
- Method `AddNewData` menerima satu parameter data dan menambahkannya ke array `storedData`.
- Method ini juga menambahkan tanggal dan waktu saat data ditambahkan ke array `inputDates` menggunakan `new Date()`.
- Method `PrintAllData` mencetak semua data yang tersimpan di `storedData` beserta waktu penyimpanannya dalam format UTC.
- Method ini menggunakan `forEach` untuk mengiterasi setiap elemen di `storedData` dan mencetak data beserta waktu penyimpanannya.

### Contoh Penggunaan

```js
const database = new SimpleDataBase();
database.AddNewData(231);
database.AddNewData(110);
database.AddNewData(4019);
database.PrintAllData();
```

Contoh penggunaan menambahkan tiga data bertipe `number` dan memanggil `PrintAllData` untuk mencetak hasilnya.

### Output

```bash
Data 1 berisi: 12, yang disimpan pada waktu UTC: Sun, 23 Mar 2025 14:13:13 GMT
Data 2 berisi: 34, yang disimpan pada waktu UTC: Sun, 23 Mar 2025 14:13:13 GMT
Data 3 berisi: 56, yang disimpan pada waktu UTC: Sun, 23 Mar 2025 14:13:13 GMT
```
