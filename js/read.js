// Lendo do Bando de Dados
readEventData() {
  firebase
    .database()
    .ref('Users/')
    .on('value', function (snapshot) {
      console.tron.log(snapshot.val())
    });
}
