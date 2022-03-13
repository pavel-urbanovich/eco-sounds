console.log('Вёрстка +10(более пяти интерактивных элементов, с которыми пользователи могут взаимодействовать +5,\nв футере приложения есть ссылка на гитхаб, год создания приложения, логотип курса со ссылкой на курс +5,\nПри кликах по интерактивным элементам меняется изображение +10\nПри кликах по интерактивным элементам меняется звук +10\nАктивный в данный момент интерактивный элемент выделяется стилем +10\nКнопка Play/Pause +20 (есть кнопка Play/Pause, при клике по которой можно запустить или остановить проигрывание звука +10,\nвнешний вид и функционал кнопки Play/Pause изменяется в зависимости от того, проигрывается ли в данный момент звук +10)\nДополнительный не предусмотренный в задании функционал, улучшающий качество приложения(добавлен трек дятла и картинка к нему, адаптивный до 320px дизайн, добавлен бургер, выезжает меню, добавлена бела тема, возможность скачать звук, который проигрывается) +10)')

let isPlay = false;
const button = document.querySelector('.button');
const navigation = document.querySelector('.header-navigation');
const birdsName = document.querySelectorAll('[data-birds]')
const audio = document.querySelector('audio');
const main = document.querySelector('main');
const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.navigation');
const footer = document.querySelector('.footer');
const logo = document.querySelector('.header-logo');
const download  = document.querySelector('.download-logo');
const logoTheme = document.querySelector('.logo-theme');
const footerLogo = document.querySelector('.footer-logo');
const line = document.querySelectorAll('.line');
const github = document.querySelector('.github-link');
const schoolLink = document.querySelector('.school-link');
const arr = [footer, logo, main];




function playAudio() {
    if(!isPlay) {
        audio.currentTime = 0;
        audio.play();
        isPlay = true;
        button.classList.add('play')
    } else {
        audio.pause();
        isPlay = false;
        button.classList.remove('play')
    }
}

function getImage(target) {
    main.style.backgroundImage = `url(assets/img/${target}.jpg)`;
}

button.addEventListener('click', playAudio);

function playBirds(event) {
    if(event.target.classList.contains('nav-item')) {
        birdsName.forEach(item => item.classList.remove('active'));
        event.target.classList.add('active');
        const target = event.target.getAttribute('data-birds');
        audio.src = `assets/audio/${target}.mp3`;
        download.href = `assets/audio/${target}.mp3`;
        isPlay = false;
        playAudio()
        getImage(target);
    }
}

navigation.addEventListener('click', playBirds)

function openMenu() {
    burger.classList.toggle('open');
    menu.classList.toggle('open');
    arr.forEach(item => item.classList.toggle('active'))
}

burger.addEventListener('click', openMenu)

function closeMenu (event) {
    if (event.target.classList.contains('nav-item')) {
        menu.classList.remove('open');
        burger.classList.remove('open');
        arr.forEach(item => item.classList.remove('active'))
    }
}

navigation.addEventListener('click', closeMenu);

function changeTheme() {
    const whiteElem = [document.body, logoTheme, logo, footerLogo, menu, github, schoolLink, download];
    whiteElem.forEach(item => item.classList.toggle('white'));
    line.forEach(item => item.classList.toggle('white'))
}

logoTheme.addEventListener('click', changeTheme)

