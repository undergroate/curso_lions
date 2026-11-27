import 'dotenv/config';
import express from 'express';
import conectarBanco from './db.js';
import matricula from './models/matricula.js';
const app = express();

app.use(express.json());
conectarBanco();







app.post('/matriculas', async (req, res) => {
const criarMatricula = async (req, res) => {
  try {
    const { modalidade, plano, dataMatricula, ...outrosDados } = req.body;

    // 1. Definição do Valor Mensal
    const tabelaValores = {
      'Musculação': 90,
      'Funcional': 120,
      'Dança': 100
    };

    const valorMensal = tabelaValores[modalidade];

    if (!valorMensal) {
      return res.status(400).json({ erro: 'Modalidade inválida.' });
    }

    // 2. Cálculo do Valor Total
    let valorTotal = 0;

    if (plano === 'Mensal') {
      valorTotal = valorMensal * 1;
    } else if (plano === 'Trimestral') {
      valorTotal = (valorMensal * 3) * 0.90; // 10% de desconto
    } else if (plano === 'Semestral') {
      valorTotal = (valorMensal * 6) * 0.85; // 15% de desconto
    } else {
      return res.status(400).json({ erro: 'Plano inválido.' });
    }

    // 3. Salvar no banco e retornar com status 201
    const novaMatricula = await Matricula.create({
      ...outrosDados,
      modalidade,
      plano,
      dataMatricula,
      valorMensal,
      valorTotal
    });

    return res.status(201).json(novaMatricula);

  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao criar matrícula', detalhes: error.message });
  }
};
















const PORTA = process.env.PORT || 3000;
app.listen(PORTA, () => {
  console.log(`🚀 Servidor da Cantina rodando na porta ${PORT}`);
})