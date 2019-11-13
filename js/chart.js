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
    datasets: [{
        label: 'Matriculados',
        backgroundColor: 'rgba(31,171,137, 1)',
        borderColor: 'rgba(31,171,137, 0.3)',
        borderWidth: 1,
        data: []
    }, {
        label: 'Desistentes',
        backgroundColor: 'rgba(255, 128, 128, 1)',
        borderColor: 'rgba(55, 128, 128, 0.3)',
        borderWidth: 1,
        data: []
    }]
};

//criando os graficos
window.onload = async function () {
    const ctx = document.getElementById('graficosAlunos').getContext('2d');
    window.graficosAlunos = new Chart(ctx, {
        type: 'horizontalBar',
        data: graficoAlunosData,
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        display: true,
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
    dadosRecebidos.forEach(dadoRecebido => {
        if (dadoRecebido.modulo === moduloSelecionado) {
            graficoAlunosData.labels.push(dadoRecebido.nome);
            graficoAlunosData.datasets[0].data.push(dadoRecebido.matriculados);
            graficoAlunosData.datasets[1].data.push(dadoRecebido.desistentes);
        }

    });
    window.graficosAlunos.update();
}
