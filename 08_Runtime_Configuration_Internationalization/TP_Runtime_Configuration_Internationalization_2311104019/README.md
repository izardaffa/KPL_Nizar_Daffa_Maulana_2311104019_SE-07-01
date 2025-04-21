# TP Runtime Configuration Internationalization 2311104019

## Kode Program

```js
import fs from 'fs';
import readline from 'readline';

const filePath = './config/covid_config.json';     
const jsonData = fs.readFileSync(filePath, 'utf-8');    
const config = JSON.parse(jsonData);

function UbahSatuan() {
    config.satuan_suhu = config.satuan_suhu === 'celcius' ? 'fahrenheit' : 'celcius';
    fs.writeFileSync(filePath, JSON.stringify(config, null, 4), 'utf-8');
    console.log(`Satuan suhu berhasil diubah menjadi ${config.satuan_suhu}`);
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

UbahSatuan();

rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu} : `, (suhu) => {
    rl.question(`Berapa hari yang lalu (perkiraan) anda terakhir memiliki gejala demam? : `, (hari) => {
        if (
            ((config.satuan_suhu == 'celcius' && 
                (parseFloat(suhu) > 36.5 && parseInt(suhu) < 37.5)) 
            || (config.satuan_suhu == 'fahrenheit' && 
                (parseFloat(suhu) > 97.7 && parseInt(suhu) < 99.5)))
            && (parseInt(hari) < config.batas_hari_demam)
        ) {
            console.log(config.pesan_diterima);
        } else {
            console.log(config.pesan_ditolak);
        }

        rl.close();
    });
});
```

## Penjelasan

```js
const filePath = './config/covid_config.json';     
const jsonData = fs.readFileSync(filePath, 'utf-8');    
const config = JSON.parse(jsonData);
```

Membaca file covid_config.json yang berisi konfigurasi.

```js
function UbahSatuan() {
    config.satuan_suhu = config.satuan_suhu === 'celcius' ? 'fahrenheit' : 'celcius';
    fs.writeFileSync(filePath, JSON.stringify(config, null, 4), 'utf-8');
    console.log(`Satuan suhu berhasil diubah menjadi ${config.satuan_suhu}`);
}
```

Mengubah satuan suhu dari celcius ke fahrenheit atau sebaliknya.

```js
rl.question(`Berapa suhu badan anda saat ini? Dalam nilai ${config.satuan_suhu} : `, ...
```

Menanyakan suhu tubuh user dengan satuan yang sudah diubah.

```js
if (
    ((config.satuan_suhu == 'celcius' && (parseFloat(suhu) > 36.5 && parseInt(suhu) < 37.5)) 
    || (config.satuan_suhu == 'fahrenheit' && (parseFloat(suhu) > 97.7 && parseInt(suhu) < 99.5)))
    && (parseInt(hari) < config.batas_hari_demam)
)
```

Mengecek apakah suhu dalam rentang normal. Mengecek apakah user tidak demam lebih dari batas hari tertentu. Jika keduanya benar, tampilkan pesan_diterima, kalau tidak, tampilkan pesan_ditolak.
