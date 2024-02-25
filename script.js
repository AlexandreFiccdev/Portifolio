const texts = ["a developer", "a designer", "a software engineer", "me"];

let index = 0;
let charIndex = 0;
let direction = 1; // 1 para avançar, -1 para retroceder
const changingText = document.getElementById("changing-text");
function animateText() {
    if (charIndex === 0 && direction === -1) {
        index = (index + 1) % texts.length;
        direction = 1;
    }
    changingText.textContent = texts[index].substring(0, charIndex);
    if (charIndex === texts[index].length && direction === 1) {
        setTimeout(() => {
            direction = -1;
            animateText();
        }, 1000);
        return;
    }
    charIndex += direction;
    setTimeout(animateText, 120);
}
animateText();

const buttons = document.querySelectorAll('#top-nav .button-Topnav');

function updateButtonColor() {
    const scrollPosition = window.scrollY;

    const sobrePosition = document.getElementById('sobre-wrapper').offsetTop;
    const experienciaPosition = document.getElementById('experiencia-wrapper').offsetTop;
    const projetosPosition = document.getElementById('projetos-wrapper').offsetTop;
    const contatoPosition = document.getElementById('contato-wrapper').offsetTop;

    if (scrollPosition >= contatoPosition) {
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector('a[href="#contato-wrapper"] .button-Topnav').classList.add('active');
    } else if (scrollPosition >= projetosPosition) {
        // Está na seção de Projetos
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector('a[href="#projetos-wrapper"] .button-Topnav').classList.add('active');
    } else if (scrollPosition >= experienciaPosition) {
        // Está na seção de Experiência
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector('a[href="#experiencia-wrapper"] .button-Topnav').classList.add('active');
    } else if (scrollPosition >= sobrePosition) {
        // Está na seção Sobre
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector('a[href="#sobre-wrapper"] .button-Topnav').classList.add('active');
    } else {
        // Está na seção Home
        buttons.forEach(button => button.classList.remove('active'));
        document.querySelector('a[href="#home"] .button-Topnav').classList.add('active');
    }
}

// Chama a função quando a página é carregada e quando é feito o scroll
window.onload = function() {
    updateButtonColor();
};

window.onscroll = function() {
    updateButtonColor();
};