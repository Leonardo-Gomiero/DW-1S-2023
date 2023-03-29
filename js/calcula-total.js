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


for (var i=0; i < clientes.length; i++){

    var qtd = clientes[i].querySelector(".qtde").textContent;

    var uni = clientes[i].querySelector(".valor").textContent;

        if (!validaQtde(qtd)) {

            clientes[i].querySelector(".qtde").textContent = "Quantidade Inválida"
            clientes[i].style.backgroundColor = "#e9c13e";
            //clientes[i].classList.add("erro");
            //console.log("A quantidade encomendada pelo(a) cliente "+ clientes[i].querySelector(".nome").textContent + " é inválida.")
        }
        else {

            //QTDE é válida, verifica o valor unitário
            if(!validaUnitario(uni)){

                //Aqui se não for válido
                clientes[i].querySelector(".valor").textContent = "Unitário inválido"
                clientes[i].style.backgroundColor = "#ee3535";
                
            }
            else {
                //Exibe o valor total da encomenda
                clientes[i].querySelector(".total").textContent = calculaTotal(qtd,uni);
                
                // Formata o valor unitario
                clientes[i].querySelector(".valor").textContent = formataValor(uni);
            }
        }
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

//Funcao para validacao da quantidade
function validaQtde(qtde){
    if(!isNaN(qtde) && qtde > 0){
        return true;
    }else{
        return false;
    }
}

//Funcao para validacao do Valor Unitario
function validaUnitario(unitario){
    if(!isNaN(unitario) && unitario > 0){
        return true;
    }else {
        return false;
    }
}