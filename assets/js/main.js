function randomNumGen(min, max){
    return Math.floor (Math.random()*(max-min + 1)+min);
}

const gridHtml = document.querySelector('.inner-grid');
const btnPlay = document.getElementById('btnPlay');

const difficulty = document.getElementById('difficultySelection');
const resultHtml = document.getElementById('result');
resultHtml.style.display = 'none'

//al click del bottone viene creata la griglia in base alla difficoltà
btnPlay.addEventListener('click', function(){

    //vari reset 
    console.clear();
    gridHtml.innerHTML='';
    gridHtml.style.pointerEvents = 'all';
    resultHtml.innerHTML = '';
    let tries = 0;
    let bombs = [];
    resultHtml.style.display = 'none'


    //x conterrà il numero di caselle
    //choice conterrà il nome della classe che imposta il numero di elementi in una sola riga
    let choice = '';
    let x;

    switch(difficulty.value){
        case 'easy':
            x = 100;
            choice = 'boxEasy';
            break;

        case 'normal':
            x = 81;
            choice = 'boxNormal';
            break;

        case 'hard':
            x = 49;
            choice = 'boxHard';
            break;

    }

    //creiamo il numero di caselle in base alla scelta dell'utente
    
    for(let i = 1; i <= x; i++){
        
        //generazione di bombe con numeri randomici non ripetuti
        while(bombs.length < 16){
            let randomBombs = randomNumGen(1, x);

            if(!bombs.includes(randomBombs)){
                bombs.push(randomBombs);
            }

        }
        //creiamo l'elemento div
        let box = document.createElement('div');
        
        //al div aggiungiamo la classe box che servirà a dare l'aspetto alla casella
        //aggiungiamo anche la variabile choice che contiene una delle 3 classi basate sulla difficoltà 
        box.classList.add('box', choice);
    
        //all'interno del div stamperemo il valore dell'iterazione, quindi da 1 a 100. Decommentare la riga sotto per vedere il numero delle caselle
        // box.innerHTML = `<span>${i}</span>`;
        
        //aggiungiamo il div con tutte le classi da noi aggiunte alla griglia nell'html
        gridHtml.append(box);
        
        
        //ogni casella avrà un evento al click che aggiungerà e toggliera tramite TOGGLE la classe active a ogni specifica casella grazie al this.
        box.addEventListener('click', function(){

            //al click di un box se il numero associato alla casella non rientra in quelli generati dal vettore BOMBS allora la casella diventerà azzurra e potremo continuare a cliccarne altre
            //se la casella risulta essere una bomba allora diventerà rossa, non potremo più cliccare nulla nella griglia e in console avremo il numero di caselle cliccate fino a quel momento
            
            if(bombs.includes(i)){

                this.classList.add('bomb');
                
                resultHtml.style.display = 'block'
                if(tries == 1){
                    resultHtml.innerHTML = (`<p>Hai azzeccato ${tries} casella prima di esplodere!</p>
                                            <p class='play'>Clicca il pulsante Play per ricominciare!</p>`)
                }else{
                    resultHtml.innerHTML = (`<p>Hai azzeccato ${tries} caselle prima di esplodere!</p>
                    <p class='play'>Clicca il pulsante Play per ricominciare!</p>`)
                }
                gridHtml.style.pointerEvents = 'none';

            }else{

                this.classList.add('active');
                this.style.pointerEvents = 'none';
                tries = tries + 1;

                if (tries == x - bombs.length) {
                    console.log(`Complimenti hai completato il gioco`)
                    gridHtml.style.pointerEvents = 'none';
                }
            }
        })
    }
})
