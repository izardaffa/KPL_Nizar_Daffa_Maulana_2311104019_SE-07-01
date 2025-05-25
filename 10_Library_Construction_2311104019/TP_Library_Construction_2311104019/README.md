# TP Library Construction 2311104019

## Output

```bash
Akar dari x^2 - 3x - 10:
[ 5, -2 ]
Hasil kuadrat dari 2x - 3:
[ 4, -12, 9 ]

```

### Penjelasan

```javascript
function AkarPersamaanKuadrat([a, b, c]) {
  const D = b ** 2 - 4 * a * c;
  if (D < 0) return [];
  const sqrtD = Math.sqrt(D);
  return [(-b + sqrtD) / (2 * a), (-b - sqrtD) / (2 * a)];
}

```

- Fungsi ini menerima array berisi koefisien [a, b, c] dari persamaan kuadrat ax² + bx + c = 0.
- Menggunakan rumus diskriminan untuk menentukan akar-akar dari persamaan.
- Jika tidak ada akar real (D < 0), mengembalikan array kosong [].

```javascript
function HasilKuadrat([a, b]) {
  // (ax + b)^2 = a^2 x^2 + 2ab x + b^2
  return [a ** 2, 2 * a * b, b ** 2];
}

```

- Fungsi ini menghitung hasil kuadrat dari bentuk linear (ax + b)².
- Rumus ekspansi: (ax + b)² = a²x² + 2abx + b².
- Mengembalikan array [a², 2ab, b²] sebagai koefisien dari hasil kuadrat.
