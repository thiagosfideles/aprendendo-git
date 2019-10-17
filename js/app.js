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
const cursosRef = dbRef.child('cursos');


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
  
firebase.database().ref().child('cursos' + '1').set(
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
  cursosRef.on('value', function(snapshot){
    snapshot.forEach(function(childSnapshot){
      let item = childSnapshot.val()
      array.push(item)
    })
  })
  return array
}



const cursoListUI = document.getElementById("cursoList");
cursosRef.on("child_added", snap => {
  let curso = snap.val();
  let $li = document.createElement("li");
  $li.innerHTML = curso.title;
  $li.setAttribute("child-key", snap.key);
  $li.addEventListener("click", cursoClicked)
  cursoListUI.append($li);
});

function cursoClicked(e) {
  var cursoID = e.target.getAttribute("child-key");
  const cursosRef = dbRef.child('cursos/' + cursoID);
  const cursoDetailUI = document.getElementById("cursoDetail");
  cursoDetailUI.innerHTML = ""
  cursosRef.on("child_added", snap => {
    var $p = document.createElement("p");
   $p.innerHTML = snap.key + " - " + snap.val()
   cursoDetailUI.append($p); 
  });
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