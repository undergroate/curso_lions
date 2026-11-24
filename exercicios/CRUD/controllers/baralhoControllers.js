import baralhos from '../data/baralho.js';
import flashcards from '../data/flashcard.js';

export function adicionarBaralho(titulo) {
  const novoId = baralhos.length > 0 ? baralhos[baralhos.length - 1].id + 1 : 1;
  const novoBaralho = { id: novoId, titulo };
  baralhos.push(novoBaralho);
  console.log('✅ Baralho adicionado com sucesso!');
}

export function listarBaralhos() {
  console.log('\n--- 📚 LISTA DE BARALHOS ---');
  if (baralhos.length === 0) {
    console.log('Nenhum baralho cadastrado.');
    return;
  }
  baralhos.forEach(b => console.log(`ID: ${b.id} | Título: ${b.titulo}`));
}

export function atualizarBaralho(id, novoTitulo) {
  const baralho = baralhos.find(b => b.id === id);
  if (!baralho) {
    console.log('❌ Baralho não encontrado.');
    return;
  }
  baralho.titulo = novoTitulo;
  console.log('✅ Baralho atualizado com sucesso!');
}

export function removerBaralho(id) {
  const indice = baralhos.findIndex(b => b.id === id);
  if (indice === -1) {
    console.log('❌ Baralho não encontrado.');
    return;
  }

  // Remove o baralho usando splice
  baralhos.splice(indice, 1);

  // Exclusão em cascata: remove todos os flashcards vinculados a esse baralho
  // Percorremos de trás para frente para o splice não pular nenhum item
  for (let i = flashcards.length - 1; i >= 0; i--) {
    if (flashcards[i].idBaralho === id) {
      flashcards.splice(i, 1);
    }
  }

  console.log('✅ Baralho e seus flashcards vinculados foram removidos!');
}