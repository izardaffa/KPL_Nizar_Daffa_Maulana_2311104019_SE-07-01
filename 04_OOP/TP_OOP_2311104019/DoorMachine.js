class DoorMachine {
    constructor() {
        this.state = "Terkunci";
    }

    unlock() {
        if (this.state === "Terkunci") {
            this.state = "Terbuka";
            console.log("Pintu tidak terkunci");
        }
    }

    lock() {
        if (this.state === "Terbuka") {
            this.state = "Terkunci";
            console.log("Pintu terkunci");
        }
    }
}

const door = new DoorMachine()
door.lock()
door.unlock()
door.lock()
