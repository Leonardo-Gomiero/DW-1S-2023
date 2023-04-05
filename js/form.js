/*============================
    EVENTOS
============================*/

//O evento a seguir recebe os valores do forms e adiciona na tabela
botao.addEventListener("click", function (event) {


    event.preventDefault();

    //Armazena o formulário em uma variável
    var form = document.querySelector("#formulario");

    //Valida o formulário
    var validacao = validaEncomenda(obtemEncomenda(form));
    if(validacao.length > 0){
        exibeMensagemErro(validacao);
        return;
    }

    //Armazena a tabela em uma variável
    var tabela = document.querySelector("#tabela");

    tabela.appendChild(montaTr(obtemEncomenda(form)));
    apagaErros();

    //Limpa o formulário
    form.reset();
})


function obtemEncomenda(form) {
    var encomenda = {
        nome: form.nome.value,
        produto: form.produto.value,
        qtde: form.quantit.value,
        unitario: form.value.value,
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
    encomendaTr.appendChild(montaTd(formataValor(encomenda.unitario), 'value'));
    encomendaTr.appendChild(montaTd(encomenda.total, 'total'));

    return encomendaTr;

}

function montaTd(dados, classe) {
    var td = document.createElement('td');
    td.textContent = dados;
    td.classList.add(classe);
    
    return td;
}

//Funcao de validacao do preenchimento do formulario
function validaEncomenda(encomenda){
    var erros = [];
    
    if(!validaNome(encomenda.nome)){
        erros.push("Nome inválido");
    }

    else if(!validaQtde(encomenda.qtde)){
        erros.push("A quantidade é inválida");
    }

    else if(!validaProduto(encomenda.produto)){
        erros.push("Selecione um produto");
    }

    else if(!validaUnitario(encomenda.unitario)){
        erros.push("O valor unitário é inválido");
    }

    apagaErros();

    return erros;
}

//Funcao para exibir as mensagens de erro
function exibeMensagemErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        li.style.color = "red";
        ul.appendChild(li);
    });
}