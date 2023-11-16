
// Prendo le variabili in input
const nome = prompt("Inserisci Nome");
const cognome = prompt("Inserisci Cognome");
const colore = prompt("Inserisci colore preferito");

// DEBUG
console.log(nome);
console.log(cognome);
console.log(colore);

//Creo una variabile che conterrà la password
let password = nome + cognome + colore + "23";

// Mando a schermo il generatore di pass, lo innesto su HTML
document.getElementById("pass").innerHTML = "La password generata è: " + password;

