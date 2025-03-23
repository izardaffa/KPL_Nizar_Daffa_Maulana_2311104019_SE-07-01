class DataGeneric {
    data;
    
    constructor(data) {
        this.data = data;
    }

    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
}

const dataGeneric = new DataGeneric(2311104019);
dataGeneric.PrintData();