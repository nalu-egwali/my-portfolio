
const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelector('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSection = document.querySelectorAll('.main-content');

function pageTransitions() {
    for(let i = 0; i < sectionBtn.length; i++ ) {
        sectionBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn';
        })
    }
}

pageTransitions();