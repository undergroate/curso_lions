import promptSync from 'prompt-sync';
import {
  adicionarBaralho,
  listarBaralhos,
  atualizarBaralho,
  removerBaralho
} from './controllers/baralhoController.js';

import {
  adicionarFlashcard,
  listarFlashcards,
  listarFlashcardsPorBaralho,
  atualizarFlashcard,
  removerFlashcard,
  buscarPorPergunta
} from './controllers/flashcardController.js';

const prompt = promptSync();
let opcao = '';

while (opcao !== '0') {
  console.log('\n==============================');
  console.log('🧠 SISTEMA DE FLASHCARDS');
  console.log('==============================');
  console.log('1. Adicionar Baralho');
  console.log('2. Listar Baralhos');
  console.log('3. Atualizar Baralho');
  console.log('4. Remover Baralho');
  console.log('------------------------------');
  console.log('5. Adicionar Flashcard');
  console.log('6. Listar Todos os Flashcards');
  console.log('7. Listar Flashcards por Baralho');
  console.log('8. Atualizar Flashcard');
  console.log('9. Remover Flashcard');
  console.log('10. Buscar Flashcard por Pergunta');
  console.log('0. Sair');
  console.log('==============================');

  opcao = prompt('Escolha uma opção: ');

  switch (opcao) {
    case '1':
      const titulo = prompt('Título do novo baralho: ');
      adicionarBaralho(titulo);
      break;
    case '2':
      listarBaralhos();
      break;
    case '3':
      const idBaralhoAtt = Number(prompt('ID do baralho a atualizar: '));
      const novoTitulo = prompt('Novo título: ');
      atualizarBaralho(idBaralhoAtt, novoTitulo);
      break;
    case '4':
      const idBaralhoRem = Number(prompt('ID do baralho a remover: '));
      removerBaralho(idBaralhoRem);
      break;
    case '5':
      const pergunta = prompt('Pergunta: ');
      const resposta = prompt('Resposta: ');
      const idBaralhoVinc = Number(prompt('ID do baralho ao qual pertence: '));
      adicionarFlashcard(pergunta, resposta, idBaralhoVinc);
      break;
    case '6':
      listarFlashcards();
      break;
    case '7':
      const idBaralhoFiltro = Number(prompt('Digite o ID do baralho: '));
      listarFlashcardsPorBaralho(idBaralhoFiltro);
      break;
    case '8':
      const idFlashAtt = Number(prompt('ID do flashcard a atualizar: '));
      const novaPergunta = prompt('Nova pergunta: ');
      const novaResposta = prompt('Nova resposta: ');
      atualizarFlashcard(idFlashAtt, novaPergunta, novaResposta);
      break;
    case '9':
      const idFlashRem = Number(prompt('ID do flashcard a remover: '));
      removerFlashcard(idFlashRem);
      break;
    case '10':
      const termo = prompt('Digite parte da pergunta: ');
      buscarPorPergunta(termo);
      break;
    case '0':
      console.log('👋 Saindo do sistema...');
      break;
    default:
      console.log('⚠️ Opção inválida! Tente novamente.');
  }
}