let saldos = []; 

onload = () => {
    const saldosSalvos = JSON.parse(localStorage.getItem('saldos'));
    if(saldosSalvos) saldos = saldosSalvos;
}

let onClickSalvarSaldo = function(){
    let valor = document.getElementById("saldo-valor").value;
    let mes = document.getElementById("saldo-mes").value;
    if(valor && mes){
        let saldo = new Saldo(valor, mes);
        saldos.push(saldo);
        salvarSaldo();
    }
}

let salvarSaldo = function(){
    localStorage.setItem('saldos', JSON.stringify(saldos));
}

let exibeSaldo = function(){
    let mes = document.getElementById("saldo-mes").value;
    saldo = 
}

let mudarVisualizacaoSaldo = function(){
    let divList = document.getElementById("div-saldo");
    let divCreate = document.getElementById("div-saldo-create");
    if(divList.classList.contains("d-none")){
        divList.classList.remove("d-none");
        divCreate.classList.add("d-none");

    }
    else{
        divCreate.classList.remove("d-none");
        divList.classList.add("d-none");
    }
}

let getSaldoMensal = function(){
    
}

class Saldo{
    constructor(valor, mes) {
        this.id = Math.random().toString(16).slice(2);
        this.valor = valor;
        this.mes = mes;
    }
}