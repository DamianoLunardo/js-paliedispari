console.log("Hello World!");

//Palindroma
//Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma

//creo la funzione
function isPalindrome(parola) {
//devo avere tutta la parola in minuscolo
parola = parola.toLowerCase();
let splitString = parola.split('');
let reverseString = splitString.reverse();
//verifico se la parola è uguale a la sua inversa
return reverseString.join('') === parola;
//return parola === parola.split('') .reverse() .join('');
};


//stampo i risultati
const parola = prompt("Inserisci una parola");
if (isPalindrome(parola)) {
    console.log("La parola inserita e' palindroma");
} else {
    console.log("La parola inserita non è palindroma");
};


