
function Dataset() {
    this.dataset = {
        label: '',
        data: [],
        backgroundColor: '',
        borderColor: '',
        borderWidth: 1
    }
}


window.onload = function () {
    fetch("https://sigead.firebaseio.com/disciplinas.json")
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

