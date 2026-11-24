import baralhos from '../data/baralho.js';
import flashcards from '../data/flashcard.js';

export function adicionarFlashcard(pergunta, resposta, idBaralho) {
  const baralhoExiste = baralhos.some(b => b.id === idBaralho);
  if (!baralhoExiste) {
    console.log('❌ Erro: O ID do baralho informado não existe.');
    return;
  }

  const novoId = flashcards.length > 0 ? flashcards[flashcards.length - 1].id + 1 : 1;
  const novoFlashcard = { id: novoId, pergunta, resposta, idBaralho };
  flashcards.push(novoFlashcard);
  console.log('✅ Flashcard adicionado com sucesso!');
}

export function listarFlashcards() {
  console.log('\n--- 🗂️ TODOS OS FLASHCARDS ---');
  if (flashcards.length === 0) {
    console.log('Nenhum flashcard cadastrado.');
    return;
  }
  flashcards.forEach(f => {
    console.log(`ID: ${f.id} | Baralho ID: ${f.idBaralho} | Pergunta: ${f.pergunta} | Resposta: ${f.resposta}`);
  });
}

export function listarFlashcardsPorBaralho(idBaralho) {
  console.log(`\n--- 🗂️ FLASHCARDS DO BARALHO ${idBaralho} ---`);
  const filtrados = flashcards.filter(f => f.idBaralho === idBaralho);
  if (filtrados.length === 0) {
    console.log('Nenhum flashcard encontrado para este baralho.');
    return;
  }
  filtrados.forEach(f => {
    console.log(`ID: ${f.id} | Pergunta: ${f.pergunta} | Resposta: ${f.resposta}`);
  });
}

export function atualizarFlashcard(id, novaPergunta, novaResposta) {
  const flashcard = flashcards.find(f => f.id === id);
  if (!flashcard) {
    console.log('❌ Flashcard não encontrado.');
    return;
  }
  flashcard.pergunta = novaPergunta;
  flashcard.resposta = novaResposta;
  console.log('✅ Flashcard atualizado com sucesso!');
}

export function removerFlashcard(id) {
  const indice = flashcards.findIndex(f => f.id === id);
  if (indice === -1) {
    console.log('❌ Flashcard não encontrado.');
    return;
  }
  flashcards.splice(indice, 1);
  console.log('✅ Flashcard removido com sucesso!');
}

export function buscarPorPergunta(termo) {
  console.log(`\n--- 🔍 RESULTADOS PARA "${termo}" ---`);
  const encontrados = flashcards.filter(f =>
    f.pergunta.toLowerCase().includes(termo.toLowerCase())
  );

  if (encontrados.length === 0) {
    console.log('Nenhum flashcard encontrado com essa pergunta.');
    return;
  }
  encontrados.forEach(f => {
    console.log(`ID: ${f.id} | Baralho ID: ${f.idBaralho} | Pergunta: ${f.pergunta} | Resposta: ${f.resposta}`);
  });
}