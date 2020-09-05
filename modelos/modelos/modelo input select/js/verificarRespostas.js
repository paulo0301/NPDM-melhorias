/* GABARITO ----------------------------------*/
var R = [1, 2, 3, 4, "texto"];
/* -------------------------------------------*/

var nQuestoes = R.length;

// Variáveis correspondente as respostas
var acertos = 0;
var erros = 0;

//Mensagens
var m01 = document.getElementById("m01");
var m02 = document.getElementById("m02");

function ocultarMensagens(){
    m01.style.display = "none";
    m02.style.display = "none";
}

//Verificar se a resposta está correta
function verificarRespostas(){
    for(let i = 1; i <= nQuestoes; i++){
        var elemento = document.querySelector("span#rs0"+i);   
        var resposta = document.getElementById("0"+i);
        elemento.innerHTML = "";
        var img = document.createElement("img");
        elemento.appendChild(img);
        if(resposta.value != ""){
            if(R[i-1] == resposta.value){
                img.setAttribute("src", "images/correct-symbol.png");
                resposta.disabled = true;
                acertos++;
            }
            else{
                img.setAttribute("src", "images/cancel-mark.png");
                erros++;
            }
        }
    }
}
//EXIBIR MENSAGEM
function exibirMensagem(){
    ocultarMensagens();
    if(acertos == nQuestoes){
        m01.style.display = "inline-block";
    }
    else{
        m02.style.display = "inline-block";
    }
}


//Limpar a resposta
function limparRespostas(){
    for(let i = 1; i <= nQuestoes; i++){
        var caixa = document.getElementById("0"+i);
        if(caixa.value == R[i-1])caixa.disabled = true;
        else{
            caixa.disabled = false;
            var avaliacao = document.getElementById("rs0"+i);
            avaliacao.innerHTML = "";
            var opt = caixa.getElementsByTagName("option");
            caixa.value = opt[0].value;
        } 
    }
}

var verificar = document.querySelector("input#confirmar");
var limpar = document.querySelector("input#limpar");
var refazer = document.querySelector("input#refazer");

limpar.onclick = function(){
    limparRespostas();
    ocultarMensagens();
    verificar.style.display = "inline-block"
    limpar.style.display = "none";
}

refazer.onclick = function(){
    for(let i = 1; i <= nQuestoes; i++){
        var caixa = document.getElementById("0"+i);
        caixa.disabled = false;
        var avaliacao = document.getElementById("rs0"+i);
        avaliacao.innerHTML = "";
        var opt = caixa.getElementsByTagName("option");
        caixa.value = opt[0].value;
    }
    ocultarMensagens();
    verificar.style.display = "inline-block"
    limpar.style.display = "none";
    refazer.style.display = "none";
}

verificar.onclick = function(){
    acertos = 0;
    erros = 0;
    verificarRespostas();
    if(acertos != nQuestoes){
        limpar.style.display = "inline-block";
        verificar.style.display = "none";
    }
    if(acertos == nQuestoes){
        refazer.style.display = "inline-block";
        verificar.style.display = "none";
    }
    exibirMensagem();
    travarTodas();
}

function travarTodas(){
    for(let i = 1; i <= nQuestoes; i++){
        var caixa = document.getElementById("0"+i);
        caixa.disabled = true;
    }
}