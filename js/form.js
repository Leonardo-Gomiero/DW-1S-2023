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
        unitario: form.value.value,
    }
    return encomenda;
}

function montaTr(encomenda) {

    //Criando uma linha que será adicionada na tabela
    const encomendaTr = document.createElement('tr');

    //Criando colunas que serão adicionadas à linha criada acima
    const colNome = montaTd(encomenda.nome, 'nome');
    const colProduto = montaTd(encomenda.produto, 'produto');
    const colQuantidade = montaTd(encomenda.qtde, 'quantit');
    const colValor = montaTd(encomenda.unitario, 'value');
    const colTotal = montaTd(0, 'total');

    //Adicionando as colunas à linha
    encomendaTr.appendChild(colNome);
    encomendaTr.appendChild(colProduto);
    encomendaTr.appendChild(colQuantidade);
    encomendaTr.appendChild(colValor);
    encomendaTr.appendChild(colTotal);

    return encomendaTr;

}

function montaTd(dados, classe) {
    var td = document.createElement('td');
    td.textContent = dados;
    td.classList.add(classe);

    return td;
}