const toogleBtn = document.querySelector('.toogle_btn');
const toogleBtnIcon = document.querySelector('.toogle_btn i');
const mobileMenu = document.querySelector('.mobile_menu');

toogleBtn.onclick = function() {
    mobileMenu.classList.toggle('open');
    const isOpen = mobileMenu.classList.contains('open');

    toogleBtnIcon.classList = isOpen ? 'fas fa-times' : 'fas fa-ellipsis-v';
}