// SELETORES
const title = document.getElementById('blog-title');
console.log(title);

const paragraphs = document.getElementsByClassName('paragraph');
console.log(paragraphs); //gera um HTMLCollection

// const body = document.getElementsByTagName('body');
// console.log(body);
const body = document.querySelector('body');

const script = document.querySelector('[src]');
console.log(script);

const divBlocs = document.querySelectorAll('.bloc');
console.log(divBlocs);

const input = document.querySelector('input');
const link = document.querySelector('.link a')

const button = document.querySelector('button');

const header = document.querySelector('header');
const main = document.querySelector('main')

//MANIPULAÇÃO
title.textContent += '. Olá, devs!';
paragraphs[0].innerText += ' [Texto alterado]';
paragraphs[3].innerHTML += '<span> [Versão desatualizada]</span>';

input.value = '0'
link.setAttribute('target','_blank');
input.setAttribute('class','input');

console.log(input.getAttribute('class'));


//ESTILOS E CLASSES
function toggleTheme() {
    body.classList.toggle('dark');
    
    if(body.classList.contains('dark')) {
        body.style.color = 'white';
        body.style.backgroundColor = 'black';
        button.innerText = 'light theme'
    } else {
        body.style.color = 'black';
        body.style.backgroundColor = 'white';
        button.innerText = 'dark theme'
    }

    
}

//EVENT
button.addEventListener("click", toggleTheme)


//NAVEGANDO PELOS ELEMENTOS
console.log(input.parentNode);

console.log(body.childNodes)
const list = body.childNodes;
list.forEach(el => {
    if(el.nodeName !== '#text') {
        console.log(`ELEMENTO: ${el.nodeName}`);
    }
});

console.log(header.nextElementSibling);
console.log(main.previousElementSibling);

//CRIANDO ELEMENTOS
const footer = document.createElement('footer');
const newParagraph = document.createElement('p');
newParagraph.innerHTML = 'footer';
footer.style.width = '100vw';
footer.style.height = '100px';
footer.style.backgroundColor = 'red';
footer.appendChild(newParagraph);
body.appendChild(footer);

const hr = document.createElement('hr');
footer.prepend(hr);