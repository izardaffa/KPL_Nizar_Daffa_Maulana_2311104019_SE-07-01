class Penjumlahan {
    JumlahTigaAngka(a, b, c) {
        let hasil = 0;
        hasil = a + b + c;
        return hasil;
    }
}

const penjumlahan = new Penjumlahan();
const hasil = penjumlahan.JumlahTigaAngka(231, 110, 4019);
console.log(`Hasil penjumlahan: ${hasil}`);