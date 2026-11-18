import dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import conectarBanco from './database.js';
conectarBanco();

const app = express();
const PORT = Number(process.env.PORT)

app.get('/', (req, res) => {
  res.send("contatos");
});

app.listen(PORT, () => {
  console.log(`aplicação iniciada em http://localhost:${PORT}`);
});

