var sceltaUtente = prompt("Scegli pari o dispari");

console.log("Hai scelto " + sceltaUtente);

var numeroUtente = parseInt(prompt("Inserisci un numero"));

console.log("Il tuo numero è " + numeroUtente);

function rdnNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

var numeroPc = rdnNumber(1,5);

console.log("Il numero del pc è " + numeroPc);

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