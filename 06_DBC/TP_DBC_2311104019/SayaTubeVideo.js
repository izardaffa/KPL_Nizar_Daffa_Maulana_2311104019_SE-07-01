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