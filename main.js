console.log("Hello World!");

//Palindroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//creo la funzione
function isPalindrome(parola) {
//devo avere tutta la parola in minuscolo e niente spazi
parola = parola.replace(/\s/g, '').toLowerCase();
//verifico se la parola è uguale a la sua inversa
return parola === parola.split('') .reverse() .join('');
};

const parola = prompt("Inserisci una parola");
if (isPalindrome(parola)) {
    console.log("La parola inserita e' palindroma");
} else {
    console.log("La parola inserita non è palindroma");
};

//orda devo invertire la stringa
function reverseString(string) {
    return string.split('').reverse().join('');
};


//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
//Dichiariamo chi ha vinto.