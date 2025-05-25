# Jurnal Performance Analysis, Unit, Testing, dan Debugging 2311104019

## Output

Output `node main.js`.

```sh
Masukkan a: 4
Masukkan b: 2
Hasil pangkat: 16

```

Output `npm test`.

```sh

> test
> jest

 FAIL  test/pangkat.test.js (5.658 s)
  √ b = 0 → return 1 (3 ms)
  √ b < 0 → return -1 (1 ms)                                                                                                                                            
  √ a > 100 → return -2 (1 ms)                                                                                                                                          
  √ b > 10 → return -2                                                                                                                                                  
  × hasil > MAX_SAFE_INTEGER → return -3 (3 ms)                                                                                                                         
  √ valid pangkat → return hasil                                                                                                                                        
                                                                                                                                                                        
  ● hasil > MAX_SAFE_INTEGER → return -3                                                                                                                                
                                                                                                                                                                        
    expect(received).toBe(expected) // Object.is equality

    Expected: -3
    Received: -2

      18 |
      19 | test('hasil > MAX_SAFE_INTEGER → return -3', () => {
    > 20 |   expect(pangkat(9, 30)).toBe(-3); // 9^30 > MAX_SAFE_INTEGER
         |                          ^
      21 | });
      22 |
      23 | test('valid pangkat → return hasil', () => {

      at Object.toBe (test/pangkat.test.js:20:26)

Test Suites: 1 failed, 1 total                                                                                                                                          
Tests:       1 failed, 5 passed, 6 total                                                                                                                                
Snapshots:   0 total
Time:        7.073 s
Ran all test suites.

```

## Penjelasan

```js
function pangkat(a, b) {
  if (b === 0) return 1;
  if (b < 0) return -1;
  if (b > 10 || a > 100) return -2;

  let hasil = 1;
  for (let i = 0; i < b; i++) {
    hasil *= a;
    if (hasil > Number.MAX_SAFE_INTEGER) return -3;
  }
  return hasil;
}
```

- Iterasi manual tanpa ** atau Math.pow
- Perlindungan overflow dengan Number.MAX_SAFE_INTEGER
