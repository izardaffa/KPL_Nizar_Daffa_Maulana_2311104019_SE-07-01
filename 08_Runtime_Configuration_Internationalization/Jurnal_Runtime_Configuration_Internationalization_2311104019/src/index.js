import i18next from 'i18next';
import Backend from 'i18next-fs-backend';
// import { config } from '../config/config.js';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';
import fs from 'fs';

async function ReadJSON() {
  const filePath = './config/bank_transfer_config.json';     
  const jsonData = fs.readFileSync(filePath, 'utf-8');    
  const config = JSON.parse(jsonData);

  return config;
}

const config = await ReadJSON();

// Mendapatkan __dirname dalam ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Inisialisasi i18next
await i18next
  .use(Backend)
  .init({
    lng: config.lang,
    fallbackLng: 'en',
    backend: {
      loadPath: path.join(__dirname, '../locales/{{lng}}/translation.json')
    }
  });

// Output
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let totalAmount = 0;

rl.question(i18next.t('insert_money'), (money) => {
  if (parseInt(money) <= config.transfer.threshold) {
    totalAmount = parseInt(money) + config.transfer.low_fee;
  } else if (parseInt(money) > config.transfer.threshold) {
    totalAmount = parseInt(money) + config.transfer.high_fee;
  }

  console.log(i18next.t('total_amount', { totalAmount: totalAmount }));

  console.log(i18next.t('select_method_title'));
  for (let i = 0; i < config.methods.length; i++) {
    console.log(`${i + 1}. ${config.methods[i]}`);
  }

  rl.question(i18next.t('select_method'), (selected_method) => {
    if (selected_method < 1 || selected_method > config.methods.length) {
      console.log(i18next.t('invalid_method'));
      rl.close();
      return;
    }

    rl.question(i18next.t('confirmation', { confirmation: config.lang == "en" ? config.confirmation.en : config.confirmation.id }), (confirmation) => {
      if (confirmation.toLowerCase() == (config.lang == "en" ? config.confirmation.en : config.confirmation.id)) {
        console.log(i18next.t('success'));
      } else {
        console.log(i18next.t('cancel'));
      }

      rl.close();
    });
  });
});
