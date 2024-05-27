//tel mask
const phoneMask = new Inputmask("+7 (999) 999-99-99");
phoneMask.mask(document.getElementById("fr-s-tel"));

//form send
const form = document.getElementById('fr-s-form');
const nameInput = document.getElementById('fr-s-name');
const emailInput = document.getElementById('fr-s-email');
const phoneInput = document.getElementById('fr-s-tel');

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
        alert('Пожалуйста, заполните все поля.');
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

    document.getElementById('fr-s-form-wrap').style.display = 'none';
    document.getElementById('fr-s-form-suc').style.display = 'block';
});