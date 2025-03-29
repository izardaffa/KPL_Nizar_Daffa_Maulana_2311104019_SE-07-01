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