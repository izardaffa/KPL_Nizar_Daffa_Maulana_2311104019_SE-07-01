# TP_OOP_2311104019

## Teknik Table Driven

### Class KodePos

```js
class KodePos {
    constructor() {
        this.kodePos = {
            "Batununggal": 40266,
            "Kujangsari": 40287,
            "Mengger": 40267,
            "Wates": 40256,
            "Cijaura": 40287,
            "Jatisari": 40286,
            "Margasari": 40286,
            "Sekejati": 40286,
            "Kebonwaru": 40272,
            "Maleer": 40274,
            "Samoja": 40273
        }
    }

    getKodePos(kelurahan) {
        return this.kodePos[kelurahan] || "Kode Pos tidak ditemukan"
    }
}
```

Penjelasan:

- Class `KodePos` memiliki konstruktor yang menginisialisasi property `kodePos` sebagai objek yang berisi pasangan nama kelurahan dan kode posnya.
- `kodePos` adalah objek yang menyimpan nama kelurahan sebagai kunci dan kode pos sebagai nilai.
- Method `getKodePos` menerima parameter kelurahan dan mengembalikan kode pos yang sesuai dari objek `kodePos`.
- Jika nama kelurahan tidak ditemukan dalam objek `kodePos`, method ini mengembalikan string "Kode Pos tidak ditemukan".

### Contoh Penggunaan

```js
const kodePos = new KodePos()
console.log("Kode Pos Batununggal:", kodePos.getKodePos("Batununggal"))
console.log("Kode Pos Maleer:", kodePos.getKodePos("Maleer"))
console.log("Kode Pos Kaligondang:", kodePos.getKodePos("Kaligondang"))
```

### Output

```bash
Kode Pos Batununggal: 40266
Kode Pos Maleer: 40274
Kode Pos Kaligondang: Kode Pos tidak ditemukan
```

## Teknik State-Based Construction

### Class DoorMachine

```js
class DoorMachine {
    constructor() {
        this.state = "Terkunci";
    }

    unlock() {
        if (this.state === "Terkunci") {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        }
    }

    lock() {
        if (this.state === "Terbuka") {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        }
    }
}
```

Penjelasan:

- Class `DoorMachine` memiliki konstruktor yang menginisialisasi property `state` dengan nilai awal "Terkunci".
- `state` adalah property yang menyimpan status pintu saat ini.
- Method `unlock` mengubah status pintu dari "Terkunci" menjadi "Terbuka" jika status saat ini adalah "Terkunci".
- Jika status pintu berubah menjadi "Terbuka", method ini mencetak pesan "Pintu tidak terkunci" ke konsol.
- Method `lock` mengubah status pintu dari "Terbuka" menjadi "Terkunci" jika status saat ini adalah "Terbuka".
- Jika status pintu berubah menjadi "Terkunci", method ini mencetak pesan "Pintu terkunci" ke konsol.

### Contoh Penggunaan

```js
const door = new DoorMachine()
door.lock()
door.unlock()
door.lock()
```

### Output

```bash
Pintu tidak terkunci
Pintu terkunci
```
