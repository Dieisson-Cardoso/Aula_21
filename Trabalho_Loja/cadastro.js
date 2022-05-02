function cadastrarProduto(){
    var nomes = document.getElementById("nomes");
    var tamanhos = document.getElementById("tamanhos");
    var precos = document.getElementById("precos");
    var clubes = document.getElementById("clubes");
    var estoques = document.getElementById("estoques");
    var pagamentos = document.getElementById("pagamentos");
    var codigos = document.getElementById("codigos");
    
    var dados = JSON.parse (localStorage.getItem("dadosproduto"));

    if(dados == null){
        localStorage.setItem("dadosproduto", "[]");
        dados = [];
    }
    var auxRegistro = {
        nome: nomes.value,
        tamanh: tamanhos.value,
        valor: precos.value,
        time: clubes.value,
        est: estoques.value,
        pag: pagamentos.value,
        id: codigos.value,
    }
    dados.push(auxRegistro);
    localStorage.setItem("dadosproduto", JSON.stringify(dados));
    alert("Cadastro salvo com sucesso")
    nomes.value = "";
    tamanhos.value = "";
    precos.value = "";
    clubes.value = "";
    estoques.value = "";
    pagamentos.value = "";
    codigos.value = "";


}
