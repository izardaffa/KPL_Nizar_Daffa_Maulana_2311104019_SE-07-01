# Jurnal Library Construction 2311104019

## Output

```sh
FPB(60, 45): 15
KPK(12, 8): 24
Turunan dari x^3 + 4x^2 - 12x + 9:
3x2 + 8x - 12
Integral dari 4x^3 + 6x^2 - 12x + 9:
x4 + 2x3 - 6x2 + 9x + C

```

## Penjelasan

```js
function FPB(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return Math.abs(a);
}

```

Menggunakan algoritma Euclidean untuk mencari faktor persekutuan terbesar.

```js
function KPK(a, b) {
  return Math.abs(a * b) / FPB(a, b);
}

```

Menggunakan rumus: Lcm(a, b) = |a * b| / Gcd(a, b)

```js
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

```

Menghitung turunan dari persamaan polinomial.

```js
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

```

Mengintegralkan persamaan polinomial. Menambahkan "+ C" di akhir sebagai konstanta integrasi.
