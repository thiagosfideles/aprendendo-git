/*global Chart*/

//declaração de variaveis

//buscando dados json
async function recebeDados() {
    const resposta = await fetch('https://sigead.firebaseio.com/ead/0/informacoes.json')
    const dados = await resposta.json();
    return dados;
}

//carregando o grafico
window.onload = function () {

}

//criando construtor datasets
let graficoAlunosData = {
    labels: [],
    datasets: [ {
        type: 'line',
        label: 'Desistentes',
        fill: false,
        backgroundColor: 'rgba(255, 128, 128, 0.3)',
        borderColor: 'rgba(255, 128, 128, 1)',
        borderWidth: 2,
        data: [],
        order: 1
        },
        {
        type: 'bar',
        label: 'Matriculados',
        backgroundColor: 'rgba(31,171,137, 0.3)',
        borderColor: 'rgba(31,171,137, 1)',
        borderWidth: 1,
        data: []
    }]
};

let graficoAptosData = {
    labels: [],
    datasets: [{
        label: 'Aptos',
        backgroundColor: 'rgba(31,171,137, 0.3)',
        borderColor: 'rgba(31,171,137, 1)',
        borderWidth: 1,
        data: []
    }, {
        label: 'Não aptos',
        backgroundColor: 'rgba(255, 128, 128, 0.3)',
        borderColor: 'rgba(255, 128, 128, 1)',
        borderWidth: 1,
        data: []
    }]
};

let graficoResultadoData = {
    labels: [],
    datasets: [ {
        type: 'line',
        label: 'Aptos',
        fill: false,
        backgroundColor: 'rgba(31, 135, 171, 0.3)',
        borderColor: 'rgba(31, 135, 171, 1)',
        borderWidth: 2,
        data: [],
        },
        {
        type: 'bar',
        label: 'Matriculados',
        backgroundColor: 'rgba(31,171,137, 0.3)',
        borderColor: 'rgba(31,171,137, 1)',
        borderWidth: 1,
        data: []
    }]
};

//criando os graficos
window.onload = async function () {
    const ctx = document.getElementById('graficosAlunos').getContext('2d');
    window.graficosAlunos = new Chart(ctx, {
        type: 'bar',
        data: graficoAlunosData,
        options: {
            resposive: true,
            legend: {
                position: 'right'
            },
            tooltips: {
              mode: 'index',
              intersect: true
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
            }
        }

    });

    const ctx1 = document.getElementById('graficosAptos').getContext('2d');
    window.graficosAptos = new Chart(ctx1, {
        type: 'horizontalBar',
        data: graficoAptosData,
        options: {
            resposive: true,
            legend: {
                position: 'right'
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
            }
        }

    });

    const ctx2 = document.getElementById('graficosResultado').getContext('2d');
    window.graficosResultado = new Chart(ctx2, {
        type: 'bar',
        data: graficoResultadoData,
        options: {
            resposive: true,
            legend: {
                position: 'right'
            },
            tooltips: {
              mode: 'index',
              intersect: true
            },
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                    }
                }],
            }
        }

    });

}

//coletando dados para utilzar no grafico
async function preencheGrafico() {

    let moduloSelecionado = document.getElementById('selecionaModulo').value

    const dadosRecebidos = await recebeDados();
    if (graficoAlunosData.labels.length > 0) {
        graficoAlunosData.labels = []
    }

    if (graficoAlunosData.datasets[0].data.length > 0) {
        graficoAlunosData.datasets[0].data = []
    }

    if (graficoAlunosData.datasets[1].data.length > 0) {
        graficoAlunosData.datasets[1].data = []
    }

    if (graficoAptosData.labels.length > 0) {
        graficoAptosData.labels = []
    }

    if (graficoAptosData.datasets[0].data.length > 0) {
        graficoAptosData.datasets[0].data = []
    }

    if (graficoAptosData.datasets[1].data.length > 0) {
        graficoAptosData.datasets[1].data = []
    }
    
    if (graficoResultadoData.labels.length > 0) {
        graficoResultadoData.labels = []
    }

    if (graficoResultadoData.datasets[0].data.length > 0) {
        graficoResultadoData.datasets[0].data = []
    }

    if (graficoResultadoData.datasets[1].data.length > 0) {
        graficoResultadoData.datasets[1].data = []
    }
    
    
    
    dadosRecebidos.forEach(dadoRecebido => {
        if (dadoRecebido.modulo === moduloSelecionado) {

            graficoAlunosData.labels.push(dadoRecebido.nome);
            graficoAlunosData.datasets[0].data.push(dadoRecebido.desistentes);
            graficoAlunosData.datasets[1].data.push(dadoRecebido.matriculados);

            graficoAptosData.labels.push(dadoRecebido.nome);
            graficoAptosData.datasets[0].data.push(dadoRecebido.aptos);
            graficoAptosData.datasets[1].data.push(dadoRecebido.naoAptos.total);
            
            graficoResultadoData.labels.push(dadoRecebido.nome);
            graficoResultadoData.datasets[0].data.push(dadoRecebido.aptos);
            graficoResultadoData.datasets[1].data.push(dadoRecebido.matriculados);
            

        }

    });
    window.graficosAlunos.update();
    window.graficosAptos.update();
    window.graficosResultado.update();
}
