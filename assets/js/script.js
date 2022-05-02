

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

  let jason = {
      email: email,
      password
    
  };
  console.log(json);

  let stringJSON = JSON.stringify(json);
  console.log(stringJSON);

  let jsonParse = JSON.parse(stringJSON);
  
  console.log(jsonParse);

});