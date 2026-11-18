import express from 'express';
import contatos from './contatos.js';
import deletar from './deletar.js';
import adicionar from './adicionar.js';
import atualizar from './atualizar.js';

const app = express();
const port = 3000;

app.use(express.json());

function validar (req, res, next) {
    const id = parseInt(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).send("ID inválido");
    }
    next();
}

app.get('/contatos', (req, res) => {

  res.status(200).json(contatos);
});

app.get('/contatos/:id', validar, (req, res) => {
    const id = parseInt(req.params.id);

    if (Number.isNaN(id)) {
        return res.status(400).send("ID inválido");
    }

const contato = contatos.find(contato => contato.id === id);

if (!contato) {
    return res.status(404).send("Contato não encontrado");
}

res.json(contato);
});


// app.put('/contatos/:id', validar, (req, res) => {
//   const id = parseInt(req.params.id);
//   const { nome, email, telefone } = req.body;

//   if (!nome || !email || !telefone) {
//     return res.status(400).send("Todos os campos são obrigatórios");
//   }

//   const contatoAtualizado = atualizar(contatos, id, nome, email, telefone);

//   if (!contatoAtualizado) {
//     return res.status(404).send("Contato não encontrado");
//   }

//   res.status(200).json(contatoAtualizado);
// });


app.put('/contatos/:id', validar, (req, res) => {
    const contatoAtualizado = req.body;
    const id = parseInt(req.params.id);

    if (!atualizado) {
        return res.status(400).send("Todos os campos são obrigatórios");
    }

    res.status(200).send("Contato atualizado com sucesso");
});


app.post('/contatos', (req, res) => {
  const { nome, email, telefone } = req.body;

  if (!nome || !email || !telefone) {
    return res.status(400).send("Todos os campos são obrigatórios");
  }

  const novoContato = adicionar(contatos, nome, email, telefone);

  res.status(201).json(novoContato);
});


app.delete('/contatos/:id', validar, (req, res) => {
    const id = parseInt(req.params.id);

    const excluido = deletar (contatos, id) ;

    if (!excluido) {
        return res.status(400).send("Contato não encontrado");
    }
    res.status(200).send("Contato removido com sucesso");
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});