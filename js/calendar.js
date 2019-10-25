/*global aulasRef*/
/*global FullCalendar*/
/*global $*/
/*global exibe*/


document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale: 'pt-br',
        plugins: ['dayGrid'],
        header: {
            left: '',
            center: 'title',
            right: 'today prev,next'
        },

        events: 'https://sigead.firebaseio.com/aulas.json',

        eventClick: function (aula) {
            aulasRef.on("value", snap => {
                let aula = snap.val();
                $('#viewEvento #viewDataAula').val(aula.start);
                $('#viewEvento #viewCurso').val(aula.curso);
                $('#viewEvento #viewModulo').val(aula.modulo);
                $('#viewEvento #viewDisciplina').val(aula.title);
                $('#viewEvento #viewProfessor').val(aula.professor);
                $('#viewEvento #viewSalaVirtual').val(aula.salaVirtual);
                $('#viewEvento #viewSalaAula').val(aula.salaAula);
                $('#viewEvento #viewObs').val(aula.observacao);
                $('#viewEvento').modal('show');
            });
        }

    });

    calendar.render();
});