const form = document.querySelector('#signup-form');
const ageInput = document.querySelector('#age');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const age = ageInput.value;
  if (age < 17) {
    const error = document.querySelector('#error-message');
    if (!error) {
      const errorMessage = document.createElement('p');
      errorMessage.id = 'error-message';
      errorMessage.textContent = 'You must be 17 or older to sign up.';
      form.appendChild(errorMessage);
    }
  } else {
    form.submit();
  }
});