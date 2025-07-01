/*===============================
 =====       GET FORM       ===== 
 ===============================*/
// LISTEN CLICK FOR CUSTOMER TYPE
$('#customerTypePart').onclick = () => showAndHide('#checkbox-particular-text', '#checkbox-pro-text');
$('#customerTypePro').onclick = () => showAndHide('#checkbox-pro-text', '#checkbox-particular-text');

// LABEL UP ON FOCUS ANY FORM INPUT TEXT
labelUpOnFocusMultiple('.input');


// Form submit
const form = document.forms['gsForm'];
const scriptURL = 'https://script.google.com/macros/s/AKfycbxHRgAGIdg_UcOoo3s-m1TCOw7NINaVsuMA8FiuW221QaTjkFu6FVJidVZIov-l7RyG/exec';

form.onsubmit = e => {

  e.preventDefault();
  setWaitingFrame();

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(() => {
      fillThisElement('.overlay-inner', successFrame);
      goHomeAfter('/', 7000);
    })
    .catch(() => fillThisElement('.overlay-inner', errorFrame))
};

/*=======    FUNCTIONS    =======*/
function labelUpOnFocusMultiple(el) {
  $$(el).forEach((input) => {
    input.addEventListener("focus", () => input.parentNode.classList.add("focus"));
    input.addEventListener("blur", () => {
      if (input.value == "") input.parentNode.classList.remove("focus");
    });
  });
};

function displayValidityMsg(el) {
  const validityMsg = "Merci de cocher cette case pour valider le formulaire";
  $(el).addEventListener('invalid', (e) => {
    if ($(el).validity.valueMissing) {
      $(el).setCustomValidity(validityMsg);
    }
  });
  $(el).onchange = () => $(el).setCustomValidity('');
}

function setWaitingFrame() {
  $('.overlay-container').innerHTML = waitingFrame;
  $('.body-container').classList.add('blur');
};

function goHomeAfter(redirectUrl, time) {
  setTimeout(() => window.location.replace(redirectUrl), time)
};