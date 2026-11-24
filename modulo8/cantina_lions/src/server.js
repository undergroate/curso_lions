require('dotenv').config();
const express = require('express');
const conectarBanco = require('./db');
const Pedido = require('./models/pedido');

const app = express();

// Permite que o servidor entenda dados enviados no formato JSON
app.use(express.json());

// Conecta no banco de dados antes de abrir a cantina
conectarBanco();

// ==========================================
// 3.1 CADASTRAR PEDIDO (CREATE)
// ==========================================
app.post('/pedidos', async (req, res) => {
  try {
    const { nomeCliente, item, quantidade, formaPagamento, observacao } = req.body;

    // 1. Definição do Valor Unitário
    let valorUnitario = 0;
    if (item === 'Salgado') valorUnitario = 8;
    else if (item === 'Suco') valorUnitario = 6;
    else if (item === 'Combo') valorUnitario = 12;
    else if (item === 'Bolo') valorUnitario = 5;

    // 2. Cálculo do Valor Total
    let valorTotal = valorUnitario * quantidade;

    // 3. Desconto por Quantidade (10% se for 5 ou mais)
    if (quantidade >= 5) {
      valorTotal = valorTotal * 0.9;
    }

    // 4. Criar e salvar no banco
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

// ==========================================
// 3.2 LISTAR TODOS OS PEDIDOS (READ)
// ==========================================
app.get('/pedidos', async (req, res) => {
  try {
    const pedidos = await Pedido.find();
    return res.status(200).json(pedidos);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro ao buscar pedidos' });
  }
});

// ==========================================
// 3.3 BUSCAR PEDIDOS POR CLIENTE (QUERY PARAMS)
// ==========================================
app.get('/pedidos/busca', async (req, res) => {
  try {
    const { cliente } = req.query;

    // Se o usuário não digitar nada na busca, traz todos
    if (!cliente) {
      const todos = await Pedido.find();
      return res.status(200).json(todos);
    }

    // Busca ignorando maiúsculas/minúsculas ('i') e partes do nome ($regex)
    const pedidosEncontrados = await Pedido.find({
      nomeCliente: { $regex: cliente, $options: 'i' }
    });

    return res.status(200).json(pedidosEncontrados);
  } catch (erro) {
    return res.status(500).json({ erro: 'Erro na busca por cliente' });
  }
});

// ==========================================
// 3.4 ATUALIZAR STATUS DO PEDIDO (UPDATE)
// ==========================================
app.patch('/pedidos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const pedidoAtualizado = await Pedido.findByIdAndUpdate(
      id,
      { status },
      { new: true, runValidators: true }
    );

    if (!pedidoAtualizado) {
      return res.status(404).json({ mensagem: 'Pedido não encontrado!' });
    }

    return res.status(200).json(pedidoAtualizado);
  } catch (erro) {
    return res.status(400).json({ erro: 'Erro ao atualizar status', detalhes: erro.message });
  }
});

// ==========================================
// 3.5 REMOVER PEDIDO (DELETE)
// ==========================================
app.delete('/pedidos/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const pedidoRemovido = await Pedido.findByIdAndDelete(id);

    if (!pedidoRemovido) {
      return res.status(404).json({ mensagem: 'Pedido não encontrado!' });
    }

    return res.status(200).json({ mensagem: 'Pedido removido com sucesso!' });
  } catch (erro) {
    return res.status(400).json({ erro: 'Erro ao deletar pedido' });
  }
});

// Liga o servidor na porta configurada
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor da Cantina rodando na porta ${PORT}`);
});