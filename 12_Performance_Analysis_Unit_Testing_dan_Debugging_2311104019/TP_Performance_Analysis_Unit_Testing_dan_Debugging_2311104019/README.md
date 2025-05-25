# TP Performance Analysis, Unit, Testing, dan Debugging 2311104019

## Output

Output dari `node main.js`.

```sh
Masukkan angka: 0
Tanda bilangan: Nol

```

Output dari `npm test`.

```sh

> test
> jest

 PASS  test/tandaBilangan.test.js (8.687 s)
  √ Mengembalikan "Negatif" jika input < 0 (3 ms)
  √ Mengembalikan "Positif" jika input > 0                                                                                                                              
  √ Mengembalikan "Nol" jika input = 0                                                                                                                                  
                                                                                                                                                                        
Test Suites: 1 passed, 1 total                                                                                                                                          
Tests:       3 passed, 3 total                                                                                                                                          
Snapshots:   0 total
Time:        10.596 s
Ran all test suites.

```

## Penjelasan

`src/tandaBilangan.js`

```js
function tandaBilangan(a) {
  if (a < 0) return "Negatif";
  if (a > 0) return "Positif";
  return "Nol";
}

module.exports = { tandaBilangan };

```

Fungsi ini melakukan pengecekan terhadap input `a` dan mengembalikan string berdasarkan nilai.

`test/tandaBilangan.test.js`

```js
const { tandaBilangan } = require('../src/tandaBilangan.js');

test('Mengembalikan "Negatif" jika input < 0', () => {
  expect(tandaBilangan(-10)).toBe("Negatif");
});

test('Mengembalikan "Positif" jika input > 0', () => {
  expect(tandaBilangan(15)).toBe("Positif");
});

test('Mengembalikan "Nol" jika input = 0', () => {
  expect(tandaBilangan(0)).toBe("Nol");
});

```

Pada `test/tandaBilangan.test.js`, setiap kemungkinan branch diuji.
