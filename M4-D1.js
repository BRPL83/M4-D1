//Esericizio n.01
//Crea una funzione che controlli due numeri interi. Ritorna true se uno dei due è 50 o se la somma dei due è 50.

function controllaNumero(num1, num2){
    if(num1 === 50 || num2 === 50 || num1 + num2 === 50){
        return true;
    }else{
    return false;
    }
}
console.log(controllaNumero(25, 50));
console.log(controllaNumero(30, 20));
console.log(controllaNumero(15, 30));


//Esericizio n.2
//Crea una funzione JavaScript che rimuove un carattere da una stringa in base a una posizione specificata.

function rimuoviCarattere(stringa, posizione){
    if (posizione < 0 || posizione >= stringa.length){
        return "Posizione non valida";
    }
    const arrayCaratteri = stringa.split(""); //trasformo la stringa in un array di caratteri
    arrayCaratteri.splice(posizione, 1); //Rimuovo il carattere dalla posizione specificata
    const stringaModificata = arrayCaratteri.join(""); //Riunisco gli elementi dell'array in una stringa
    return stringaModificata;
}

const stringaOriginale = "Hello, Macarena!";
const posizioneDaRimuovere = 5;
const risultato = rimuoviCarattere(stringaOriginale, posizioneDaRimuovere);
console.log(risultato); //Stamperà "Hello Macarena!"

//Esercizio n.3
//Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100. Ritorna 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'.

function controllaNumeri(num1, num2) {
    const condizione1 = (num1 >= 40 && num1 <= 60) || (num1 >= 70 && num1 <= 100);
    const condizione2 = (num2 >= 40 && num2 <= 60) || (num2 >= 70 && num2 <= 100);
    return condizione1 && condizione2;
}

const numero1 = 45;
const numero2 = 80;
const Risultato = controllaNumeri (numero1, numero2);

console.log (Risultato);



//Esercizio n.4
//Crea una funzione che accetti un nome di città come parametro e ritorni il nome stesso se inizia con "Los" o "New", altrimenti ritorni 'false'.

function controllaCitta(nomeCitta){
    const nomeCittaMinuscolo = nomeCitta.toLowerCase(); //Con .toLowerCase rendo tutte le lettere minuscole
    if (nomeCittaMinuscolo.startsWith("los") || (nomeCittaMinuscolo.startsWith("new"))){ //Con .startsWith posso prendere le prime lettere
        return nomeCitta;
    }else{
        return false;
    }
}

console.log(controllaCitta("Los Angeles")); //Darà true perché inizia con "los"
console.log(controllaCitta("New York"));    //Darà true perché inizia con "new"
console.log(controllaCitta("San Francisco"));   //Darà false perché è una città che inizia con lettere diverse da "los" e "new"

//Esercizio n.5
//Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array. L'array deve essere passato come parametro.

function sommaArray(array) { //Qui creo la funzione che accetta il parametro array di cui vogliamo calcolare la somma.
    let somma = 0;           //Qui creo la variabile somma = 0; che mi servirà per trenere traccia della somma mentre scorre l'array.
    for (let i= 0; i < array.length; i++) { //Ciclo for per iterare l'array, inizio i=0 fino che i è minore della lunghezza dell'array array.length
        somma += array[i];// Qui aggiungo all'interno del ciclo for: array[i] alla variabile "somma" per accumulare la somma di tutti gli elementi
    }
    return somma;//Qui mi darà la somma di tutti gli elementi dell'array
}

const numeri = [1, 2, 3, 4, 5];
console.log(sommaArray(numeri));

//Esercizio n.6
//Crea una funzione che controlli che un array NON contenga i numeri 1 o 3. Se NON li contiene, ritorna 'true', altrimenti ritorna 'false'.

function arrayNonContieneUnoETre(array){
    if(array.indexOf(1) === -1 && array.indexOf(3) === -1){ //Qui uso il metodo .indexOf per i numeri 1 che 3
        return true;//Qui mi ritorna se non ci sono entrambi i numeri
    } else {
        return false;//Qui mi ritorna false perché sono presenti 
    }
}

const array1 = [2, 4, 6];
console.log(arrayNonContieneUnoETre(array1));//Qui stamperà true

const array2 = [1, 2, 3, 4];
console.log(arrayNonContieneUnoETre(array2));//Qui stamperà false


//Esercizio n.7
//Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
//Angolo acuto: meno di 90° ritorna "acuto"
//Angolo ottuso: tra i 90° e i 180° ritorna "ottuso"
//Angolo retto: 90° ritorna "retto"
//Angolo piatto: 180° ritorna "piatto"

function tipoAngolo(gradi){
    if (gradi < 90){            //Qui verifichiamo se gli angoli sono inferiori a 90°
        return "acuto";         //Quindi  se si mostrerà che l'angolo è "acuto"
    }else if (gradi === 90){    //Qui verifichiamo se gli angoli sono esattamente a 90°
        return "retto";         //Quindi mostrerà: "retto"
    }else if (gradi > 90 && gradi < 180){   //Qui verifichiamo se gli angoli sono tra 90° e 180° esclusi
        return "ottuso";                    //Quindi mostrerà che l'angolo è "ottuso"
    }else if (gradi === 180){   //Qui verifichiamo se l'angolo è esattamente uguale a 180°
        return "piatto";        //Quindi mostrerà: "piatto"
    }else{
        return "non valido";    //Qui se nessuna condizione qui sopra si compie allora sarà un angolo "non valido"
    }
}

console.log(tipoAngolo(45)); //Mostrerà: "acuto"
console.log(tipoAngolo(90)); //Mostrerà: "retto"
console.log(tipoAngolo(120));//Mostrerà: "ottuso"
console.log(tipoAngolo(180));//Mostrerà: "piatto"
console.log(tipoAngolo(200));//Mostrerà: "non valido"


//Esercizio n.8
//Crea una funzione che crei un acronimo a partire da una frase. Es."Fabbrica Italiana Automobili Torino" deve ritornare "FIAT".

function creaAcronimo(frase){
    const parole = frase.split(" "); //Qui uso il metodo .split per separare le frasi in parole in base agli spazi
    let acronimo = "";               //Qui avvio la variabile acronimo come una stringa vuota per memorizzare l'acronimo futuro
    for (let i = 0; i < parole.length; i++) { //Qui iteriamo attraverso l'array prendendo la prima lettera di ciascun parola con [0] 
        acronimo += parole[i][0].toUpperCase();//e convertendola in maiucolo con il metodo .toUpperCase aggiungendo ogni lettera all'acronimo 
    }
    return acronimo;
}

const frase = "Fabrica Italiana Automobili Torino";
const acronimo = creaAcronimo(frase);
console.log(acronimo); //Qui mostrerà: "FIAT"



