import mongoose from "mongoose";

const pedidoSchema = new mongoose.Schema({
    nomeCliente: {
        type: String,   
        required: [true, "O nome do cliente é obrigatório."],   
        trim: true,
    },
    item: {
        type: String,
        required: [true, "O item do pedido é obrigatório."],
        enum: {
            values: ['Salgado', 'Suco', 'Combo', 'Bolo'],
            message: '{VALUE} não é um item válido.'
        }
    },
    quantidade: {
        type: Number,
        required: [true, "A quantidade do pedido é obrigatória."], 
        min: [1, "A quantidade mínima é 1."]
    },
    formaPagamento: {
        type: String,
        required: [true, "A forma de pagamento é obrigatória."],
        enum: {
            values: ['Dinheiro', 'Pix', 'Cartão'],
            message: '{VALUE} não é uma forma de pagamento válida.'
        }
    },
    observacao: {
        type: String,
        required: false,
        trim: true,
    },
    valorUnitario: {
        type: Number,
        required: false,
        min: [0, "O valor unitário não pode ser negativo."]
    },
    valorTotal: {
        type: Number,
        required: false,
        min: [0, "O valor total não pode ser negativo."]
    },
    status: {
        type: String,
        default: 'Pendente',
        enum: {
            values: ['Pendente', 'Pago', 'Entregue'],
            message: '{VALUE} não é um status válido.'
        }
    }
}, { timestamps: true });

const Pedido = mongoose.model('Pedido', pedidoSchema);