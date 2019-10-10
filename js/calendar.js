  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        locale:'pt-br',
        plugins: [ 'dayGrid'],
        header:{
          left: '',
          center: 'title',
          right: 'today prev,next'
        },
        events:[
            {
                title:  'My Event',
                start:  '2019-10-10T19:00:00',
                allDay: false,
                classNames: ['curso-ti']
                //backgroundColor: '#f57c00', //cor para cursos de TI
                //borderColor: '#f57c00' //cor para cursos de TI
            }
        ],
        
        eventClick: function(info) {
            info.jsEvent.preventDefault();
            
            alert(info.event.title);
        }  
                    
        });

        calendar.render();
      });