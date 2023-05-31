console.log('JS ok')
// raccolgo gli elementi dal dom
const buttonDado = document.getElementById('btn-dadi');
const resultUser = document.getElementById('numero-utente');
const resultCpu = document.getElementById('numero-cpu');
const winner = document.getElementById('winner')

//il bottone al click avvia due cicli per generare i numeri randmon
buttonDado.addEventListener('click', function(){

    //creo la costante array vuota dove andrò a salvare i risultati
    const numberList = []

    //variabile di appoggio dove salverò il risultato di i
    let userDado = ''

    // creo 1 ciclo che genera un numero random 
    for (let i = 0; i < 1; i++){

        // assegno il numero random alla variabile
        userDado = Math.floor((Math.random() * 6) + 1);

        //pusho la variabile con il numero creato dentro la lista array
        numberList.push(userDado);
    }

    let cpuDado = '' 

    for (let i = 0; i < 1; i++){
        cpuDado = Math.floor((Math.random() * 6) + 1);
        numberList.push(cpuDado);

        // creo un controllo dentro il ciclo, SE il numero generato esiste già nella lista allora rifai il ciclo
        if (numberList[i] === cpuDado){
            console.log('Esiste già')
        }
    }

    resultUser.innerText = userDado;
    resultCpu.innerText = cpuDado;

    // controllo se il numero del utente è maggiore di quello generato per la cpu allora stampa in console 'ha vinto l'utente', ALTRIMENTI stampa in console 'Ha vinto la cpu'
    if (userDado > cpuDado){
        winner.innerText = 'Sei fortunato! Hai vinto'
        console.log("Ha vinto l'utente")
    } else {
        winner.innerText = 'Si stato sfortunato! Ha vinto la CPU'
        console.log('Ha vinto la cpu')
    }
    
    console.log(numberList)
});    


