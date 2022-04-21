import filme from "./modelo.js"

const btn = filme.btnCadastrar()
btn.addEventListener("click", () => {
    mostraFilmes(adicionarFilmes())
})

function adicionarFilmes() {
    
    const nameFilme = filme.nFilmes()
    const descricao = filme.Descricao()
    const nomeDiretor = filme.nDiretor()
    const tFilme = filme.tempoFilme()
    const dLancamento = filme.dataLancamento()
    const imagem = filme.imagem()
    
    const objFilme = {
        nome: nameFilme.value,
        descricao: descricao.value,
        nameDiretor: nomeDiretor.value,
        tempoFilme: tFilme.value,
        dataLancamento: dLancamento.value,
        imagem: imagem.value
    }
    console.log(objFilme)

    return objFilme

}
function constructorObject(obj) {

    const div = document.createElement('div')
    div.className = 'componenet-filme'
    const h2 = document.createElement('h2')
    const descricao = document.createElement('p')
    const diretor = document.createElement('p')
    const tempoFilme = document.createElement('p')
    const dLancamento = document.createElement('p')
    const elementImg = document.createElement('img')
    obj.imagem.endsWith(".jpg")
    elementImg.src = obj.imagem

    h2.innerHTML = `${obj.nome}`
    descricao.innerHTML = `${obj.descricao}`
    diretor.innerHTML = `<span>Diretor: </span>${obj.nameDiretor}`
    tempoFilme.innerHTML = `${obj.tempoFilme}`
    dLancamento.innerHTML = `${obj.dataLancamento}`

    div.appendChild(elementImg)
    div.appendChild(h2)
    div.appendChild(descricao)
    div.appendChild(diretor)
    div.appendChild(tempoFilme)
    div.appendChild(dLancamento)

    return div
}

function mostraFilmes(obj) {
    const mFilmes = document.querySelector(".mostrarFilmes")
    const resultado = constructorObject(obj)
    console.log(resultado)

    mFilmes.appendChild(resultado)
}


//console.log(adicionarFilmes())