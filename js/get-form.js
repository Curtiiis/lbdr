// ARTICLES
const waitingFrame = '\n  <div class="overlay">\n    <div class="overlay-inner">\n      <div class="lds-ripple">\n        <div></div>\n        <div></div>\n      </div>\n    </div>\n  </div>\n'
  , successFrame = '\n  <div class="success-message">\n    <img src="./public/components/logos/logo-web-transparent-comp.png" alt="logo inspedia">\n    <h1>MERCI !</h1>\n    <h2>Votre demande a bien été envoyée</h2>\n    <a href="./" class="go-home-btn">Retourner à l\'accueil</a>\n  </div>\n  '
  , errorFrame = '\n  <div class="success-message">\n    <img src="./public/components/logos/logo-web-transparent-comp.png" alt="logo inspedia">\n    <h1>OUPS !</h1>\n    <h2>Une erreur s\'est produite</h2>\n    <a href="./contact.html" class="go-home-btn">Recommencer</a>\n  </div>\n  ';


// RUN SCRIPT
document.addEventListener('DOMContentLoaded', function () {

  const form = document.getElementById('gsForm');
  const scriptURL = form.action;

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const submitDate = $('#formInputDate');

    const now = new Date();
    submitDate.value = now.getFullYear() + '-' +
      String(now.getMonth() + 1).padStart(2, '0') + '-' +
      String(now.getDate()).padStart(2, '0') + ' ' +
      String(now.getHours()).padStart(2, '0') + ':' +
      String(now.getMinutes()).padStart(2, '0') + ':' +
      String(now.getSeconds()).padStart(2, '0');
    console.log(submitDate.value);

    setWaitingFrame();
    // setTimeout(() => fillThisElement('.overlay-inner', errorFrame), 2000);

    // Create a FormData object from the form
    const formData = new FormData(form);

    // Convert FormData to a URL-encoded string
    const formParams = new URLSearchParams();
    formData.forEach((value, key) => {
      formParams.append(key, value);
    });

    // Send the form data via fetch
    fetch(scriptURL, {
      method: 'POST',
      body: formParams,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        if (data.result === 'success') {
          fillThisElement('.overlay-inner', successFrame);
          goHomeAfter('/', 5000);
        } else {
          fillThisElement('.overlay-inner', errorFrame);
        }
      })
      .catch(error => {
        console.error('Error:', error);
        fillThisElement('.overlay-inner', errorFrame)
      });
  });
});



/*=======    FUNCTIONS    =======*/
function fillThisElement(e, t) {
  $(e).innerHTML = t
}

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
  // $('.page-wrapper').classList.add('blur');
};

function goHomeAfter(redirectUrl, time) {
  setTimeout(() => window.location.replace(redirectUrl), time)
};

// Confirm - LocalStorage
const Confirm = {
  open(options) {
    options = Object.assign({}, {
      title: 'INSPEDIA',
      message: '',
      okText: 'OUI',
      cancelText: 'NON',
      onok: function () { },
      oncancel: function () { }
    }, options);

    const template = document.createElement('template');
    template.innerHTML = templateArticle(options);

    // Elements
    const confirmEl = template.content.querySelector('.confirm');
    const btnOk = template.content.querySelector('.confirm__button--ok');
    const btnCancel = template.content.querySelector('.confirm__button--cancel');

    confirmEl.onclick = () => _close(confirmEl);
    btnOk.onclick = () => options.onok();
    btnCancel.onclick = () => options.oncancel();

    document.body.appendChild(template.content);
  },
};
function openConfirmLocalStorage() {
  if (localStorage.getItem('name') !== null) {
    _getLocalStorageOnSubmit(`Êtes-vous ${localStorage.getItem('name')} ?`, () => {
      getStoredItem('name', '#proAdvisorName');
      getStoredItem('email', '#proAdvisorEmail');
      $$('.blur-ctnr').forEach(x => x.classList.remove('blur'));
    })
  }
  if (localStorage.getItem('name') === null && localStorage.getItem('email') !== null) {
    _getLocalStorageOnSubmit(
      `Votre email est ${localStorage.getItem('email')} ?`, () => {
        getStoredItem('email', '#proAdvisorEmail');
        $$('.blur-ctnr').forEach(x => x.classList.remove('blur'));
      })
  }
}
function getStoredItem(storedItem, elementToFill) {
  if (localStorage.getItem(storedItem) !== null) {
    $(elementToFill).value = localStorage.getItem(storedItem);
    $(elementToFill).parentNode.classList.add("focus");
  }
};
function _getLocalStorageOnSubmit(question, callback) {
  $$('.blur-ctnr').forEach(x => x.classList.add('blur'));
  Confirm.open({
    message: question,
    onok: callback,
    oncancel: () => {
      localStorage.clear();
      _close(confirmEl);
    }
  });
}
let templateArticle = (options) => `
<div class="confirm">
    <div class="confirm__window">
        <div class="confirm__titlebar">
            <span class="confirm__title">${options.title}</span>
        </div>
        <div class="confirm__content">${options.message}</div>
        <div class="confirm__buttons">
            <button class="confirm__button confirm__button--ok confirm__button--fill">${options.okText}</button>
            <button class="confirm__button confirm__button--cancel">${options.cancelText}</button>
        </div>
    </div>
</div>
`;
function _close(confirmEl) {
  confirmEl.classList.add('confirmClose');

  confirmEl.addEventListener('animationend', () => {
    document.body.removeChild(confirmEl);
  });
  $$('.blur-ctnr').forEach(x => x.classList.remove('blur'));
}