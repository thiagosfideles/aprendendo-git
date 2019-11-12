/* window.onload = function () {
    graficoTotalAlunos();
    //graficoTotalAptos();
} */

//constructor dados
let graficoTotalAlunosData = {
    labels: [],
    datasets: [{
        label: 'Desistentes',
        backgroundColor: 'rgba(255, 128, 128, 1)',
        borderColor: 'rgba(255, 128, 128, 0.3)',
        borderWidth: 1,
        data: []
    }, {
        label: 'Matriculados',
        backgroundColor: 'rgba(31,171,137, 1)',
        borderColor: 'rgba(31,171,137, 0.3)',
        borderWidth: 1,
        data: []
    }]
};

//graficos
window.onload = async function graficoTotalAlunos() {
    const ctx = document.getElementById('graficosAlunos').getContext('2d');
    //const infoEad = await verificaModulo();
    window.graficosAlunos = new Chart(ctx, {
        type: 'horizontalBar',
        data: graficoTotalAlunosData,
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

/* async function graficoTotalAptos() {
    const ctx1 = document.getElementById('graficosAptos').getContext('2d');
    const infoEad = await receberDados();
    const graficosAptos = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: infoEad.disciplina,
            datasets: [{
                label: 'Aptos',
                data: infoEad.aptos,
                borderColor: 'rgba(31,171,137, 1)',
                backgroundColor: 'rgba(31,171,137, 0.3)',
                borderWidth: 1
            },
            {
                label: 'Não Aptos',
                data: infoEad.naoAptos,
                borderColor: 'rgba(255, 128, 128, 1)',
                backgroundColor: 'rgba(255, 128, 128, 0.3)',
                borderWidth: 1
            },

            ]
        },
        options: {
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
        graficosAptos.update()
    });

} */

//alteraçoes realizadas em 11/11/2019
//retomar desse ponto

async function recebeDados() {
    const resposta = await fetch('https://sigead.firebaseio.com/ead/0/informacoes.json')
    const dados = await resposta.json();
    return dados;
}


async function preencheDados() {

    let infoDados = await recebeDados();
    infoDados.forEach(infoDado => {
        graficoTotalAlunosData.labels.push(infoDado.nome);
        graficoTotalAlunosData.datasets.data.push(infoDado.desistentes);
    })
    window.graficosAlunos.update();

}





//fazer a função catch para o receberDados
