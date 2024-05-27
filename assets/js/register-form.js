

//form send
const form = document.getElementById('register-form');
const nameInput = document.getElementById('register-name');
const emailInput = document.getElementById('register-email');
const phoneInput = document.getElementById('register-tel');

function isValidEmail(email) {

  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();


  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' ) {
    alert('Пожалуйста, заполните обязательные поля.');
    return;
  }

  if (!isValidEmail(emailInput.value.trim())) {
    alert('Пожалуйста, введите корректный email.');
    return;
  }

  if (!isValidPhone(phoneInput.value.trim())) {
    alert('Пожалуйста, введите корректный телефон.');
    return;
  }

});