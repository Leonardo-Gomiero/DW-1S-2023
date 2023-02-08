var titulo = document.querySelector(".titulo");
titulo.textContent = "Lista de Encomendas";

//Captura os dados do cliente
var cliente = document.querySelector(".cliente1");

//Captura a quantidade de encomenda
var valor = cliente.querySelector(".valor").textContent;
var qtde = cliente.querySelector(".qtde").textContent;

total = valor * qtde;

cliente = document.querySelector(".cliente2");
valor = cliente.querySelector(".valor").textContent;
qtde = cliente.querySelector(".qtde").textContent;

total += valor*qtde;

cliente = document.querySelector(".cliente3");
valor = cliente.querySelector(".valor").textContent;
qtde = cliente.querySelector(".qtde").textContent;

total += valor*qtde;

cliente = document.querySelector(".cliente4");
valor = cliente.querySelector(".valor").textContent;
qtde = cliente.querySelector(".qtde").textContent;

total += valor*qtde;

console.log("Total a ser pago: R$" + total)