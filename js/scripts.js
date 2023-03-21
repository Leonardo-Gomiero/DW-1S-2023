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

//Armazena a tabela em uma variável
var tabela = document.querySelector("#tabela");

console.log(clientes);

for (var i = 0; i < clientes.length; i++) {
    console.log("Quantidade:(" + i + "): "  + clientes[i].querySelector(".qtde").textContent);
    console.log("Valor(" + i + "): "  + clientes[i].querySelector(".valor").textContent);

    var quantidade = clientes[i].querySelector(".qtde").textContent;
    var valor = clientes[i].querySelector(".valor").textContent;

    valor *= 1;

    clientes[i].querySelector(".valor").textContent = valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    var total = quantidade * valor;

    clientes[i].querySelector(".total").textContent = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    console.log("TOTAL: " + total);     
}



/*============================
    EVENTOS
============================*/

//O evento a seguir recebe os valores do forms e adiciona na tabela
botao.addEventListener("click", function(event){

    
    event.preventDefault();
    console.log("O título foi clicado, hein");
    console.log("Nome: "  + nome.value);
    console.log("Quantidade: "  + quantidadeSel.value);
    console.log("Produto: "  + produto.value);
    console.log("Valor unitário: "  + valorUni.value);
    

    //Criando uma linha que será adicionada na tabela
    const linha = document.createElement('tr');

    //Criando colunas que serão adicionadas à linha criada acima
    const colNome = document.createElement('td');
    const colProduto = document.createElement('td');
    const colQuantidade = document.createElement('td');
    const colValor = document.createElement('td');
    const colTotal = document.createElement('td');

    //Atribuindo valores às colunas
    colNome.textContent = nome.value;
    colProduto.textContent = produto.value;
    colQuantidade.textContent = quantidadeSel.value;
    colValor.textContent = valorUni.value;
    colTotal.textContent = quantidadeSel.value * valorUni.value;

    //Adicionando as colunas à linha
    linha.appendChild(colNome);
    linha.appendChild(colProduto);
    linha.appendChild(colQuantidade);
    linha.appendChild(colValor);
    linha.appendChild(colTotal);

    //Adicionando a linha à tabela
    tabela.appendChild(linha);

})