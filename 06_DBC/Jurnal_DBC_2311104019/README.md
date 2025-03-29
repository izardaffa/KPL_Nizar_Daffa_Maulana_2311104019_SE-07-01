# Jurnal_DBC_2311104019

### Kode Awal

```js
class SayaTubeVideo {
    constructor(title) {
        // Generate random 5-digit ID
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.title = title;
        this.playCount = 0;
    }

    IncreasePlayCount(count) {
        if (count < 0) {
            throw new Error("Play count cannot be negative");
        }
        this.playCount += count;
    }

    PrintVideoDetails() {
        console.log(`Video ID: ${this.id}`);
        console.log(`Title: ${this.title}`);
        console.log(`Play Count: ${this.playCount}`);
    }
}

class SayaTubeUser {
    constructor(username) {
        this.id = Math.floor(10000 + Math.random() * 90000);
        this.Username = username;
        this.uploadedVideos = [];
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    AddVideo(video) {
        if (!(video instanceof SayaTubeVideo)) {
            throw new Error("Invalid video object");
        }
        this.uploadedVideos.push(video);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.Username}`);
        this.uploadedVideos.forEach((video, index) => {
            console.log(`Video ${index + 1} judul: ${video.title}`);
        });
    }
}

// Main function to demonstrate the functionality
function main() {
    const user = new SayaTubeUser("Nama_Panggilan_Praktikan");

    const videoTitles = [
        "Review Film Inception oleh Nama_Panggilan_Praktikan",
        "Review Film Interstellar oleh Nama_Panggilan_Praktikan",
        "Review Film The Dark Knight oleh Nama_Panggilan_Praktikan",
        "Review Film Parasite oleh Nama_Panggilan_Praktikan",
        "Review Film Whiplash oleh Nama_Panggilan_Praktikan",
        "Review Film The Godfather oleh Nama_Panggilan_Praktikan",
        "Review Film Pulp Fiction oleh Nama_Panggilan_Praktikan",
        "Review Film Fight Club oleh Nama_Panggilan_Praktikan",
        "Review Film Forrest Gump oleh Nama_Panggilan_Praktikan",
        "Review Film The Matrix oleh Nama_Panggilan_Praktikan"
    ];

    videoTitles.forEach(title => {
        const video = new SayaTubeVideo(title);
        video.IncreasePlayCount(Math.floor(Math.random() * 1000)); // Simulate random play count
        user.AddVideo(video);
    });

    user.PrintAllVideoPlaycount();
    console.log(`Total Play Count: ${user.GetTotalVideoPlayCount()}`);
}

// Run the main function
main();
```

Penjelasan:

- Class SayaTubeVideo:
    - Konstruktor menerima parameter title dan menginisialisasi id secara random (5 digit) serta playCount dengan nilai 0.
    - Method IncreasePlayCount menambahkan jumlah play count dengan validasi agar tidak negatif.
    - Method PrintVideoDetails mencetak detail video.
- Class SayaTubeUser:
    - Konstruktor menerima parameter username dan menginisialisasi id secara random serta uploadedVideos sebagai list kosong.
    - Method GetTotalVideoPlayCount menghitung total play count dari semua video.
    - Method AddVideo menambahkan video ke dalam list dengan validasi tipe.
    - Method PrintAllVideoPlaycount mencetak semua judul video yang diunggah.
- Fungsi main:
    - Membuat instance SayaTubeUser dengan nama panggilan praktikan.
    - Membuat 10 video dengan judul sesuai format yang diminta.
    - Menambahkan video ke user dan mencetak semua video beserta total play count.

### Output

```bash
User: Nama_Panggilan_Praktikan
Video 1 judul: Review Film Inception oleh Nama_Panggilan_Praktikan
Video 2 judul: Review Film Interstellar oleh Nama_Panggilan_Praktikan
Video 3 judul: Review Film The Dark Knight oleh Nama_Panggilan_Praktikan
Video 4 judul: Review Film Parasite oleh Nama_Panggilan_Praktikan
Video 5 judul: Review Film Whiplash oleh Nama_Panggilan_Praktikan
Video 6 judul: Review Film The Godfather oleh Nama_Panggilan_Praktikan
Video 7 judul: Review Film Pulp Fiction oleh Nama_Panggilan_Praktikan
Video 8 judul: Review Film Fight Club oleh Nama_Panggilan_Praktikan
Video 9 judul: Review Film Forrest Gump oleh Nama_Panggilan_Praktikan
Video 10 judul: Review Film The Matrix oleh Nama_Panggilan_Praktikan
Total Play Count: 4160
```

### Kode setelah Implementasi Design by Contract

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

class SayaTubeUser {
    constructor(username) {
        // Precondition: Username tidak null dan panjang maksimal 100 karakter
        if (username == null || username.length > 100) {
            throw new Error("Username must not be null and must be less than or equal to 100 characters.");
        }

        this.id = Math.floor(10000 + Math.random() * 90000);
        this.Username = username;
        this.uploadedVideos = [];
    }

    GetTotalVideoPlayCount() {
        return this.uploadedVideos.reduce((total, video) => total + video.playCount, 0);
    }

    AddVideo(video) {
        // Precondition: Video tidak null dan playCount kurang dari integer maksimum
        if (video == null || video.playCount >= Number.MAX_SAFE_INTEGER) {
            throw new Error("Video must not be null and play count must be less than the maximum integer value.");
        }

        this.uploadedVideos.push(video);
    }

    PrintAllVideoPlaycount() {
        console.log(`User: ${this.Username}`);
        // Postcondition: Maksimal 8 video yang di-print
        const maxVideosToPrint = Math.min(this.uploadedVideos.length, 8);
        for (let i = 0; i < maxVideosToPrint; i++) {
            console.log(`Video ${i + 1} judul: ${this.uploadedVideos[i].title}`);
        }
    }
}

// Main function to demonstrate the functionality
function main() {
    try {
        const user = new SayaTubeUser("Nama_Panggilan_Praktikan");

        const videoTitles = [
            "Review Film Inception oleh Nama_Panggilan_Praktikan",
            "Review Film Interstellar oleh Nama_Panggilan_Praktikan",
            "Review Film The Dark Knight oleh Nama_Panggilan_Praktikan",
            "Review Film Parasite oleh Nama_Panggilan_Praktikan",
            "Review Film Whiplash oleh Nama_Panggilan_Praktikan",
            "Review Film The Godfather oleh Nama_Panggilan_Praktikan",
            "Review Film Pulp Fiction oleh Nama_Panggilan_Praktikan",
            "Review Film Fight Club oleh Nama_Panggilan_Praktikan",
            "Review Film Forrest Gump oleh Nama_Panggilan_Praktikan",
            "Review Film The Matrix oleh Nama_Panggilan_Praktikan"
        ];

        videoTitles.forEach(title => {
            const video = new SayaTubeVideo(title);
            video.IncreasePlayCount(Math.floor(Math.random() * 1000)); // Simulate random play count
            user.AddVideo(video);
        });

        user.PrintAllVideoPlaycount();
        console.log(`Total Play Count: ${user.GetTotalVideoPlayCount()}`);

        // Test exception handling with overflow
        const testVideo = new SayaTubeVideo("Test Video for Overflow");
        for (let i = 0; i < 10; i++) {
            testVideo.IncreasePlayCount(Number.MAX_SAFE_INTEGER); // Force overflow
        }
    } catch (error) {
        console.error(error.message);
    }
}

// Run the main function
main();
```

Penjelasan:

- Precondition:
    - Validasi panjang dan null untuk title dan username.
    - Validasi playCount agar tidak negatif dan tidak lebih dari 25.000.000.
    - Validasi video yang ditambahkan agar tidak null dan playCount tidak melebihi batas integer maksimum.
- Exception:
    - Blok try-catch digunakan untuk menangani overflow pada IncreasePlayCount.
- Postcondition:
    - Pada PrintAllVideoPlaycount, maksimal 8 video yang di-print.
- Pengujian:
    - Pengujian dilakukan dengan membuat video, menambahkan play count, dan mencoba overflow menggunakan loop.

### Output

```bash
Nama_Panggilan_Praktikan
Video 1 judul: Review Film Inception oleh Nama_Panggilan_Praktikan
Video 2 judul: Review Film Interstellar oleh Nama_Panggilan_Praktikan
Video 3 judul: Review Film The Dark Knight oleh Nama_Panggilan_Praktikan
Video 4 judul: Review Film Parasite oleh Nama_Panggilan_Praktikan
Video 5 judul: Review Film Whiplash oleh Nama_Panggilan_Praktikan
Video 6 judul: Review Film The Godfather oleh Nama_Panggilan_Praktikan
Video 7 judul: Review Film Pulp Fiction oleh Nama_Panggilan_Praktikan
Video 8 judul: Review Film Fight Club oleh Nama_Panggilan_Praktikan
Total Play Count: 5962
Play count must be between 0 and 25,000,000.
```
