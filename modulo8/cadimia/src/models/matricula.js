import mongoose from 'mongoose';

const pedidoSchema = new mongoose.Schema({
  nomeCliente: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true  
  },
  modalidade: {
    type: String,
    required: true,
    enum: ['musculacao', 'funcional', 'dança']
  },
plano: {
    type: String,
    required: true,
    enum: ['mensal', 'trimestral', 'semestral',]
  },
  dataMatricula: {
    type: string,
    required: true    
  },
  valorMensal: {
    type: Number,
    required: true
  },
  valorTotal: {
    type: Number
  },
  status: {
    type: String,
    default: 'ativa',
    enum: ['ativa', 'cancelada', 'pausada']
  }
});

const matricula = mongoose.model('Matricula', matriculaSchema);

export default matricula;