var botaoAdicionar = document.querySelector("#buscar-encomendas")

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomendas_web");
    xhr.addEventListener("load", function(){
        //console.log(xhr.responseText);
        var resposta = xhr.responseText;
        console.log(typeof resposta);

        var encomendas = JSON.parse(resposta);
        console.log(encomendas);
        console.log(typeof encomendas);

        encomendas.forEach(function(encomenda){
            adicionaEncomendaNaTabela(encomenda);
        });

    });
    xhr.send();
})