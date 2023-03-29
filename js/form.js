/*============================
    EVENTOS
============================*/

//O evento a seguir recebe os valores do forms e adiciona na tabela
botao.addEventListener("click", function (event) {


    event.preventDefault();

    //Armazena o formulário em uma variável
    var form = document.querySelector("#formulario");

    //Armazena a tabela em uma variável
    var tabela = document.querySelector("#tabela");

    tabela.appendChild(montaTr(obtemEncomenda(form)));


})


function obtemEncomenda(form) {
    var encomenda = {
        nome: form.nome.value,
        produto: form.produto.value,
        qtde: form.quantit.value,
        unitario: formataValor(form.value.value),
        total: calculaTotal(form.quantit.value, form.value.value),
    }
    return encomenda;
}

function montaTr(encomenda) {

    //Criando uma linha que será adicionada na tabela
    const encomendaTr = document.createElement('tr');

    //Adicionando as colunas à linha
    encomendaTr.appendChild(montaTd(encomenda.nome, 'nome'));
    encomendaTr.appendChild(montaTd(encomenda.produto, 'produto'));
    encomendaTr.appendChild(montaTd(encomenda.qtde, 'quantit'));
    encomendaTr.appendChild(montaTd(encomenda.unitario, 'value'));
    encomendaTr.appendChild(montaTd(encomenda.total, 'total'));

    return encomendaTr;

}

function montaTd(dados, classe) {
    var td = document.createElement('td');
    td.textContent = dados;
    td.classList.add(classe);

    return td;
}