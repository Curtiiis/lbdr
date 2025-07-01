/*====================================
 =====       CALLBACK FORM       ===== 
 ====================================*/
function controlCallbackForm() {
  let phoneInput = $('#inputField');
  const errorMsg = "Le numéro doit comporter 10 chiffres."
  const phoneRegex = /^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/;

  phoneInput.onfocus = () => phoneInput.parentNode.parentNode.classList.add("filling");
  phoneInput.onblur = () => { if (phoneInput.value == "") phoneInput.parentNode.parentNode.classList.remove("filling") };
  phoneInput.oninput = () => displayFormValidity();
  phoneInput.oninvalid = () => phoneInput.setCustomValidity(errorMsg);
  $('#inputContainer').onsubmit = (e) => {
    e.preventDefault();
    validateForm();
  }

  /*=======    FUNCTIONS    =======*/
  function validatePhone(x) { return phoneRegex.test(x) };

  function displayFormValidity() {
    if (validatePhone(phoneInput.value)) {
      addAndRemoveClass($('#register'), 'success', 'wrongg');
      phoneInput.setCustomValidity('');
    }
    if ((!validatePhone(phoneInput.value) && phoneInput.value.length == 10)
      || (phoneInput.value.length > 10)) {
      fillErrorMsg();
      return
    }
    removeErrorMsg();
  };

  function validateForm() {
    if (!validatePhone(phoneInput.value)) {
      fillErrorMsg();
      return false;
    }
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzokSFd5pgw-L9AGemFWkRltPQsPHZxL_IPTvFtCQIgCyeCLs0EqMSF8OJdI84wkHty/exec';
    const form = document.forms['Sheet1'];
    $('#container-fixed').innerHTML = waitingFrame;
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        $('.overlay-inner').innerHTML = successFrame;
        setTimeout(() => window.location.replace('/'), 7000)
      })
      .catch(() => $('.overlay-inner').innerHTML = errorFrame);
  };

  function fillErrorMsg() {
    $('#register').classList.add('wrongg');
    $('#error-msg').innerText = errorMsg;
  };

  function removeErrorMsg() {
    $('#register').classList.remove('wrongg');
    $('#error-msg').innerText = "";
  };
};


