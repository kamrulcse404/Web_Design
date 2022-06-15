const open_btn = document.querySelector('.open-popup');

const close_btn = document.querySelector('.close-popup');

const popup = document.querySelector('.popup');

open_btn.addEventListener('click', () => {
    popup.style.visibility = 'visible';
});

close_btn.addEventListener('click', () => {
    popup.style.visibility = 'hidden';
});

window.addEventListener('click', (e) => {
    if(e.target === document.querySelector('.popup-overly')){
        popup.style.visibility = 'hidden';
    }
});