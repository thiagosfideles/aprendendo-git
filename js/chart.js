/*global Chart*/

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
        scales: {
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
