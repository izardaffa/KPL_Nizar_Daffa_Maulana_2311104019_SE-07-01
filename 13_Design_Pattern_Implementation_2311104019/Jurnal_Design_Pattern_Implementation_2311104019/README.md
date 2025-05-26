# Jurnal Desain Pattern Implementation 2311104019

## Menjelaskan Design Pattern Singleton

### A. Berikan salah dua contoh kondisi dimana design pattern “Singleton” dapat digunakan.

Jawaban:

Contoh kondisi penggunaan Singleton:
1. Database Connection Pool: Hanya satu objek koneksi aktif untuk semua transaksi.
2. Logger: Hanya ada satu instance logger global untuk mencatat aktivitas aplikasi.

### B. Berikan penjelasan singkat mengenai langkah-langkah dalam mengimplementasikan design pattern “Singleton”.

Jawaban:

1. Buat class dengan constructor private (atau disimulasikan di JavaScript).
2. Buat static method untuk mengakses instance.
3. Cek apakah instance sudah ada, jika belum buat dan simpan.
4. Kembalikan instance yang sama setiap kali dipanggil.

### C. Berikan tiga kelebihan dan kekurangan dari design pattern “Singleton”.

Jawaban:

Kelebihan:
- Mengontrol akses ke instance.
- Menghemat resource.
- Memastikan hanya satu objek.

Kekurangan:
- Sulit di unit test (harus di reset).
- Menyebabkan tight coupling.
- Tidak cocok untuk lingkungan multi-threading kompleks.

## Implementasi Singleton

Output

```sh

Data dari data2:
Isi Data:
1. Aldo
2. Bagas
3. Candra
4. Dimas
5. Edifier

Data dari data1 setelah penghapusan:
Isi Data:
1. Aldo
2. Bagas
3. Candra
4. Edifier

Jumlah data (data1): 4
Jumlah data (data2): 4

```

PusatDataSingleton.js

```js
class PusatDataSingleton {
  constructor() {
    if (PusatDataSingleton._instance) {
      return PusatDataSingleton._instance;
    }
    this.DataTersimpan = [];
    PusatDataSingleton._instance = this;
  }

  static getInstance() {
    if (!PusatDataSingleton._instance) {
      PusatDataSingleton._instance = new PusatDataSingleton();
    }
    return PusatDataSingleton._instance;
  }

  AddData(input) {
    this.DataTersimpan.push(input);
  }

  DeleteData(index) {
    if (index >= 0 && index < this.DataTersimpan.length) {
      this.DataTersimpan.splice(index, 1);
    }
  }

  GetAllData() {
    return this.DataTersimpan;
  }

  PrintData() {
    console.log("Isi Data:");
    this.DataTersimpan.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

module.exports = PusatDataSingleton;

```

main.js

```js
const PusatDataSingleton = require('./src/PusatDataSingleton');

// A. Ambil instance
const data1 = PusatDataSingleton.getInstance();
const data2 = PusatDataSingleton.getInstance();

// B. Tambah data melalui data1
data1.AddData("Aldo");
data1.AddData("Bagas");
data1.AddData("Candra");
data1.AddData("Dimas");
data1.AddData("Edifier");

// C. Cetak lewat data2 (harus muncul semua data)
console.log("\nData dari data2:");
data2.PrintData();

// D. Hapus "Dimas" via data2
data2.DeleteData(data2.GetAllData().indexOf("Dimas"));

// E. Cetak ulang via data1 ("Dimas" harus hilang)
console.log("\nData dari data1 setelah penghapusan:");
data1.PrintData();

// F. Hitung jumlah data
console.log(`\nJumlah data (data1): ${data1.GetAllData().length}`);
console.log(`Jumlah data (data2): ${data2.GetAllData().length}`);

```
