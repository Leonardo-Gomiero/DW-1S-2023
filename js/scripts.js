var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";

//Captura os dados do cliente
var clientes = document.querySelectorAll(".cliente");
var totais = document.querySelectorAll(".total");

console.log(clientes);

for (var i = 0; i < clientes.length; i++){
    console.log(clientes[i].querySelector(".qtde").textContent);
    console.log(clientes[i].querySelector(".valor").textContent);

    var quantidade = clientes[i].querySelector(".qtde").textContent;
    var valor = clientes[i].querySelector(".valor").textContent;

    var total = quantidade * valor;

    clientes[i].querySelector(".total").textContent = total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
}