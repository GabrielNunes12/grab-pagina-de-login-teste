const userInput = document.querySelector('#input-user');
const userPasswordInput = document.querySelector('#input-user-password');
const enviarBtn = document.querySelector('.btn-logar');

enviarBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if(!userInput.value || !userPasswordInput.value) {
    throw new Error('Deve informar usuário e senha');
  }
  console.log('Logado com sucesso!');
})