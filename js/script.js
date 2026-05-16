// toon het huidige jaar in de footer
// haal eerste het huidige jaar op
const currentYear = new Date().getFullYear();
// toon huidige jaar nadien in het element met id "year" in footer
document.getElementById("year").textContent = currentYear;

// Script voor form-control: methode om ingevoerde gegevens te valideren wanneer het formulier ingevuld wordt
(() => {
  'use strict';
  const forms = document.querySelectorAll('.needs-validation');

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
