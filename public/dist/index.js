var controles = document.querySelectorAll('[data-controle]');
var estatisticas = document.querySelectorAll('[data-estatistica]');
var robotron = document.querySelector('.robotron');
var robos = [
    'assets/img/RobotronPreto.png',
    'assets/img/RobotronVermelho.png',
    'assets/img/RobotronAmarelo.png',
    'assets/img/robotron.png',
    'assets/img/RobotronPreto.png',
    'assets/img/RobotronBranco.png',
    'assets/img/RobotronRosa.png'
];
var pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos": {
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas": {
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes": {
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};
controles.forEach(function (controle) {
    controle.addEventListener('click', function (evento) {
        evento.preventDefault();
        var operacao = evento.target.innerHTML;
        atualizarControles(evento, operacao);
    });
});
function atualizarControles(controle, operacao) {
    var dataPeca = controle.target.parentNode;
    var pecasContador = dataPeca.children[1];
    if (operacao === '-') {
        if (pecasContador.value > 0) {
            pecasContador.value = parseInt(pecasContador.value) - 1;
        }
    }
    else {
        pecasContador.value = parseInt(pecasContador.value) + 1;
        somarEstatisticas(controle);
    }
}
function somarEstatisticas(dados) {
    var dadosPeca = dados.target.dataset.peca;
    estatisticas.forEach(function (estatistica) {
        estatistica.textContent = parseInt(estatistica.textContent) + pecas[dadosPeca][estatistica.dataset.estatistica];
    });
}
robotron.addEventListener('click', function (e) {
    e.preventDefault();
    var robo = document.querySelector('.robo');
    mudarCores();
    function mudarCores() {
        numbers = Math.floor(Math.random() * 7);
        robo.src = robos[numbers];
    }
});
