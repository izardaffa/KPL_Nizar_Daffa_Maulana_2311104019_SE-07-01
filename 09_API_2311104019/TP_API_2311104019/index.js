import express from 'express';
import bodyParser from 'body-parser';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import mahasiswaRouter from './routes/mahasiswa.js';

const app = express();
const PORT = 3000;

// Swagger Config
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'TP Modul 9',
            version: '1.0.0',
            description: 'Tugas Pendahuluan Modul 9 Mata Kuliah Konstruksi Perangkat Lunak',
            contact: {
                name: "Nizar Daffa Maulana",
                url: "https://izardaffa.github.io"
            },
            license: {
                name: 'MIT',
                url: 'https://opensource.org/licenses/MIT',
            }
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
                description: "Local server with Express"
            },
        ]
    },
    apis: ['./routes/*.js'],
}

const swaggerDocs = swaggerJSDoc(swaggerOptions);

app.use(bodyParser.json());

app.get('/', (req, res) => {
    console.log('[GET ROUTE]');
    res.send('HELLO FROM HOMEPAGE');
});

app.use('/api/mahasiswa', mahasiswaRouter);

app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
