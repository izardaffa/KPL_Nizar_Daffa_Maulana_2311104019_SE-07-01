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

const game = new PosisiKarakterGame();
game.ubahState("TombolS");
game.ubahState("TombolW");
game.ubahState("Terbang");
game.ubahState("Jongkok");
