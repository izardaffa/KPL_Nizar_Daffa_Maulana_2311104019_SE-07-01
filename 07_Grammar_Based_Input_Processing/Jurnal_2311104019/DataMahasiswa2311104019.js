import fs from 'fs';

function ReadJSON() {
    const filePath = './jurnal7_1_2311104019.json';     
    const jsonData = fs.readFileSync(filePath, 'utf-8');    
    const mahasiswa = JSON.parse(jsonData);
    
    console.log(`[Data Mahasiswa]`);
    console.log(`Name: ${mahasiswa.firstName} ${mahasiswa.lastName}`);
    console.log(`Gender: ${mahasiswa.gender}`);
    console.log(`Age: ${mahasiswa.age} years`);
    console.log(`Address: ${mahasiswa.address.streetAddress}, ${mahasiswa.address.city}, ${mahasiswa.address.state}`);
    console.log(`Courses:`);
    mahasiswa.courses.forEach((course, index) => {
        console.log(`    ${index + 1}. ${course.code} - ${course.name}`);
    });
}

ReadJSON();