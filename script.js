document.querySelector(".hamburguer").addEventListener("click", function(){
    document.querySelector(".container").classList.toggle("show-menu");
});

document.querySelector("#qtdPaginas").addEventListener("change", atualizarPreco);
document.querySelector("#js").addEventListener("change", atualizarPreco);
document.querySelector("#layout-sim").addEventListener("change", atualizarPreco);
document.querySelector("#layout-nao").addEventListener("change", atualizarPreco);
document.querySelector("#prazo").addEventListener("change", function(){
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = "Prazo: "+prazo+" Semana(s)"
    atualizarPreco()
});

function atualizarPreco(){
    const qtdPaginas = document.querySelector("#qtdPaginas").value
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value

    var preco = qtdPaginas * 100;
    if(temJS){
        preco *= 1.1;
    }
    if(incluiLayout){
        preco += 500;
    }
    let taxaUrgencia = 1 - prazo*0.1;
    preco *= 1 + taxaUrgencia;

    document.querySelector("#preco").innerHTML = "R$: "+ preco.toFixed(2);

}
