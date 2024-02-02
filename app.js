let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let numero = 10
let tentativas = 1;
console.log(numeroSecreto)

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag, texto);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {rate: 1.2});
  
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1' , 'Jogo do Número Secreto');
exibirTextoNaTela('p' , `Escolha um número entre 1 e ${numero}`);
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela('h1' , 'Acertou !');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} ! , com ${tentativas} ${palavraTentativa} !`
        exibirTextoNaTela('p' , mensagemTentativas); 
       document.getElementById('reiniciar').removeAttribute('disabled');
    }else if (chute < numeroSecreto){
        exibirTextoNaTela('h1' , 'Você Errou');
        exibirTextoNaTela('p' , `O numero secreto é maior que ${chute} !`);
    }else{
        exibirTextoNaTela('h1' , 'Você Errou');
        exibirTextoNaTela('p' , `O numero secreto é menor que ${chute} !`);
    }
    tentativas ++;
    limparCampo();

    
};

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio(); 
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }    
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}