// Chiedo all'utente di inserire per forza pari o dispari

do {
    var sceltaUtente = prompt("Scegli pari o dispari");
}
while (sceltaUtente != "pari" && sceltaUtente != "dispari");

console.log("Hai scelto " + sceltaUtente);

// Chiedo all'utente di inserire per forza un numero da 1 a 5

do {
    var numeroUtente = parseInt(prompt("Inserisci un numero"));
}
while (isNaN(numeroUtente) || numeroUtente <= 1 || numeroUtente >= 5);

console.log("Il tuo numero è " + numeroUtente);

// Funzione per far generare un numero random al pc

function rdnNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var numeroPc = rdnNumber(1,5);

console.log("Il numero del pc è " + numeroPc);

// Faccio la somma del mio numero e di quello del pc e in base alla scelta determino chi ha vinto

var somma = numeroUtente + numeroPc;

console.log("La somma è " + somma);

if (sceltaUtente == "pari" && somma % 2 == 0){
    console.log("HAI VINTO!")
}
else if (sceltaUtente == "dispari" && somma % 2 != 0){
    console.log("HAI VINTO!")
}
else{
    console.log("HAI PERSO!")
}