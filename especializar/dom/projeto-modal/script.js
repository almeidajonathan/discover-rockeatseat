// //SELECTORS
const btnOpenModal = document.querySelector('button.primary-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');
const submitBtn = document.querySelector('button.confirm');
const input = document.querySelector('input');
const warningMessage = document.querySelector('.warning');
const toastMessage = document.querySelector('.toast-message');

function toggleModal() {
    modal.classList.toggle('disabled');
}

function submitInput() {

    input.onkeyup = function(event) {
        // console.log(event.key);
        warningMessage.classList.add('disabled');
    }

    if(input.value == '') {
        console.log('removendo classe disabled');
        warningMessage.classList.remove('disabled');
    // } else if(input.value != '' && warningMessage.classList[1] != 'disabled') {
    //     warningMessage.classList.add('disabled');
    //     console.log('adicionando classe disabled');
    } else {

        modal.classList.add('disabled');
    }
    
    input.value = '';
   
}

//LISTENERS
btnOpenModal.addEventListener('click', toggleModal);
if(closeBtn != null ) {
    closeBtn.addEventListener('click', toggleModal);
}

submitBtn.addEventListener('click', submitInput);

