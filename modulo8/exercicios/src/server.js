import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import { conectarBanco } from './db.js';
const app = express(); 
conectarBanco();

app.get('/', (req, res) => {
  res.send("pedido");
});

app.post('/pedido', async (req, res) => {
    try{    
        const { nomeCliente, item, quantidade, formaPagamento, observacao} = req.body;

        let valorUnitario = 0;
        if (item === 'salgado') valorUnitario = 8;
        else if (item === 'suco') valorUnitario = 6;
        else if (item === 'combo') valorUnitario = 12;
        else if (item === 'bolo') valorUnitario = 5;

        let valorTotal = valorUnitario * quantidade;

        if (quantidade >= 5) {
            valorTotal *= 0.9;
        }
     const novoPedido = await Pedido.create({
          nomeCliente,
          item,
          quantidade,
          formaPagamento,
          observacao,
          valorUnitario,
          valorTotal
        });

         return res.status(201).json(novoPedido);
  } catch (erro) {
    return res.status(400).json({ erro: 'Erro ao cadastrar pedido', detalhes: erro.message });
  }
});


app.get('/pedidos', async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    return res.status(200).json(pedidos);
  } catch (erro) {
    return res.status(400).json({ erro: 'Erro ao buscar pedidos', detalhes: erro.message });
  }
});

