
//window.addEventListener('load', carregaGraficos);

window.onload = function () {
    graficoTotalAlunos();
    graficoTotalAptos();
}

async function graficoTotalAlunos() {
    const ctx = document.getElementById('graficosAlunos').getContext('2d');
    const infoEad = await receberDados();
    const graficosAlunos = new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: infoEad.disciplina,
            datasets: [{
                label: 'Matriculados',
                data: infoEad.matriculados,
                borderColor: 'rgba(31,171,137, 1)',
                backgroundColor: 'rgba(31,171,137, 0.3)',
                borderWidth: 1
            },
            {
                label: 'Desistentes',
                data: infoEad.desistentes,
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

async function graficoTotalAptos() {
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
    });

}

async function receberDados() {
    const resposta = await fetch('https://sigead.firebaseio.com/ead/0/informacoes.json')
    const dados = await resposta.json();
    const modulo = [];
    const disciplina = [];
    const matriculados = [];
    const desistentes = [];
    const aptos = [];
    const naoAptos = [];
    const linhas = dados;
    linhas.forEach(linha => {

        modulo.push(linha.modulo);
        disciplina.push(linha.nome);
        matriculados.push(linha.matriculados);
        desistentes.push(linha.desistentes);
        aptos.push(linha.aptos);
        naoAptos.push(linha.naoAptos.total);


    })
    return { disciplina, matriculados, desistentes, aptos, naoAptos }
}


//fazer a função catch para o receberDados

//outras tentatativas
/*grafico mod. I
let canvas = document.getElementById('myChart');
let ctx = canvas.getContext('2d');

let infoChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: []
    },
    options: {
        tooltips: {
            mode: 'index',
            intersect: false,
            titleMarginBottom: 10
        },
        /*        scales: {
                   yAxes: [{
                       ticks: {
                           beginAtZero: true
                       }
                   }]
               }
    }
});

canvas.onclick = evt => {
    let infoEvent = infoChart.getElementsAtEvent(evt);
    let pTable = document.getElementById('infoTables');
    pTable.innerHTML = `
    <tr>
        <td>${infoChart.data.labels[infoEvent[0]._index]}</td>
        <td>${infoChart.data.datasets[0].data[infoEvent[0]._index]}</td>
        <td>${infoChart.data.datasets[1].data[infoEvent[0]._index]}</td>
        <td>${infoChart.data.datasets[2].data[infoEvent[0]._index]}</td>
        <td>${infoChart.data.datasets[3].data[infoEvent[0]._index]}</td>
    </tr>`;
};

gráfico de donuts
let myChartPie = new Chart(document.getElementById("myChartPie"), {
    type: 'doughnut',
    data: {
        labels: [],
        datasets: []
    }
});

//gráfico de pizza
new Chart(document.getElementById("motivosReprovacao"), {
    type: 'pie',
    data: {
        labels: ["Africa", "Asia"],
        datasets: [{
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2"],
            data: [2478, 5267]
        }]
    }
});

//grafico mod. I

let canvasMod2 = document.getElementById('chartMod2');
let ctx1 = canvasMod2.getContext('2d');

let infoChartMd2 = new Chart(ctx1, {
    type: 'bar',
    data: {
        labels: [],
        datasets: []
    },
    options: {
        tooltips: {
            mode: 'index',
            intersect: false,
            titleMarginBottom: 10
        },
               scales: {
                   yAxes: [{
                       ticks: {
                           beginAtZero: true
                       }
                   }]
               }
    }
});*/