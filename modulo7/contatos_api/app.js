import express from 'express';
import contatos from './contatos.js';



const app = express();
const port = 3000;



app.use(express.json());


app.get('/contatos', (req, res) => {
  res.status(200).json(contatos);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});