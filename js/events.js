

let titleVazio = false;
let startVazio = false;
let cursoVazio = false;
let moduloVazio = false;
let salaAulaVazio = false;
let salaVirtualVazio = false;
let professorVazio = false;


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

let sendData = () => {
    
    let title = document.getElementById('disciplinaNovaAula').value;
    titleVazio = title === "";
    let start = document.getElementById('dataNovaAula').value;
    startVazio = start === "";
    let curso = document.getElementById('cursoNovaAula').value;
    cursoVazio = curso === "";
    let modulo = document.getElementById('moduloNovaAula').value;
    moduloVazio = modulo === "";
    let salaAula = document.getElementById('salaNovaAula').value;
    salaAulaVazio = salaAula === "";
    let salaVirtual = document.getElementById('slVirtualNovaAula').value;
    salaVirtualVazio = salaVirtual === "";
    let professor = document.getElementById('professorNovaAula').value;
    professorVazio = professor === "";
    let observacao = document.getElementById('obsNovaAula').value;
    
    if (
        titleVazio ||
        startVazio ||
        cursoVazio ||
        moduloVazio ||
        salaAulaVazio ||
        salaVirtualVazio ||
        professorVazio
        )
        
        return;

//acrescentar o codigo do firebase para criar o registro
    
    console.log(title);
    console.log(start);

// Gravando no Banco de Dados
/*writeUserData(email,fname,lname){
  firebase.database().ref('UsersList/').push({
    email,
    name,
  }).then((data)=>{
    console.tron.log('data ' , data)
  }).catch((error)=>{
    console.tron.log('error ' , error)
  })
}



*/



}


