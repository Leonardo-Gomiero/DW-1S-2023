var tabela = document.querySelector("table");


tabela.addEventListener("dblclick", function (event) {

    console.log(event.target);

    //A linha que sofreu o duplo clique sera removida:
    //this.remove();
    
    event.target.parentNode.classList.add("fadeOut");
    
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 600);
    

   
});
