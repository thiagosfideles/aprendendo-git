
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

