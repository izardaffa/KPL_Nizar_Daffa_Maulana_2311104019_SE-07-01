# TP_Generics_2311104019

## Generic Method

### Class HaloGeneric

```js
class HaloGeneric {
    SapaUser(user) {
        console.log(`Halo user ${user}`);
    }
}
```

Penjelasan:

Method `SapaUser` menerima parameter `user` dan mencetak pesan "Halo user X" di mana X adalah nilai dari parameter `user`.

### Contoh Penggunaan

```js
const halo = new HaloGeneric();
halo.SapaUser("Nizar");
```

Contoh penggunaan membuat instance dari `HaloGeneric` dan memanggil method `SapaUser` untuk mencetak pesan "Halo user X".

### Output

```bash
Halo user Nizar
```

## Generics Class

### Class DataGeneric

```js
class DataGeneric {
    data;

    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}
```

Penjelasan:

- Property `data` digunakan untuk menyimpan data.
- Konstruktor `DataGeneric` menerima parameter `data` dan menginisialisasi property `data`.
- Method `PrintData` mencetak pesan "Data yang tersimpan adalah: Y" di mana Y adalah nilai dari property `data`.

### Contoh Penggunaan

```js
const dataGeneric = new DataGeneric(2311104019);
dataGeneric.PrintData();
```

Contoh penggunaan membuat instance dari `DataGeneric` dan mengisi `data` dengan NIM, kemudian memanggil method `PrintData` untuk mencetak data yang tersimpan.

### Output

```bash
Data yang tersimpan adalah: 2311104019
```
