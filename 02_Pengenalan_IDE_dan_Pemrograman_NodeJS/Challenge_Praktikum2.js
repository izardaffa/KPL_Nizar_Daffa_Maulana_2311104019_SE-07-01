const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let jumlahBarang;
let hargaBarang = [];
let totalHarga = 0;
let kategoriDiskon;

rl.question(`Masukkan jumlah barang: `, jB => {
    jumlahBarang = parseInt(jB);

    if (isNaN(jumlahBarang) || jumlahBarang <= 0) {
        console.log(`Error: Hanya menerima bilangan bulat positif.`);
        rl.close();
        return;
    }

    const inputHargaBarang = (index) => {
        if (index < jumlahBarang) {
            rl.question(`Masukkan harga barang ke-${index + 1}: `, (inputHargaBarang) => {
                let floatHargaBarang = parseFloat(inputHargaBarang);
                if (isNaN(floatHargaBarang) || floatHargaBarang < 0) {
                    inputHargaBarang(index);
                } else {
                    hargaBarang.push(floatHargaBarang);
                    inputHargaBarang(index + 1);
                }
            });
        } else {
            for (let i = 0; i < hargaBarang.length; i++) {
                totalHarga += hargaBarang[i];
            }
        
            if (totalHarga > 100000) {
                kategoriDiskon = 'Diskon Besar';
            } else if (totalHarga > 50000) {
                kategoriDiskon = 'Diskon Sedang';
            } else {
                kategoriDiskon = 'Tidak Ada Diskon';
            }
            
            console.log(`\nTotal harga: ${totalHarga}`);
            console.log(`Jumlah barang: ${jumlahBarang}`);
            console.log(`Kategori Diskon: ${kategoriDiskon}`);
        
            for (let i = 0; i < hargaBarang.length; i++) {
                console.log(`\nInformasi barang ke-${i+1}`);
                console.log(`Harga barang: ${hargaBarang[i]}`);
            }
        
            rl.close();
        }
    }

    inputHargaBarang(0);
});
