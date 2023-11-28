/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function trovaNumeroMaggiore(numero1, numero2) {
  if (numero1 > numero2) {
      return numero1;
  } else {
      return numero2;
  }
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function confrontaConCinque(numero) {
  if (numero !== 5) {
      console.log("not equal");
  } else {
      console.log("equal");
  }
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function verificaDivisibilitaPerCinque(numero) {
  if (numero % 5 === 0) {
      console.log("divisibile per 5");
  } else {
      console.log("non divisibile per 5");
  }
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function verificaOtto(numero1, numero2) {
  if (numero1 === 8 || numero2 === 8 || numero1 + numero2 === 8 || numero1 - numero2 === 8 || numero2 - numero1 === 8) {
      console.log("Uno dei numeri è 8 o la loro addizione/sottrazione è uguale a 8");
  } else {
      console.log("Nessuna delle condizioni è soddisfatta");
  }
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Saldo totale del carrello dell'utente
const totalShoppingCart = 60; // Puoi modificare questo valore con il saldo effettivo del carrello

// Costo fisso della spedizione
const shippingCost = 10;

// Verifica se il totale del carrello supera 50 per ottenere la spedizione gratuita
if (totalShoppingCart > 50) {
    // Il totale supera 50, quindi la spedizione è gratuita
    let totalAmountDue = totalShoppingCart;
    console.log("Totale del carrello: " + totalShoppingCart);
    console.log("Spedizione gratuita!");
} else {
    // Il totale è 50 o meno, quindi applica il costo fisso della spedizione
    let totalAmountDue = totalShoppingCart + shippingCost;
    console.log("Totale del carrello: " + totalShoppingCart);
    console.log("Costo spedizione: " + shippingCost);
}

// Stampare l'ammontare totale da addebitare all'utente
console.log("Importo totale da addebitare: " + totalAmountDue);


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Saldo totale del carrello dell'utente
const totalShoppingCart = 60; // Puoi modificare questo valore con il saldo effettivo del carrello

// Costo fisso della spedizione
const shippingCost = 10;

// Verifica se il totale del carrello supera 50 per ottenere la spedizione gratuita
if (totalShoppingCart > 50) {
    // Il totale supera 50, quindi la spedizione è gratuita
    let discountedTotal = totalShoppingCart; // Non ci sono costi di spedizione
    console.log("Totale del carrello: " + totalShoppingCart);
    console.log("Spedizione gratuita!");
} else {
    // Il totale è 50 o meno, quindi applica il costo fisso della spedizione
    let discountedTotal = totalShoppingCart + shippingCost;
    console.log("Totale del carrello: " + totalShoppingCart);
    console.log("Costo spedizione: " + shippingCost);
}

// Applica lo sconto del 20% per il Black Friday
const blackFridayDiscount = 0.2; // 20%
const finalTotal = discountedTotal - (discountedTotal * blackFridayDiscount);

// Stampare l'ammontare totale da addebitare all'utente, inclusi sconti e costi di spedizione
console.log("Totale scontato Black Friday: " + finalTotal);

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Assegna un valore numerico a ciascuna variabile
const numero1 = 25;
const numero2 = 15;
const numero3 = 40;

// Utilizza un blocco condizionale per ordinare le variabili
if (numero1 >= numero2 && numero1 >= numero3) {
    // numero1 è il più grande
    if (numero2 >= numero3) {
        console.log(numero1, numero2, numero3);
    } else {
        console.log(numero1, numero3, numero2);
    }
} else if (numero2 >= numero1 && numero2 >= numero3) {
    // numero2 è il più grande
    if (numero1 >= numero3) {
        console.log(numero2, numero1, numero3);
    } else {
        console.log(numero2, numero3, numero1);
    }
} else {
    // numero3 è il più grande
    if (numero1 >= numero2) {
        console.log(numero3, numero1, numero2);
    } else {
        console.log(numero3, numero2, numero1);
    }
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function verificaNumero(valore) {
  if (typeof valore === 'number') {
      console.log(valore + ' è un numero.');
  } else {
      console.log(valore + ' non è un numero.');
  }
}

// Esempio di utilizzo
const valore1 = 42;
const valore2 = 'ABC';

verificaNumero(valore1);  // Stampa "42 è un numero."
verificaNumero(valore2);  // Stampa "ABC non è un numero."

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function verificaPariDispari(numero) {
  if (numero % 2 === 0) {
      console.log(numero + ' è un numero pari.');
  } else {
      console.log(numero + ' è un numero dispari.');
  }
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
La seconda condizione val < 5 non sarà mai verificata perché la prima condizione val < 10 sarà sempre vera quando val è 7.

let val = 7;

if (val < 5) {
    console.log("Meno di 5");
} else if (val < 10) {
    console.log("Meno di 10");
} else {
    console.log("Uguale a 10 o maggiore");
}


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

// Aggiungi la proprietà "city" con valore "Toronto"
me.city = 'Toronto';

// Verifica il risultato stampando l'oggetto
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
};

// Rimuovi la proprietà "lastName"
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Crea un array vuoto
const numeriArray = [];

// Riempi l'array con i numeri da 1 a 10
(const i = 1; 
}
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
