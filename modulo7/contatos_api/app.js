import express from 'express';
import contatos from './contatos.js';
import deletar from './deletar.js';

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