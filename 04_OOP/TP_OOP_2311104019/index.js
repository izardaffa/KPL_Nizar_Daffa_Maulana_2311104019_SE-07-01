// KodePos
const KodePos = require("./KodePos")

const kodePos = new KodePos()
console.log("Kode Pos Batununggal:", kodePos.getKodePos("Batununggal"))
console.log("Kode Pos Maleer:", kodePos.getKodePos("Maleer"))
console.log("Kode Pos Kaligondang:", kodePos.getKodePos("Kaligondang"))

// DoorMachine
const door = new DoorMachine()
door.lock()
door.unlock()
door.lock()
