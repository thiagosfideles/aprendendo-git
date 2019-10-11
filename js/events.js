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

let title = document.getElementById('disciplinaNovaAula');
let start = document.getElementById('dataNovaAula');
let curso = document.getElementById('cursoNovaAula');
let modulo = document.getElementById('moduloNovaAula');
let salaAula = document.getElementById('salaNovaAula');
let salaVirtual = document.getElementById('slVirtualNovaAula');
let professor = document.getElementById('professorNovaAula');
let observacao = document.getElementById('obsNovaAula');

btnAddNovaAula.addEventListener('click', function () {
  create(title.value, start.value, curso.value, modulo.value, salaAula.value,
    salaVirtual.value, professor.value, observacao.value);
})


function create(title, start, curso, modulo, salaAula, salaVirtual, professor, observacao) {
  let data = {
    title: title,
    start: start,
    curso: curso,
    modulo: modulo,
    salaAula: salaAula,
    salaVirtual: salaVirtual,
    professor: professor,
    observacao: observacao

  };

  return firebase.database().ref().child('cursos').push(data);

  //mensagem de erro ou de cadastrado com sucesso.

}


