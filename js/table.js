
//recebendo dados para a tabela
async function recebeDadosTabela() {
    const resposta = await fetch('https://sigead.firebaseio.com/ead/0/informacoes.json')
    const dados = await resposta.json();
    return dados;
}

//preenche dados da tabela
async function preencheTabela() {

    let moduloSelecionado = document.getElementById('selecionaModulo').value
    
    const dadosRecebidos = await recebeDadosTabela();
    
    removeTr();
  
    dadosRecebidos.forEach(dadoRecebido => {
        if (dadoRecebido.modulo === moduloSelecionado) {
                    infoTables(
                        dadoRecebido.nome,
                        dadoRecebido.matriculados,
                        dadoRecebido.desistentes,
                        dadoRecebido.aptos,
                        dadoRecebido.naoAptos.total);            
    }

    });

}


//funcao para criação de tabelas

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

//funcao para remover tabela
function removeTr () {
        let table = document.getElementById('infoTables');
        let rowCount = table.rows.length;
    
       for (var i=rowCount-1; i >=0; i--) {
            table.deleteRow(i);
        }
}