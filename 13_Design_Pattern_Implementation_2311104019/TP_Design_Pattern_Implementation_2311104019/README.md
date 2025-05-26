# TP Desain Pattern Implementation 2311104019

## Menjelaskan Salah Satu Design Pattern

### A. Berikan salah satu contoh kondisi dimana design pattern “Observer” dapat digunakan

Jawaban:

Salah satu contoh Observer pattern adalah sistem notifikasi email atau chat. Setiap ada update seperti postingan baru, semua pengguna yang subscribe langsung dapat notifikasi.

### B. Berikan penjelasan singkat mengenai langkah-langkah dalam mengimplementasikan design pattern “Observer”

Jawaban:

1. Subject (Publisher) menyimpan daftar observer.
2. Observer (Subscriber) adalah objek yang ingin mendapatkan update dari subject.
3. Observer mendaftar (subscribe) ke subject.
4. Ketika data pada subject berubah, subject akan memberi tahu semua observer.

### C. Berikan kelebihan dan kekurangan dari design pattern “Observer”

Jawaban:

Kelebihan:
- Mengurangi coupling antara objek.
- Memudahkan notifikasi otomatis.
- Reusable, scalable.

Kekurangan:
- Sulit dilacak bila terlalu banyak observer.
- Bisa boros memori jika tidak unregister.
- Kadang kompleks untuk debug dan testing.

## Implementasi Observer

Output

```sh
Senpai menerima notifikasi: Ada pengumuman praktikum baru!
Kouhai menerima notifikasi: Ada pengumuman praktikum baru!
Senpai menerima notifikasi: Modul 14 sudah tersedia.

```

Subject

```js
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  notify(data) {
    this.observers.forEach(observer => observer.update(data));
  }
}

module.exports = Subject;

```

Observer

```js
class Observer {
  constructor(name) {
    this.name = name;
  }

  update(data) {
    console.log(`${this.name} menerima notifikasi: ${data}`);
  }
}

module.exports = Observer;

```

main.js

```js
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

```
