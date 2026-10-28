function adicionarContato(contato, novocontato) {  
    let emailExiste = false;

    for(i = 0; i < contato.length; i++) {
        if(contato[i].email === novocontato.email) {
            emailExiste = true;
            break; 
        }
}
if (emailExiste) {
    console.log("Email já cadastrado!");
    return false;
} 
else {
    contato.push(novocontato);
    console.log("Contato adicionado com sucesso!");
}
if (contato.length > 0) {
    let ultimoContato = contatos[contato.length - 1];
    novocontato.id = ultimoContato.id + 1;
}
    contato.push(novocontato);
    return true;
}   
export default adicionarContato;