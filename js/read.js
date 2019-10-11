// Lendo do Bando de Dados
/*firebase.database().ref().on("child_added", function (snapshot, prevChildKey) {
  var newAula = snapshot.val();
  console.log("titulo: " + newAula.title);
  console.log("Data: " + newAula.start);
  console.log("ID: " + prevChildKey);
});*/

firebase.database().ref('cursos').once('value', function (snapshot) {
 
  snapshot.forEach(function (item) {
      console.log("disciplina:" + item.val().title);
      console.log("data:" + item.val().start);
      console.log("professor:" + item.val().professor);
      console.log("sala de aula:" + item.val().salaAula);
  });
});