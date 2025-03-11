class KodeBuah {
    constructor(nama, kode) {
        this.nama = nama;
        this.kode = kode;
    }

    getKodeBuah() {
        return `${this.nama} | ${this.kode}`;
    }
}

const kodeBuah = [
    new KodeBuah('Apel', 'A00'),
    new KodeBuah('Aprikot', 'B00'),
    new KodeBuah('Alpukat', 'C00'),
    new KodeBuah('Pisang', 'D00'),
    new KodeBuah('Paprika', 'E00'),
    new KodeBuah('Blackberry', 'F00'),
    new KodeBuah('Ceri', 'H00'),
    new KodeBuah('Kelapa', 'I00'),
    new KodeBuah('Jagung', 'J00'),
    new KodeBuah('Kurma', 'K00'),
    new KodeBuah('Durian', 'L00'),
    new KodeBuah('Anggur', 'M00'),
    new KodeBuah('Melon', 'N00'),
    new KodeBuah('Semangka', 'O00'),
];

kodeBuah.forEach(item => console.log(item.getKodeBuah()));

// export default KodeBuah;
