//tel mask
const phoneMask = new Inputmask("+7 (999) 999-99-99");
phoneMask.mask(document.getElementById("add-payment-tel"));

//form send
const form = document.getElementById('add-payment-form');
const nameInput = document.getElementById('add-payment-name');
const emailInput = document.getElementById('add-payment-email');
const phoneInput = document.getElementById('add-payment-tel');


function isValidPhone(phone) {
  const phoneRegex = /\d{11}/g;
  const cleanedPhone = phone.replace(/\D/g, '');
  return phoneRegex.test(cleanedPhone);

}

form.addEventListener('submit', (event) => {
  event.preventDefault();


  if (!isValidPhone(phoneInput.value.trim())) {
    alert('Пожалуйста, введите корректный телефон.');
    return;
  }

});