class BuscarHtml {
    constructor() { }
    
    nFilmes() {
        return document.querySelector(".i-nome")
    }
    Descricao() {
        return document.querySelector(".i-descricao")
    }
    imagem() {
        return document.querySelector(".i-imgfilme")
    }
    nDiretor() {
        return document.querySelector(".i-diretor")
    }
    tempoFilme() {
        return document.querySelector(".i-timefilme")
    }
    dataLancamento() {
        return document.querySelector(".i-data")
    }
    btnCadastrar() {
        return document.querySelector("#botaoadicionar");
    }
}
const filme = new BuscarHtml()

export default filme 