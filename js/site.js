const form = document.querySelector('#signup-form');
const ageInput = document.querySelector('#age');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const ageInput = document.getElementById('age');
  const platformInput = document.getElementById('tester_platform');

  if (ageInput.value < 17) {
    alert('Sorry, you must be at least 17 years old to join the beta tester list.');
    return;
  }
 else{
  form.submit();
  alert("Great Job!! You have successfully joined the tester list.");
  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
  platformInput.value = ""
}
});
