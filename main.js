/*L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro
ed emetto un messaggio in console con il numero della cella cliccata.*/ 



let btn = document.querySelector("button")
console.log(btn);

let container = document.querySelector(".container")
console.log(container);

//creo una evento click al pulsante per far comparire la griglia
btn.addEventListener("click",function(){
    console.log("ho cliccato il bottone");
    container.classList.remove("d_none")
})

//creare un ciclo per creare le caselle con dentro 1 numero da 1 a 100
//creo elemento nella dom e lo appendo al contenitore

let num = 100

//let casella = `<div class="casella"></div>`

//container.insertAdjacentHTML("beforeend",casella)

for (let i = 1; i <= num; i++) {
    let casella = `<div class="casella">${i}</div>`
    container.insertAdjacentHTML("beforeend",casella)
    
}



