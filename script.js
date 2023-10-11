let navList = document.getElementById('nav-list');
let menu = document.querySelector('.menu');
let close = document.querySelector('.close');

menu.addEventListener('click', () => {
    menu.style.opacity = '0%';
    navList.style.opacity = '100%';
    close.style.opacity = '100%';
    close.style.zIndex = '2';
    navList.style.transition = 'all ease .7s'
    navList.style.transform = 'translateY(30px)'
    navList.style.visibility = 'visible';
})

close.addEventListener('click', () => {
    menu.style.opacity = '100%';
    navList.style.opacity = '0%';
    close.style.opacity = '0%';
    close.style.zIndex = '-1';
    navList.style.transform = 'translateY(-30px)'
    navList.style.visibility = 'hidden';
})