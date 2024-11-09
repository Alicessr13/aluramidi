function tocaSom(seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTaclas = document.querySelectorAll('.tecla');

//let contador = 0;

for (let contador = 0; contador < listaDeTaclas.length; contador++) {

    const tecla = listaDeTaclas[contador];

    const instrumento = tecla.classList[1];

    console.log(instrumento);

    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    console.log(contador);

    //contador++;

    tecla.onkeydown = function (evento) {

        console.log(evento, evento.code);

        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
