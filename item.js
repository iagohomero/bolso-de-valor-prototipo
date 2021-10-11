
let itens = [];
let categoria = new URL(window.location.href).searchParams.get("categoria");

onload = () => {
    if(categoria){
        localStorage.setItem("categoria", categoria);
    }
    else{
        categoria = localStorage.getItem("categoria");
    }
    const itensSalvos = JSON.parse(localStorage.getItem('itens'));
    if(itensSalvos) itens = itensSalvos;
    console.log(itens);
    atualizaNomeCategoria();
    atualizaListagemItens();
}

let onClickSalvarItem = function(){
    let nome = document.getElementById("item-nome").value;
    let desc = document.getElementById("item-desc").value;
    let valor = document.getElementById("item-valor").value;
    let mes = document.getElementById("item-mes").value;
    if(nome && valor && mes){
        let item = new Item(nome, desc, categoria, valor, mes);
        itens.push(item);
        salvarItem();
    }
    mudarVisualizacaoItem();
    atualizaListagemItens();
}

let atualizaListagemItens = function(){
    const listaItens = document.querySelector('#div-item-list');
    let mes = document.getElementById("item-mes").value;
    let itensListagem = itens.filter(item => item.categoria == categoria && item.mes == mes);
    let html = "";
    itensListagem.forEach(item => {
        html += "<div class='row'>"+
            "<div class='col-4'>"+ item.nome +"</div>" +
            "<div class='col-4'>"+ item.valor +"</div>" +
            "<div class='col-4'><button class='btn btn-danger' onclick='excluirItem(\""+item.id+"\")'>Excluir</button></div>" +
            "</div>" +
            "<hr>";
    });
    listaItens.innerHTML = html;
}

let salvarItem = function(){
    localStorage.setItem('itens', JSON.stringify(itens));
}

let mudarVisualizacaoItem = function(){
    let divList = document.getElementById("div-item-list");
    let divCreate = document.getElementById("div-item-create");
    if(divList.classList.contains("d-none")){
        divList.classList.remove("d-none");
        divCreate.classList.add("d-none");

    }
    else{
        divCreate.classList.remove("d-none");
        divList.classList.add("d-none");
    }
}

let excluirItem = function(id){
    itens = itens.filter(item => item.id != id);
    salvarItem();
    atualizaListagemItens();
}

let atualizaNomeCategoria = function(){
    let nomeCategoria = "";
    switch (categoria) {
        case "1":
            nomeCategoria = "Alimentação";
            break;
        case "2":
            nomeCategoria = "Saúde";
            break;
        case "3":
            nomeCategoria = "Transporte";
            break;
        case "4":
            nomeCategoria = "Viagem";
            break;
        case "5":
            nomeCategoria = "Educação";
            break;
        case "6":
            nomeCategoria = "Roupas";
            break;
        default:
            break;
    }
    document.getElementById("nome-categoria").innerHTML = nomeCategoria;
}

class Item{
    constructor(nome, descricao, categoria, valor, mes) {
        this.id = Math.random().toString(16).slice(2);
        this.nome = nome;
        this.descricao = descricao;
        this.categoria = categoria;
        this.valor = valor;
        this.mes = mes;
    }
}