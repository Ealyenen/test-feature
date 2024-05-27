

//form send
const form = document.getElementById('forgot-s-form');
const nameInput = document.getElementById('forgot-s-name');
const emailInput = document.getElementById('forgot-s-email');
const phoneInput = document.getElementById('forgot-s-tel');

function isValidEmail(email) {

  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

form.addEventListener('submit', (event) => {
  event.preventDefault();


  if (!isValidEmail(emailInput.value.trim())) {
    alert('Пожалуйста, введите корректный email.');
    return;
  }

});