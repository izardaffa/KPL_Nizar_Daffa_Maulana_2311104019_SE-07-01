import fs from 'fs';

function ReadJSON() {
    const filePath = './jurnal7_3_2311104019.json';     
    const jsonData = fs.readFileSync(filePath, 'utf-8');    
    const data = JSON.parse(jsonData);
    const glossEntry = data.glossary.GlossDiv.GlossList.GlossEntry;

    console.log("GlossEntry Details:");
    console.log(`ID: ${glossEntry.ID}`);
    console.log(`SortAs: ${glossEntry.SortAs}`);
    console.log(`GlossTerm: ${glossEntry.GlossTerm}`);
    console.log(`Acronym: ${glossEntry.Acronym}`);
    console.log(`Abbreviation: ${glossEntry.Abbrev}`);
    console.log(`Definition: ${glossEntry.GlossDef.para}`);
    console.log(`GlossSeeAlso: ${glossEntry.GlossDef.GlossSeeAlso.join(', ')}`);
    console.log(`GlossSee: ${glossEntry.GlossSee}`);
}

ReadJSON();