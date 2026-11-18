import dotenv from 'dotenv';
dotenv.config();

import Contato from './models/contato.js';

import express from 'express';

import conectarBanco from './database.js';
conectarBanco();

const app = express();
const PORT = Number(process.env.PORT)

app.use(express.json());

app.get('/', (req, res) => {
  res.send("contatos");
});

app.post('/contatos', async (req, res) => {
  try {
    const dados = req.body;
    const novoContato = {
        nome: dados.nome,
        email: dados.email,
        telefones: dados.telefones
    };
    const contato = await Contato.create(novoContato);
    res.status(201).json(contato);
  } catch (error) {
    res.status(400).json({mensagem: `Erro ao cadastrar contato: ${error.message}`});
  }
});

app.listen(PORT, () => {
  console.log(`aplicação iniciada em http://localhost:${PORT}`);
});

