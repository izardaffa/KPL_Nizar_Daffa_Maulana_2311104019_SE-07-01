class SimpleDataBase {
    storedData = [];
    inputDates = [];

    // Konstruktor SimpleDataBase
    constructor() {}

    // Method untuk menambahkan data baru
    AddNewData(data) {
        this.storedData.push(data);
        this.inputDates.push(new Date());
    }

    // Method untuk mencetak semua data
    PrintAllData() {
        this.storedData.forEach((data, index) => {
            console.log(`Data ${index + 1} berisi: ${data}, yang disimpan pada waktu UTC: ${this.inputDates[index].toUTCString()}`);
        });
    }
}

// Contoh penggunaan
const database = new SimpleDataBase();
database.AddNewData(231);
database.AddNewData(110);
database.AddNewData(4019);
database.PrintAllData();