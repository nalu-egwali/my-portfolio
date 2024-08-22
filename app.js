
const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelector('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelectorAll('.main-content');

function pageTransitions() {
    for(let i = 0; i < sectionBtn.length; i++ ) {
        sectionBtn[i].addEventListener('click', function () {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].classList = currentBtn[0].className.replace('active-btn', '')
            this.className += ' active-btn';
        })
    }

    // sections active
    sectionBtn.forEach(btn => {
        btn.addEventListener('click', (e)=> {
            const id = e.target.dataset.id;
            if (id) {
                //remove active from all buttons
                sectionBtn.forEach(btn => {
                    btn.classList.remove('active');
                })
                // activate the target button
                e.target.classList.add('active');

                // deactivate all sections
                sections.forEach(section => {
                    section.classList.remove('active');
                })
                // activate the target section
                const targetSection = document.getElementById(id);
                targetSection.classList.add('active');

            }
        })
    })

}

pageTransitions();