var titulo = document.querySelector(".titulo");
var titulo2 = document.querySelector(".titulo2");
titulo.textContent = "Lista de Encomendas";
titulo2.textContent = "Adicionar nova encomenda";

var botao = document.querySelector("#id-botao");



//Obtendo os valores dos campos:
var nome = document.querySelector("#nome");
var quantidadeSel = document.querySelector("#quantit");
var produto = document.querySelector("#produto");
var valorUni = document.querySelector("#value");

//Captura os dados do cliente
var clientes = document.querySelectorAll(".cliente");
var totais = document.querySelectorAll(".total");



console.log(clientes);


for (var i = 0; i < clientes.length; i++) {

    var qtd = clientes[i].querySelector(".qtde").textContent;

    var val = clientes[i].querySelector(".valor").textContent;

    var nome = clientes[i].querySelector(".nome").textContent;

    if (validaUnitario(val) && validaQtde(qtd)) {
        clientes[i].querySelector(".valor").textContent = formataValor(val);
        clientes[i].querySelector(".total").textContent = formataValor(calculaTotal(qtd,val));
    }
    else if (!validaUnitario(val) && !validaQtde(qtd)) {
        clientes[i].querySelector(".valor").textContent = "Valor e quantidade inválidos";
        clientes[i].querySelector(".total").textContent = "Valor e quantidade inválidos";
        clientes[i].querySelector(".qtde").textContent = "Valor e quantidade inválidos";
        clientes[i].classList.add("Invalid");
    }
    else {
        if (!validaUnitario(val)) {
            clientes[i].querySelector(".valor").textContent = "Valor inválido";
            clientes[i].querySelector(".total").textContent = "Valor inválido";
            clientes[i].classList.add("Invalid");
        }

        else if (!validaQtde(qtd)) {
            clientes[i].querySelector(".qtde").textContent = "Quantidade inválida";
            clientes[i].querySelector(".total").textContent = "Quantidade inválida";
            clientes[i].classList.add("Invalid");
        }
    }
}





//Funcao para formatacao de valor
function formataValor(valor){
    var valorFor = parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valorFor;
}

//Funcao para calcular o valor total
function calculaTotal(qtde, val){
    var total = 0;
    total = qtde * val;
    return formataValor(total);
}

//Funcao para validacao da quantidade
function validaQtde(qtde){
    if(!isNaN(qtde) && qtde > 0){
        return true;
    }else{
        console.log("Quantidade: " + qtde);
        return false;
    }
}

//Funcao para validacao do Valor Unitario
function validaUnitario(val){
    if(!isNaN(val) && val > 0){
        return true;
    }else {
        console.log("Valor: " + val);
        return false;
    }
}

function validaProduto(prod){
    if(prod != "Selecione"){
        return true;
    }else {
        console.log("Produto:" + prod);
        return false;
    }
}

function validaNome(nome){
    console.log(nome.length)
    if(isNaN(nome) && nome.length > 0){
        return true;
    }else {
        return false;
    }
}

//Apagando as mensagens de erro antes de exibir uma nova mensagem:
function apagaErros(){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = '';
}