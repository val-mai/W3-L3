
let nome;
let cognome;
let age;
let email;

function innerInfo () {
    document.getElementById('user').innerHTML = nome + ' ' + cognome;
    document.getElementById('card_age').innerHTML = age;
    document.getElementById('card_email').innerHTML = email;
}

function pensione(anni) {
    let anniMancanti = 70 - anni;
    document.getElementById('anniMancanti').innerHTML = '<p>La tua pensione è prevista tra ' + anniMancanti + ' anni</p>';
}

function getInfo () {
    nome = document.getElementById('nome').value;
    cognome = document.getElementById('cognome').value;
    age = document.getElementById('age').value;
    email = document.getElementById('mail').value;
    
    innerInfo();
    pensione(age);
    
    let form = document.getElementById('myForm');
    form.reset(); 
}

/* Calcolatrice */

let num1;
let num2;

function stampaRis(risultato) {
    document.getElementById('risultato').innerHTML = risultato;
}

function getNumber() {
    num1 = +document.getElementById('num1').value;
    num2 = +document.getElementById('num2').value;
}

function somma() {
    getNumber()
    let risultato = num1 + num2;
    stampaRis(risultato);
}

function sottr() {
    getNumber()
    let risultato = num1 - num2;
    stampaRis(risultato);
}

function prodotto() {
    getNumber()
    let risultato = num1 * num2;
    stampaRis(risultato);
}

function divisione() {
    getNumber()
    let risultato = num1 / num2;
    stampaRis(risultato);
}

function reset() {
    let form = document.getElementById('inserimento');
    form.reset();
    let risultato = 0;
    stampaRis(risultato); 
}