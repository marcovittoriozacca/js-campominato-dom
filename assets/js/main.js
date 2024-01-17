const gridHtml = document.querySelector('.inner-grid');
const btnPlay = document.getElementById('btnPlay');

const difficulty = document.getElementById('difficultySelection');

//al click del bottone viene creata la griglia in base alla difficoltà
btnPlay.addEventListener('click', function(){
    console.clear();
    gridHtml.innerHTML='';

    //x conterrà il numero di caselle
    //choice conterrà il nome della classe che imposta il numero di elementi in una sola riga

    let choice = '';

    let x;

    switch(difficulty.value){
        case 'easy':
            x = 49;
            choice = 'boxEasy';
            break;

        case 'normal':
            x = 81;
            choice = 'boxNormal';
            break;

        case 'hard':
            x = 100;
            choice = 'boxHard';
            break;

    }

    //creiamo il numero di caselle in base alla scelta dell'utente
    
    for(let i = 1; i <= x; i++){
        
        //creiamo l'elemento div
        let box = document.createElement('div');
        
        //al div aggiungiamo la classe box che servirà a dare l'aspetto alla casella
        //aggiungiamo anche la variabile choice che contiene una delle 3 classi basate sulla difficoltà 
        box.classList.add('box', choice);
    
        //all'interno del div stamperemo il valore dell'iterazione, quindi da 1 a 100
        box.innerHTML = `<span>${i}</span>`;
        
        //ogni casella avrà un evento al click che aggiungerà e toggliera tramite TOGGLE la classe active a ogni specifica casella grazie al this.
        box.addEventListener('click', function(){
            this.classList.toggle('active')

            //stampa il valore della casella cliccata in console
            console.log(i)
        })
        //aggiungiamo il div con tutte le classi da noi aggiunte alla griglia nell'html
        gridHtml.append(box);
    }
})

