/*global firebase */
/*global $ */

//VARS
let cleanData = () => {
  document.getElementById('disciplinaNovaAula').value = "";
  document.getElementById('dataNovaAula').value = "";
  document.getElementById('cursoNovaAula').value = "";
  document.getElementById('moduloNovaAula').value = "";
  document.getElementById('salaNovaAula').value = "";
  document.getElementById('slVirtualNovaAula').value = "";
  document.getElementById('professorNovaAula').value = "";
  document.getElementById('obsNovaAula').value = "";
}


let title = document.getElementById('disciplinaNovaAula').value;
let start = document.getElementById('dataNovaAula').value;
let curso = document.getElementById('cursoNovaAula').value;
let modulo = document.getElementById('moduloNovaAula').value;
let salaAula = document.getElementById('salaNovaAula').value;
let salaVirtual = document.getElementById('slVirtualNovaAula').value;
let professor = document.getElementById('professorNovaAula').value;
let observacao = document.getElementById('obsNovaAula').value;


const dbRef = firebase.database().ref();
const aulasRef = dbRef.child('aulas');


/* ---------------------------------------------------
    CREATE
----------------------------------------------------- */


function cadastraAula () {
  
  let dados = {
    title: title,
    start: start,
    curso: curso,
    modulo: modulo,
    salaAula: salaAula,
    salaVirtual: salaVirtual,
    professor: professor,
    observacao: observacao
  }
  
firebase.database().ref().child('aulas' + '1').set(
 dados,function(error) {
    if (error) {
      console.log('erro na gravaçao')
      // The write failed...
    } else {
      console.log('OK na gravaçao')
      // Data saved successfully!
    }
 });
}




/* ---------------------------------------------------
    READ
----------------------------------------------------- */

function exibe () {
  let array = [];
  aulasRef.on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot){
      let item = childSnapshot.val()
      array.push(item)
    })
  })
  return array
}



/* ---------------------------------------------------
    UPDATE
----------------------------------------------------- */



/* ---------------------------------------------------
    DELETE
----------------------------------------------------- */


/* ---------------------------------------------------
    SIDEBAR
----------------------------------------------------- */
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});