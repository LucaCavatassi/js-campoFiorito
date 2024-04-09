**Consegna**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100. 
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

**Bonus**
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

**Consigli del giorno:** 
Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.

Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.


# Milestone 1 
- Creo tutta la parte grafica in css e html
- Al click del tasto start game la griglia compare
    1 - Aggiungo event-listener al bottone per potergli dare l'azione. 
    2 - Al click dell'bottone appendo all'elemento grid container un div con la classe box creata in css, questo fino a che non arrivo a cento
- Al click della cella essa si colora di verde e mi restituisce il numero in console

# Milestone 2 
- Creo un array con 10 numeri random esclusivi, queste saranno le mie bombe
- Se clicco su un numero dell'array allora la cella diventa rossa

# Milestone 3
- Conto il numero di click effettuati dall'utente 
- Se il numero di click meno il numero delle bombe (10) è uguale 100 allora l'utente ha vinto. 