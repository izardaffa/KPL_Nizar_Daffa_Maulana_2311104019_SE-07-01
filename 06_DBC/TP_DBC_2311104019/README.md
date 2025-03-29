# TP_DBC_2311104019

### Kode Awal

```js
class SayaTubeVideo {
    constructor(title) {
        // Precondition: Judul video tidak null dan panjang maksimal 200 karakter
        if (title == null || title.length > 200) {
            throw new Error("Title must not be null and must be less than or equal to 200 characters.");
        }

        // Generate random 5-digit ID
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        // Precondition: Play count tidak negatif dan maksimal 25.000.000
        if (count < 0 || count > 25000000) {
            throw new Error("Play count must be between 0 and 25,000,000.");
        }

        // Exception: Pastikan tidak terjadi overflow
        try {
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count overflow.");
            }
            this.playCount += count;
        } catch (error) {
            console.error(error.message);
        }
    }

    PrintVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

// Main function to demonstrate the functionality
function main() {
    try {
        const video = new SayaTubeVideo("Tutorial Design By Contract – Nizar Daffa");

        // Menambahkan play count
        video.IncreasePlayCount(100); // Contoh penambahan play count
        video.IncreasePlayCount(200);

        // Menampilkan detail video
        video.PrintVideoDetails();
    } catch (error) {
        console.error(error.message);
    }
}

// Run the main function
main();
```

Penjelasan:

- Class SayaTubeVideo:
    - Konstruktor menerima parameter title dan memvalidasi agar tidak null dan panjangnya tidak lebih dari 200 karakter.
    - id di-generate secara random sepanjang 5 digit.
    - playCount diinisialisasi dengan nilai 0.
- Method IncreasePlayCount:
    - Menambahkan jumlah play count dengan validasi agar tidak negatif dan tidak lebih dari 25.000.000.
    - Blok try-catch digunakan untuk menangani overflow.
- Method PrintVideoDetails:
    - Mencetak detail video, termasuk id, title, dan playCount.
- Fungsi main:
    - Membuat instance SayaTubeVideo dengan judul "Tutorial Design By Contract – Nizar Daffa".
    - Menambahkan play count menggunakan IncreasePlayCount.
    - Menampilkan detail video menggunakan PrintVideoDetails.

### Output

```bash
Video ID: 97629
Title: Tutorial Design By Contract – Nizar Daffa
Play Count: 300
```

### Kode setelah Implementasi Design by Contract

```js
class SayaTubeVideo {
    constructor(title) {
        // Precondition: Judul video tidak null dan panjang maksimal 100 karakter
        if (title == null || title.length > 100) {
            throw new Error("Title must not be null and must be less than or equal to 100 characters.");
        }

        // Generate random 5-digit ID
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        // Precondition: Play count tidak negatif dan maksimal 10.000.000
        if (count < 0 || count > 10000000) {
            throw new Error("Play count must be between 0 and 10,000,000.");
        }

        // Exception: Pastikan tidak terjadi overflow
        try {
            if (this.playCount + count > Number.MAX_SAFE_INTEGER) {
                throw new Error("Play count overflow.");
            }
            this.playCount += count;
        } catch (error) {
            console.error(error.message);
        }
    }

    PrintVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

// Main function to demonstrate the functionality
function main() {
    try {
        const video = new SayaTubeVideo("Tutorial Design By Contract – Nizar Daffa");

        // Menambahkan play count dengan validasi
        video.IncreasePlayCount(5000000); // Contoh penambahan play count
        video.IncreasePlayCount(3000000);

        // Menampilkan detail video
        video.PrintVideoDetails();

        // Pengujian exception dengan overflow
        console.log("\nTesting overflow exception:");
        for (let i = 0; i < 10; i++) {
            try {
                video.IncreasePlayCount(Number.MAX_SAFE_INTEGER); // Memaksa overflow
            } catch (error) {
                console.error(error.message);
            }
        }
    } catch (error) {
        console.error(error.message);
    }
}

// Run the main function
main();
```

Penjelasan:

- Prekondisi:
    - Judul video divalidasi agar tidak null dan panjangnya maksimal 100 karakter.
    - Input untuk IncreasePlayCount divalidasi agar tidak negatif dan tidak lebih dari 10.000.000.
- Exception:
    - Blok try-catch digunakan untuk menangani overflow pada IncreasePlayCount.
    - Overflow diuji dengan menambahkan nilai Number.MAX_SAFE_INTEGER dalam loop.
- Pengujian:
    - Membuat instance SayaTubeVideo dengan judul "Tutorial Design By Contract – Nizar Daffa".
    - Menambahkan play count dengan nilai valid.
    - Menguji exception dengan memaksa overflow menggunakan loop.

### Output

```bash
Video ID: 40452
Title: Tutorial Design By Contract – Nizar Daffa
Play Count: 8000000

Testing overflow exception:
Play count must be between 0 and 10,000,000.
Play count must be between 0 and 10,000,000.
Play count must be between 0 and 10,000,000.
Play count must be between 0 and 10,000,000.
Play count must be between 0 and 10,000,000.
Play count must be between 0 and 10,000,000.
Play count must be between 0 and 10,000,000.
Play count must be between 0 and 10,000,000.
Play count must be between 0 and 10,000,000.
Play count must be between 0 and 10,000,000.
```
