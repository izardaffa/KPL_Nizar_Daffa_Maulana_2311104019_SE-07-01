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
        const user = new SayaTubeUser("Nizar Daffa");

        const videoTitles = [
            "Review Film Inception oleh Nizar Daffa",
            "Review Film Interstellar oleh Nizar Daffa",
            "Review Film The Dark Knight oleh Nizar Daffa",
            "Review Film Parasite oleh Nizar Daffa",
            "Review Film Whiplash oleh Nizar Daffa",
            "Review Film The Godfather oleh Nizar Daffa",
            "Review Film Pulp Fiction oleh Nizar Daffa",
            "Review Film Fight Club oleh Nizar Daffa",
            "Review Film Forrest Gump oleh Nizar Daffa",
            "Review Film The Matrix oleh Nizar Daffa"
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