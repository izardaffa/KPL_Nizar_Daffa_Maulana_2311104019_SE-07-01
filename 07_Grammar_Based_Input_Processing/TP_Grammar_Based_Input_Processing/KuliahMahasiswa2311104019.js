import fs from 'fs';

function ReadJSON() {
    const filePath = './tp7_2_2311104019.json';    
    const jsonData = fs.readFileSync(filePath, 'utf-8');    
    const data = JSON.parse(jsonData);
    const courses = data.courses;
    
    courses.forEach((course, index) => {
        console.log(`MK ${index + 1} ${course.code} - ${course.name}`);
    });
}

ReadJSON();