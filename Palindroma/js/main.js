// Funzione per invertire le stringhe

function invertiParola(parolaDaInvertire) {
    let parolaInvertita = parolaDaInvertire.split("").reverse().join("");
    return parolaInvertita;
}

// Chiedo all'utente la parola e la rendo tutta maiuscola

var parola = prompt("Inserisci una parola");
parola = parola.toUpperCase();

// Richiamo in una variabile la parola invertita dalla funzione

var parolaInvertita = invertiParola(parola);

// Se la parola inserita è uguale alla parola invertita (è palindroma) stampo risultato positivo

if (parola == parolaInvertita){
    console.log("La parola : " + parola + " è palindroma!");
}
else{
    console.log("La parola : " + parola + " non è palindroma!");
}