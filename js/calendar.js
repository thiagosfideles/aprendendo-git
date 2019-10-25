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

        eventClick: function(info) {
                $('#viewEvento #viewDataAula').val(info.event.start);
                $('#viewEvento #viewCurso').val(info.event.extendedProps.curso);
                $('#viewEvento #viewModulo').val(info.event.extendedProps.modulo);
                $('#viewEvento #viewDisciplina').val(info.event.title);
                $('#viewEvento #viewProfessor').val(info.event.extendedProps.professor);
                $('#viewEvento #viewSalaVirtual').val(info.event.extendedProps.salaVirtual);
                $('#viewEvento #viewSalaAula').val(info.event.extendedProps.salaAula);
                $('#viewEvento #viewObs').val(info.event.extendedProps.observacao);
                $('#viewEvento').modal('show');
                        
                        
        } ,

    });

    calendar.render();
});