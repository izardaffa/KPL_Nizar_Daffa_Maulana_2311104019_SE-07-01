# TP Clean Code 2311104019

Studi kasus yang saya ambil adalah kode dari TP Modul 10.

## Clean Code

`aljabar-libraries/index.js` >> `aljabar-libraries/mathLib.js`

Sebelum:

```js
function AkarPersamaanKuadrat([a, b, c]) {
  const D = b ** 2 - 4 * a * c;
  if (D < 0) return [];
  const sqrtD = Math.sqrt(D);
  return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
}

function HasilKuadrat([a, b]) {
  // (ax + b)^2 = a^2 x^2 + 2ab x + b^2
  return [a ** 2, 2 * a * b, b ** 2];
}

module.exports = {
  AkarPersamaanKuadrat,
  HasilKuadrat,
};

```

Sesudah:

```js
/**
 * Menghitung akar-akar dari persamaan kuadrat ax^2 + bx + c = 0
 * @param {number[]} coefficients - Array [a, b, c]
 * @returns {number[]} Akar-akar real dari persamaan (jika ada)
 */
function getQuadraticRoots([a, b, c]) {
  const D = b ** 2 - 4 * a * c;
  if (D < 0) return [];
  const sqrtD = Math.sqrt(D);
  return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
}

/**
 * Mengkuadratkan persamaan linear ax + b menjadi ax² + bx + c
 * @param {number[]} coefficients - Array [a, b]
 * @returns {number[]} Koefisien hasil kuadrat: [a², 2ab, b²]
 */
function squareLinearEquation([a, b]) {
  const aSquared = a ** 2;
  const middleTerm = 2 * a * b;
  const bSquared = b ** 2;
  return [aSquared, middleTerm, bSquared];
}

module.exports = {
  getQuadraticRoots,
  squareLinearEquation,
};

```
