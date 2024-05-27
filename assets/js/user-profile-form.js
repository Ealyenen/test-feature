//tel mask
const phoneMask = new Inputmask("+7 (999) 999-99-99");
phoneMask.mask(document.getElementById("user-profile-tel"));

//form send
const form = document.getElementById('user-profile-form');
const nameInput = document.getElementById('user-profile-name');
const emailInput = document.getElementById('user-profile-email');
const phoneInput = document.getElementById('user-profile-tel');

function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const phoneRegex = /\d{11}/g;
  const cleanedPhone = phone.replace(/\D/g, '');
  return phoneRegex.test(cleanedPhone);

}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '') {
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