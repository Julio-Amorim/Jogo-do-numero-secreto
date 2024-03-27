let listaDeNumerosSorteados = [];
let numLimite = 10;
let numSecreto = gerarNumAleatorio();
let tentativas = 1;

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Número Secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMenssagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMenssagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if(chute == numSecreto){
        exibirTextoNaTela('h1', 'Acertou!!!');

        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let menssagensTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        
        exibirTextoNaTela('p', menssagensTentativas);
        
        //habilitar botão de reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
            
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
            
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numLimite) {
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}

function reiniciarJogo() {
    numSecreto = gerarNumAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMenssagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
