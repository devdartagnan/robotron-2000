/*import {robos, pecas} from './infos.js'

const controles = document.querySelectorAll('[data-controle]')
const estatisticas = document.querySelectorAll('[data-estatistica]')
//const robo = document.querySelector('[data-robo]')

controles.forEach((elemento) => {
    elemento.addEventListener('click', (evento) => {
        mudarNumeros(evento.target.dataset.controle, evento.target.parentNode)
        atualizaEstatistica(evento.target.dataset.peca)
    })
})

function mudarNumeros(operacao, controle) {
    const peca = controle.querySelector('[data-contador]')

    if (operacao === '-') {
        peca.value = parseInt(peca.value) - 1
    } else {
        peca.value = parseInt(peca.value) + 1
    }
}
function atualizaEstatistica(peca) {
    estatisticas.forEach((elemento:HTMLInputElement) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
}


robo.addEventListener('click', (evento) => {
    mudarCores()
})
function mudarCores() {
    numbers = Math.floor(Math.random() * 7)
    robo.src = robos[numbers]
}*/