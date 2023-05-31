console.log('JS ok')

// recupero gli elementi dal dom
const emailInput = document.getElementById('user-email');
const button = document.getElementById('button');
const warningMsg = document.getElementById('alert')
const successMsg = document.getElementById('success')

//creo la mia lista aray
const emailsList = ['giovanni.marci@gmail.com', 'pietro.sampini@gmail.com', 'alfredo.sappi@hotmail.it', 'pippo.ciccio@mail.it', 'michel.ramirez@gmail.com', 'michelramirez@outlook.it'];

//Al click del bottono ricevo la stringe immessa dal utente (email)
button.addEventListener('click', function(){
    
    const userEmail = emailInput.value.trim();

    // console.log(userEmail)
    
    let newEmail = []

    // creo un ciclo che controlli all'interno della mai lista di email se la mail del user è già presente ALTRIMENTI la aggiungo alla lista
    for (let i = 0; i < emailsList.length; i++ ){
        
        const newEmail = i

        if (emailsList[i] === userEmail){
            
            warningMsg.classList.add('d-block');
        } else {
            newEmail.push(emailsList);
            successMsg.classList.add('d-block');
        }
        
        console.log(userEmail);
    
    }

    
});