const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  checkInput();
  // document.getElementById('form').reset();
})

function checkInput() {
  const emailValue = email.value.trim();

  if(emailValue === '') {
    setErrorFor(email, 'Email cannot be empty');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Looks like this is not an email');
  } else {
    setSucessFor(email)
  }

}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  small.innerText = message;
  formControl.className = 'form-control error';

}

function setSucessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control sucess';
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
