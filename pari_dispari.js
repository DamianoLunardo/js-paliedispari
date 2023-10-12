//Pari e Dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. 
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
//Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
//Dichiariamo chi ha vinto.


//chiedo all'utente di scegliere pari o dispari e inserire numero tra 1 e 5
const userChoice = prompt("Scegli pari o dispari");
const userNumber = parseInt(prompt("Inserisci un numero tra 1 e 5"));

// devo verificare che l'utente abbia inserito un numero valido

if (!sceltaValida(userChoice) || !numeroValido(userNumber)) {
    console.log("Si prega di selezionare 'pari' o 'dispari' e inserire un numero da 1 a 5.");
};

function sceltaValida(scelta) {
    return ['pari', 'dispari'].includes(scelta);
};

function numeroValido(numero) {
    return !isNaN(numero) && numero >= 1 && numero <= 5;
};

//genero un numero casuale tra 1 e 5 per il computer
function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
};
const computerNumber = getRandomNumber();
//console.log(computerNumber);

//sommo i due numeri
const somma = userNumber + computerNumber;
console.log("La somma dei numeri è: " + somma);

//verifico se la somma è pari o dispari
function isEven(number) {
    return number % 2 === 0;
};
console.log(isEven(somma));

// Verifica se la somma è pari o dispari
const isSommaPari = isEven(somma);

// Dichiarazione del vincitore
if (userChoice === "pari" && isSommaPari) {
    console.log("Hai scelto 'pari' e la somma è pari. Hai vinto!");
} else if (userChoice === "dispari" && !isSommaPari) {
    console.log("Hai scelto 'dispari' e la somma è dispari. Hai vinto!");
} else {
    console.log("Il computer ha vinto. Riprova la prossima volta!");
}








