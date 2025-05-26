# Jurnal Clean Code 2311104019

Studi kasus yang saya ambil adalah kode dari Jurnal Modul 10.

## Clean Code

`matematika-libraries/index.js` >> `src/mathUtils.js`

Sebelum:

```js
// Menghitung FPB
function FPB(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

// Menghiung KPK
function KPK(a, b) {
  return Math.abs(a * b) / FPB(a, b);
}

// Fungsi Turunan
function Turunan(coeffs) {
  const hasil = coeffs
    .slice(0, -1)
    .map((c, i) => c * (coeffs.length - i - 1))
    .map((val, idx) => {
      const pangkat = coeffs.length - idx - 2;
      if (val === 0) return null;
      const simbol = val > 0 && idx > 0 ? " + " : val < 0 ? " - " : "";
      const nilai = Math.abs(val);
      return `${simbol}${nilai}${pangkat > 0 ? 'x' + (pangkat > 1 ? pangkat : '') : ''}`;
    })
    .filter(Boolean)
    .join("");
  return hasil;
}

// Fungsi Integral
function Integral(coeffs) {
  const hasil = coeffs
    .map((c, i) => {
      const pangkat = coeffs.length - i;
      if (c === 0) return null;
      const simbol = c > 0 && i > 0 ? " + " : c < 0 ? " - " : "";
      const nilai = Math.abs(c / pangkat);
      return `${simbol}${nilai === 1 ? '' : nilai}${pangkat > 1 ? 'x' + pangkat : 'x'}`;
    })
    .filter(Boolean)
    .join("") + " + C";
  return hasil;
}

module.exports = {
  FPB,
  KPK,
  Turunan,
  Integral,
};

```

Sesudah:

```js
/**
 * Menghitung Faktor Persekutuan Terbesar (GCD)
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getGCD(a, b) {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y !== 0) {
    [x, y] = [y, x % y];
  }
  return x;
}

/**
 * Menghitung Kelipatan Persekutuan Terkecil (LCM)
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function getLCM(a, b) {
  return Math.abs(a * b) / getGCD(a, b);
}

/**
 * Menghitung turunan dari persamaan polinomial
 * @param {number[]} coefficients - Array koefisien [a, b, c, ...]
 * @returns {string} Bentuk string hasil turunan
 */
function getDerivative(coefficients) {
  const n = coefficients.length;

  const terms = coefficients
    .slice(0, -1)
    .map((coefficient, index) => {
      const exponent = n - index - 1;
      const derivedCoefficient = coefficient * exponent;
      if (derivedCoefficient === 0) return null;

      const sign = derivedCoefficient > 0 && index > 0 ? ' + ' : derivedCoefficient < 0 ? ' - ' : '';
      const value = Math.abs(derivedCoefficient);
      const variable = exponent - 1 > 1 ? `x${exponent - 1}` : exponent - 1 === 1 ? 'x' : '';
      return `${sign}${value}${variable}`;
    })
    .filter(Boolean)
    .join('');

  return terms || '0';
}

/**
 * Menghitung integral dari persamaan polinomial
 * @param {number[]} coefficients - Array koefisien [a, b, c, ...]
 * @returns {string} Bentuk string hasil integral + C
 */
function getIntegral(coefficients) {
  const n = coefficients.length;

  const terms = coefficients
    .map((coefficient, index) => {
      const exponent = n - index;
      if (coefficient === 0) return null;

      const sign = coefficient > 0 && index > 0 ? ' + ' : coefficient < 0 ? ' - ' : '';
      const value = Math.abs(coefficient / exponent);
      const variable = exponent > 1 ? `x${exponent}` : 'x';
      return `${sign}${value === 1 ? '' : value}${variable}`;
    })
    .filter(Boolean)
    .join('');

  return terms + ' + C';
}

module.exports = {
  getGCD,
  getLCM,
  getDerivative,
  getIntegral,
};

```
