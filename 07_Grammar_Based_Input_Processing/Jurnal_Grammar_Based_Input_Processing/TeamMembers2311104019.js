import fs from 'fs';

function ReadJSON() {
    const filePath = './jurnal7_2_2311104019.json';    
    const jsonData = fs.readFileSync(filePath, 'utf-8');    
    const data = JSON.parse(jsonData);
    const members = data.members;
    
    console.log(`Team member list:`);
    members.forEach((member, index) => {
        console.log(`${member.nim} ${member.firstName} ${member.lastName} (${member.age} ${member.gender})`);
    });
}

ReadJSON();