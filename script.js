/* TODO: inserite il codice JavaScript necessario a completare il MHW! */


/* fuzione che mi restituisce la personalità corrispondente  */
function risultato(){

    if(risposta['one']=== risposta['two'] || risposta['one']=== risposta['three'] ) 
    return risposta['one'];
 
    if(risposta['two']=== risposta['one'] || risposta['two']=== risposta['three'] ) 
    return risposta['two'];
 
    if(risposta['three']=== risposta['one'] || risposta['three']=== risposta['two'] ) 
    return risposta['three'];
 
    if(risposta['one'] !== risposta['two'] || risposta['one'] !== risposta['three'] ) 
    return risposta['one'];
     
   }

   function restart(){
    risposta={};

   result.classList.add('hidden');
   
   for(const box of boxes)
   {
       box.addEventListener('click',click);
       box.querySelector(".checkbox").src='./images/unchecked.png';
       box.classList.remove('foto_evidenza');
       let opacità =box.querySelector('.overlay');
       opacità.classList.add('hidden');


   }
}


function click(event){

    const e=event.currentTarget;
    img = e.querySelector('.checkbox');
    img.src='./images/checked.png';
    e.classList.add('foto_evidenza');
/* dichiaro una variabile: overlay, dove associo la classe overlay*/
    let overlay=e.querySelector('.overlay');
    /* quando cambiamo risposta,applichiamo l'hidden al div cliccato,così non sarà opaco*/
    
    if(!overlay.classList.contains('hidden')) 
    {
        overlay.classList.add('hidden');
    }

    for(const box of boxes)      
    {
        /*per tutti i div che non sono quello cliccato viene tolto l'hidden cosi verranno opachi */
        if(box.dataset.questionId==e.dataset.questionId && box!==e)
        {
            let overlay=box.querySelector('.overlay');
            overlay.classList.remove('hidden');

            /*questo per cambiare blocco selezionato,ovvero se clicco in un altra immagine si leva il check 
            e lo sfondo azzurro della immaggine precedentemente selezionata*/
            if(box.classList.contains('foto_evidenza'))
            {
                box.classList.remove('foto_evidenza');
                let img= box.querySelector('.checkbox');
                img.src='./images/unchecked.png';
            }
        }

    }
/*salvo le selezioni fatte dall'utente in risposta dichiarata all'inizio */
    risposta[e.dataset.questionId]=e.dataset.choiceId;
/*controllo che le risposte siano 3, se è cosi allora rimuovo da tutti i div l'eventlistener */

    if(Object.keys(risposta).length===3){
        for(const i of boxes)
        {
            i.removeEventListener('click',click);
        }
 /*salvo il return della funzione risultato e lo uso per accedere al RESULTS_MAP */
        const r=risultato();
        const titolo = RESULTS_MAP[r].title;
        const descrizione = RESULTS_MAP[r].contents;
        result.querySelector('h1').textContent=titolo;
        result.querySelector('p').textContent=descrizione;
        result.classList.remove('hidden');
        const button=document.querySelector('#button');
        button.addEventListener('click',restart);

    }
}





  const boxes =document.querySelectorAll('.choice-grid .class');
let risposta={};
const result=document.querySelector('#result');

for(const box of boxes)
{
box.addEventListener('click',click);
}
