# Jurnal_OOP_2311104019

## Teknik Table Driven

### Class KodeBuah

```js
class KodeBuah {
    constructor() {
        this.kodeBuah = {
            "Apel": "A00",
            "Aprikot": "B00",
            "Alpukat": "C00",
            "Pisang": "D00",
            "Paprika": "E00",
            "Kurma": "K00",
            "Durian": "L00",
            "Anggur": "M00",
            "Melon": "N00",
            "Semangka": "O00"
        };
    }

    getKodeBuah(namaBuah) {
        return this.kodeBuah[namaBuah] || "Kode tidak ditemukan";
    }
}
```

Penjelasan:

- Class `KodeBuah` memiliki konstruktor yang menginisialisasi property `kodeBuah` sebagai objek yang berisi pasangan nama buah dan kode buahnya.
- `kodeBuah` adalah objek yang menyimpan nama buah sebagai kunci dan kode buah sebagai nilai.
- Method `getKodeBuah` menerima parameter `namaBuah` dan mengembalikan kode buah yang sesuai dari objek `kodeBuah`.
- Jika nama buah tidak ditemukan dalam objek `kodeBuah`, method ini mengembalikan string "Kode tidak ditemukan".

### Contoh Penggunaan

```js
const kodeBuah = new KodeBuah;
console.log('Kode buah Apel:', kodeBuah.getKodeBuah('Apel'));
console.log('Kode buah Pisang:', kodeBuah.getKodeBuah('Pisang'));
```

### Output

```bash
Kode buah Apel: A00
Kode buah Pisang: D00
```

## Teknik State-Based Construction

### Class PosisiKarakterGame

```js
class PosisiKarakterGame {
    constructor() {
        this.state = "Berdiri";
    }

    ubahState(aksi) {
        switch (aksi) {
            case "TombolS":
                console.log("Tombol arah bawah ditekan");
                break;
            case "TombolW":
                console.log("Tombol arah atas ditekan");
                break;
            case "Tengkurap":
                console.log("Posisi istirahat");
                break;
            case "Terbang":
                console.log("Posisi take off");
                this.state = "Terbang";
                break;
            case "Jongkok":
                if (this.state === "Terbang") {
                    console.log("Posisi landing");
                }
                this.state = "Jongkok";
                break;
            default:
                console.log("Aksi tidak dikenali");
        }
    }
}
```

Penjelasan:

- Class `PosisiKarakterGame` memiliki konstruktor yang menginisialisasi property `state` dengan nilai awal "Berdiri".
- `state` adalah property yang menyimpan posisi atau keadaan karakter saat ini.
- Method `ubahState` menerima parameter `aksi` dan mengubah `state` karakter berdasarkan nilai `aksi` menggunakan struktur `switch`.
- Jika `aksi` adalah "TombolS", mencetak "Tombol arah bawah ditekan".
- Jika `aksi` adalah "TombolW", mencetak "Tombol arah atas ditekan".
- Jika `aksi` adalah "Tengkurap", mencetak "Posisi istirahat".
- Jika `aksi` adalah "Terbang", mencetak "Posisi take off" dan mengubah state menjadi "Terbang".
- Jika `aksi` adalah "Jongkok" dan `state` saat ini adalah "Terbang", mencetak "Posisi landing". Kemudian, mengubah `state` menjadi "Jongkok".
- Jika `aksi` tidak dikenali, mencetak "Aksi tidak dikenali".

### Contoh Penggunaan

```js
const game = new PosisiKarakterGame();
game.ubahState("TombolS");
game.ubahState("TombolW");
game.ubahState("Terbang");
game.ubahState("Jongkok");
```

### Output

```bash
Tombol arah bawah ditekan
Tombol arah atas ditekan
Posisi take off
Posisi landing
```
