const { AkarPersamaanKuadrat, HasilKuadrat } = require('./aljabar-libraries');

console.log("Akar dari x^2 - 3x - 10:");
console.log(AkarPersamaanKuadrat([1, -3, -10])); // Output: [5, -2]

console.log("Hasil kuadrat dari 2x - 3:");
console.log(HasilKuadrat([2, -3])); // Output: [4, -12, 9]
