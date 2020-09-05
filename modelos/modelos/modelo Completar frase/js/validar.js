const gabarito = [[3,2,3], [4,2,4]];

var selects = document.querySelectorAll('select');

//Inputs
var inputConfirmar = document.querySelector("input#confirmar");
var inputRefazer = document.querySelector("input#refazer");
var inputTenteNovamente = document.querySelector("input#tente-novamente");

//Ps
var mensagemErrada = document.querySelector("p#errado");
var mensagemCorreta = document.querySelector("p#correto");

var nGabarito = gabarito.length;
var qtdSelects = selects.length;

var verificador = 0;
var t = 0;

function funcao(item){
    t = 0;
    for(let k = 0; k < qtdSelects; k++){
        if(selects[k].value == item[k])t++;
    }
    if(t == qtdSelects)verificador = 1;
}

function verificar(){
    verificador = 0;
    
    gabarito.forEach(funcao);
    
    if(verificador == 1){
        mensagemCorreta.style.display = "inline-block"
        inputConfirmar.style.display = "none";
        inputRefazer.style.display = "inline-block";
    }
    else{
        mensagemErrada.style.display = "inline-block"
        inputConfirmar.style.display = "none";
        inputTenteNovamente.style.display = "inline-block";
    }
    bloquearSelects();
}

function bloquearSelects(){
    for(let k = 0; k < qtdSelects; k++){
        selects[k].disabled = true;
    }
}

function desbloquearSelects(){
    for(let k = 0; k < qtdSelects; k++){
        selects[k].disabled = false;
    }
}

inputConfirmar.addEventListener("click", verificar);

inputRefazer.onclick = function(){
    inputConfirmar.style.display = "inline-block";
    inputRefazer.style.display = "none";
    mensagemCorreta.style.display = "none"
    mensagemErrada.style.display = "none"

    for(let k = 0; k < qtdSelects; k++){
        selects[k].value = 0;
    }

    desbloquearSelects();
}

inputTenteNovamente.onclick = function(){
    inputConfirmar.style.display = "inline-block";
    inputTenteNovamente.style.display = "none";
    mensagemCorreta.style.display = "none"
    mensagemErrada.style.display = "none"

    
    desbloquearSelects();
}