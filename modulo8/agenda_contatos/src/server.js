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

app.get('/contatos/:id', async (req, res) => {
  try {
    const contato = await Contato.findById(req.params.id);
    if (!contato) {
      return res.status(404).json({mensagem: "Contato não encontrado"});
    }
    res.status(200).json(contato);
  } catch (error) {
    res.status(400).json({mensagem: `Erro ao buscar contato: ${error.message}`});
  }
});

app.put('/contatos/:id', async (req, res) => {
  try {
    const contatoAtualizado = await Contato.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!contatoAtualizado) {
      return res.status(404).json({mensagem: "Contato não encontrado"});
    }
    res.status(200).json(contatoAtualizado);
  } catch (error) {
    res.status(400).json({mensagem: `Erro ao atualizar contato: ${error.message}`});
  }
});

app.delete('/contatos/:id', async (req, res) => {
  try {
    const contatoDeletado = await Contato.findByIdAndDelete(req.params.id);
    if (!contatoDeletado) {
      return res.status(404).json({mensagem: "Contato não encontrado"});
    }
    res.status(200).json({mensagem: "Contato deletado com sucesso"});
  } catch (error) {
    res.status(400).json({mensagem: `Erro ao deletar contato: ${error.message}`});
  }
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
    if(error.code === 11000) {
      res.status(409).json({mensagem: "erro: email já cadastrado "});
    }
    res.status(400).json({mensagem: `Erro ao cadastrar contato: ${error.message}`});
  }
});

app.listen(PORT, () => {
  console.log(`aplicação iniciada em http://localhost:${PORT}`);
});

