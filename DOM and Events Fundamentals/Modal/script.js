'use script';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnsOpenModal); shows all buttons in console

for(let i=0; i<btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', function() {
        // console.log('Button clicked');
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden');// only need to remove class to show the modal data.
    });
}

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);


// other keyboard events (escape key)
document.addEventListener('keydown', function(e) {
    // console.log('A key was pressed!');
    // console.log(e);
    if(e.key === 'Escape') {
        // console.log("Esc was pressed");
        if(!modal.classList.contains('hidden')) {
            closeModal();
        }
    }

});