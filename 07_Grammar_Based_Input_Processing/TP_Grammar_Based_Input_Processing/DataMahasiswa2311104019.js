import fs from 'fs';

function ReadJSON() {
    const filePath = './tp7_1_2311104019.json';     
    const jsonData = fs.readFileSync(filePath, 'utf-8');    
    const mahasiswa = JSON.parse(jsonData);
    
    console.log(`Nama ${mahasiswa.nama.depan} ${mahasiswa.nama.belakang} dengan nim ${mahasiswa.nim} dari fakultas ${mahasiswa.fakultas}.`);
}

ReadJSON();