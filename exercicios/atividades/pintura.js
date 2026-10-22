import promptSync from 'prompt-sync';
const prompt = promptSync();

let pintura = {
    nomePintura: "abapuru",
    nomeArtista: "Tarsila do Amaral",
    ano: "1928",
    curiosidade: "o quadro mais valioso brasileiro",
}

console.log(`minha pintura favarotia é ${pintura.nomePintura} feita por ${pintura.nomeArtista} em ${pintura.ano} e a curiosidade é ${pintura.curiosidade}`)