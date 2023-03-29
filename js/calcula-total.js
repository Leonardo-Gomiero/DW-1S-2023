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
    console.log("Quantidade:(" + i + "): "  + clientes[i].querySelector(".qtde").textContent);
    console.log("Valor(" + i + "): "  + clientes[i].querySelector(".valor").textContent);

    var quantidade = clientes[i].querySelector(".qtde").textContent;
    var valor = clientes[i].querySelector(".valor").textContent;

    valor *= 1;

    clientes[i].querySelector(".valor").textContent = formataValor(valor);

    var total = calculaTotal(quantidade, valor);

    clientes[i].querySelector(".total").textContent = calculaTotal(quantidade, valor);
    console.log("TOTAL: " + total);     
}

//Funcao para formatacao de valor
function formataValor(valor){
    var valor = parseFloat(valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return valor;
}

//Funcao para calcular o valor total
function calculaTotal(qtde, unidade){
    var total = 0;
    total = qtde * unidade;
    return formataValor(total);
}