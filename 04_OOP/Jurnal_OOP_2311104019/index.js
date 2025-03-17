// KodeBuah.js
const KodeBuah = require('./KodeBuah');
const kodeBuah = new KodeBuah;

console.log('Kode buah Apel:', kodeBuah.getKodeBuah('Apel'));
console.log('Kode buah Pisang:', kodeBuah.getKodeBuah('Pisang'));

// PosisiKarakterGame.js
const PosisiKarakterGame = require('./PosisiKarakterGame');
const game = new PosisiKarakterGame();

game.ubahState("TombolS");
game.ubahState("TombolW");
game.ubahState("Terbang");
game.ubahState("Jongkok");
