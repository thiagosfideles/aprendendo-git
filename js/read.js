// Lendo do Bando de Dados
firebase.database().ref().on("child_added", function (snapshot, prevChildKey) {
  var newAula = snapshot.val();
  console.log("titulo: " + newAula.title);
  console.log("Data: " + newAula.start);
  console.log("ID: " + prevChildKey);
});

firebase.database().ref('cursos').on('value', function (snapshot) {
 
  snapshot.forEach(function (item) {
      console.log(item.val().title);
  });
});