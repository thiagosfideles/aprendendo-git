/*global cursosRef*/
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

        events: function(info, successCallback, failureCalllback) {
			  let array = [];
			  cursosRef.on('value', function(snapshot){
				snapshot.forEach(function(childSnapshot){
				  let item = childSnapshot.val()
				  array.push(item)
				})
			  })
			  successCallback(array);
			},

        eventClick: function (curso) {
            cursosRef.on("child_added", snap => {
                let curso = snap.val();
                $('#viewEvento #viewDataAula').text(curso.start);
                $('#viewEvento #viewCurso').text(curso.curso);
                $('#viewEvento #viewModulo').text(curso.modulo);
                $('#viewEvento #viewDisciplina').text(curso.title);
                $('#viewEvento #viewProfessor').text(curso.professor);
                $('#viewEvento #viewSalaVirtual').text(curso.salaVirtual);
                $('#viewEvento #viewSalaAula').text(curso.salaAula);
                $('#viewEvento #viewObs').text(curso.observacao);
                $('#viewEvento').modal('show');
            });
        }

    });

    calendar.render();
});