import process from "process";
import readline from "readline";

const input = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let data = [];

input.question("Siapa nama anda? ", (nama) => {
    // console.info(`Halo ${nama}.`);
    data.push(nama);

    input.question("Apa jurusan anda? ", (jurusan) => {
        data.push(jurusan);
    
        input.question("Apa universitas anda? ", (universitas) => {
            data.push(universitas);
        
            input.question("Berapa usia anda? ", (usia) => {
                data.push(usia);
            
                console.log(`\nNama: ${data[0]}, \nJurusan: ${data[1]}, \nUniversitas: ${data[2]}, \nUsia: ${data[3]}`);
            
                input.close();
            });
        });
    });
});

// nama, jurusan, univ, usia
