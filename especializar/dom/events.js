//EVENTOS
function exibirAlerta() {
    alert('Alerta');
}

// const input = document.querySelector('input');

input.onkeydown = function (event) {
    console.log(event.code, event.key);
}

