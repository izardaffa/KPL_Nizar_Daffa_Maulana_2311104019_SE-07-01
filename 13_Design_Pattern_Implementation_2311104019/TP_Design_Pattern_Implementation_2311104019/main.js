const Subject = require('./observer/Subject');
const Observer = require('./observer/Observer');

// Buat subject (publisher)
const berita = new Subject();

// Buat observer (subscriber)
const userA = new Observer("Senpai");
const userB = new Observer("Kouhai");

// Subscribe observer ke subject
berita.subscribe(userA);
berita.subscribe(userB);

// Trigger notifikasi
berita.notify("Ada pengumuman praktikum baru!");

// Unsubscribe satu observer
berita.unsubscribe(userB);

// Trigger lagi
berita.notify("Modul 14 sudah tersedia.");
