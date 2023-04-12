var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    //console.log(this.value);
    var clientes = document.querySelectorAll(".cliente");

    for (var i = 0; i < clientes.length; i++){
        var cliente = clientes[i];
        var tdNome = cliente.querySelector(".nome");
        var nome = tdNome.textContent;

        if(nome != this.value){
            //Não é igual, oculta linha
            cliente.classList.add("invisivel");

        }else{
            //É igual, exibe a linha
            cliente.classList.remove("invisivel");
        }
    }
})