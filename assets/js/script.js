

document.getElementById('btn-submit').addEventListener('click', e => {

    console.log('O mouse foi clicado!');

});

document.getElementById('form-login').addEventListener('mouseenter', e => {

    console.log('O mouse está sobre o formulário');

});

document.querySelector('#form-login').addEventListener('mouseleave', e => {

    console.log('O mouse está fora  do formulário');

});

document.querySelector('#form-login').addEventListener('submit', e => {

    e.preventDefault();

    console.log('Formulário enviado! Aqui vai o Ajax.');

});