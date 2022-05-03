

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

  let email = document.querySelector('#email').value;
  let password = document.querySelector('#password').value;

  let json = {
    email,
    password
    
  };

  if (!json.email) {

    console.error("O campo e-mail deve preenchido!");

  } else if (!json.password) {

    console.error("O camppo password deve ser preechido!");

  } else {

    console.info("Dados validados com sucesso!");
  }

});