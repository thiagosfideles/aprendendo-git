
let infoDadosTi = [];
let infoDadosTiMod1 = [];
let infoDadosTiMod2 = [];
let infoDadosTiMod3 = [];
let infoDadosTiMod4 = [];

function Dataset() {
    this.dataset = {
        label: '',
        data: [],
        backgroundColor: '',
        borderColor: '',
        borderWidth: 1
    }
}

fetch('https://sigead.firebaseio.com/ead/0/informacoes.json')
.then(function(infoDadosTi){
    console.log(infoDadosTi)
})
/* .then(response => response.json())
.catch(error => console.error('Error: '+ error))
.then(response => {
    return response;
});

console.log(infoDadosTi); */


/* window.onload = function () {
    fetch('https://sigead.firebaseio.com/ead/0/informacoes.json')
        .then(response => response.json())
        .catch(error => console.error('Falha ao consultar os dados,' + error))
    .then(response => {
        infoDadosTi = response;
        console.log(infoDadosTi)
    })
}
 */
//grafico de barras
//módulo I
/* window.onload = function () {
    fetch("https://sigead.firebaseio.com/ead/0/informacoes.json")
        .then(response => response.json())
        .catch(error => console.error("Erro:" + error))
        .then(response => {
            let dataMatriculados = new Dataset;
            dataMatriculados.dataset.label = 'Matriculados';
            dataMatriculados.dataset.backgroundColor = 'rgba(54, 162, 235, 0.2)';
            dataMatriculados.dataset.borderColor = 'rgba(54, 162, 235, 1)';

            let dataDesistentes = new Dataset;
            dataDesistentes.dataset.label = 'Desistentes';
            dataDesistentes.dataset.backgroundColor = 'rgba(255, 159, 64, 0.2)';
            dataDesistentes.dataset.borderColor = 'rgba(255, 159, 64, 1)';

            let dataAptos = new Dataset;
            dataAptos.dataset.label = 'Aptos';
            dataAptos.dataset.backgroundColor = 'rgba(75, 192, 192, 0.2)';
            dataAptos.dataset.borderColor = 'rgba(75, 192, 192, 1)';

            let dataNaoAptos = new Dataset;
            dataNaoAptos.dataset.label = 'Não Aptos';
            dataNaoAptos.dataset.backgroundColor = 'rgba(255, 99, 132, 0.2)';
            dataNaoAptos.dataset.borderColor = 'rgba(255, 99, 132, 1)';

            response.forEach(info => {
                if (info.modulo === '1') {
                    infoTables(
                        info.nome,
                        info.matriculados,
                        info.desistentes,
                        info.aptos,
                        info.naoAptos.total);

                    dataMatriculados.dataset.data.push(info.matriculados);
                    dataDesistentes.dataset.data.push(info.desistentes);
                    dataAptos.dataset.data.push(info.aptos);
                    dataNaoAptos.dataset.data.push(info.naoAptos.total);
                    infoChart.data.labels.push(info.nome);

                }

            });

            infoChart.data.datasets.push(
                dataMatriculados.dataset,
                dataDesistentes.dataset,
                dataAptos.dataset,
                dataNaoAptos.dataset);
            infoChart.update();
        });
};



function infoTables(name, matriculados, desistentes, aptos, naoAptos) {
    let pTable = document.getElementById('infoTables');
    let tRow = document.createElement('tr');

    let perDesistentes = (desistentes / matriculados);
    let perDesistentesFormat = perDesistentes.toLocaleString('pt-br', { style: 'percent' });

    let totalReprovados = (naoAptos / (matriculados - desistentes));
    let totalReprovadosFormat = totalReprovados.toLocaleString('pt-br', { style: 'percent' });

    tRow.innerHTML = `
        <td>${name}</td>
        <td>${matriculados}</td>
        <td>${desistentes}</td>
        <td>${aptos}</td>
        <td>${naoAptos}</td>
        <td>${perDesistentesFormat}</td>
        <td>${totalReprovadosFormat}</td>
    `;
    pTable.appendChild(tRow);
}

//grafico de donuts
window.onload = function () {
    fetch("https://sigead.firebaseio.com/ead/0/informacoes.json")
        .then(response => response.json())
        .catch(error => console.error("Erro:" + error))
        .then(response2 => {
            let dataMatriculados2 = new Dataset;
            dataMatriculados2.dataset.label = 'Matriculados';
            dataMatriculados2.dataset.backgroundColor = 'rgba(54, 162, 235, 0.2)';
            dataMatriculados2.dataset.borderColor = 'rgba(54, 162, 235, 1)';

            let dataDesistentes2 = new Dataset;
            dataDesistentes2.dataset.label = 'Desistentes';
            dataDesistentes2.dataset.backgroundColor = 'rgba(255, 159, 64, 0.2)';
            dataDesistentes2.dataset.borderColor = 'rgba(255, 159, 64, 1)';

            let dataAptos2 = new Dataset;
            dataAptos2.dataset.label = 'Aptos';
            dataAptos2.dataset.backgroundColor = 'rgba(75, 192, 192, 0.2)';
            dataAptos2.dataset.borderColor = 'rgba(75, 192, 192, 1)';

            let dataNaoAptos2 = new Dataset;
            dataNaoAptos2.dataset.label = 'Não Aptos';
            dataNaoAptos2.dataset.backgroundColor = 'rgba(255, 99, 132, 0.2)';
            dataNaoAptos2.dataset.borderColor = 'rgba(255, 99, 132, 1)';

            response2.forEach(info2 => {
                if (info2.modulo === '2') {
                    infoTables(
                        info2.nome,
                        info2.matriculados,
                        info2.desistentes,
                        info2.aptos,
                        info2.naoAptos.total);

                    dataMatriculados2.dataset.data.push(info2.matriculados);
                    dataDesistentes2.dataset.data.push(info2.desistentes);
                    dataAptos2.dataset.data.push(info2.aptos);
                    dataNaoAptos2.dataset.data.push(info2.naoAptos.total);
                    infoChartMd2.data.labels.push(info2.nome);

                }

            });

            infoChartMd2.data.datasets.push(
                dataMatriculados2.dataset,
                dataDesistentes2.dataset,
                dataAptos2.dataset,
                dataNaoAptos2.dataset);
            infoChartMd2.update();
        });
};

 */