import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
  nomeCliente: {
    type: String,
    required: true
  },
  item: {
    type: String,
    required: true,
    enum: ['Salgado', 'Suco', 'Combo', 'Bolo']
  },
  quantidade: {
    type: Number,
    required: true,
    min: 1
  },
  formaPagamento: {
    type: String,
    required: true,
    enum: ['Dinheiro', 'Pix', 'Cartão']
  },
  observacao: {
    type: String,
    required: false
  },
  valorUnitario: {
    type: Number
  },
  valorTotal: {
    type: Number
  },
  status: {
    type: String,
    default: 'Pendente',
    enum: ['Pendente', 'Pago', 'Entregue']
  }
});

const Pedido = mongoose.model('Pedido', pedidoSchema);

export default Pedido;