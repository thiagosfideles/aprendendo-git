let canvasPie = document.getElementById('myChartPie');
let ctx1 = canvasPie.getContext('2d');

let infoChartPie = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [40, 60],
            backgroundColor:['#F7464A','#46BFBD']
        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: [
            'Red',
            'Green',
        ]
    },
})