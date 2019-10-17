
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

/*.then(response =>{
  console.log('Response: ');
  console.log(response);
  console.log('Response OK: ');
  console.log(response.ok);
  console.log('fim');
  if (!response.ok)
    throw new Error("Falha ao cadastrar os dados.");
  return response.jason();
})

.then (data => {
  if (data.status === "200") {
    console.log("Os dados foram cadastrados com sucesso.")
  }
  
})
.catch(error => {
  console.log(error);
  
})*/
  
 // cleanData();
 
} 



/*  function (error) {
      if (error) {
        console.log('Não foi possivel registrar o dado!');
        
      } else {
        console.log('Data cadastrado com sucesso.');
        
      }
  };
}
  
  
  firebase.database().ref().child('cursos').set({
    title: title,
    start: start,
    curso: curso,
    modulo: modulo,
    salaAula: salaAula,
    salaVirtual: salaVirtual,
    professor: professor,
    observacao: observacao
  }, function (error) {
      if (error) {
        console.log('Não foi possivel registrar o dado!');
        cleanData();
      } else {
        console.log('Data cadastrado com sucesso.');
        cleanData();
      }
  });
}
*/

/*
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

  return firebase.database().ref().child('cursos').push(data),
  function (error) {
    if (error) {
      console.log('Não foi possivel registrar o dado!')
    } else {
      console.log('Data cadastrado com sucesso.')
    }

  }
  
  //mensagem de erro ou de cadastrado com sucesso.

} 
*/
