const datas = {
  "infos": {
    "phoneNumber": "0650675672",
    "phoneTxt": "06 50 67 56 72",
    "mail": "contact@inspedia.fr",
    "address": "6, rue de la Chalouette",
    "town": "91700 Fleury-mérogis",
    "maps": "https://maps.google.com/maps?q=6+Rue+de+la+Chalouette+91700+Fleury-Mérogis",
  },
  "cta": {
    "getMessage": "Obtenir mon devis",
    "callbackMsg": "être rappelé",
    "question": "Vous souhaitez un devis ?",
    "answer": "Demandez votre devis en <strong>3min</strong>",
    "submessage": "Gratuit - Sans engagement"
  },
  "reviews": {
    "title": "Nos avis",
    "subtitle": "Ils nous font confiance",
    "description": "Une transparence assurée. Chez Inspedia, tous les avis comptent. C'est la raison pour laquelle nous montrons tous nos avis clients.",
  },
}
let liButton = (item) => {
  return `
  <button type="button" id="get-${item.icon}-products-button" class="get-products" name="get-${item.icon}-products" aria-label="get-${item.icon}-products">
    <span><i class="icon-ctnr ${item.icon}"></i>${item.text}</span>
    <i class="icon-ctnr arrow_right"></i>
  </button>`
};
let liLink = (item) => `
  <a href="./${item.link}.html">
    <span><i class="icon-ctnr ${item.icon}"></i>${item.text}</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  `;
let liLink2 = (item) => `
  <a href="./${item.link}.html">
    <span><i>${item.icon}</i>${item.text}</span>
  </a>
    `;
const returnButton = `
  <button type="button return-btn">
    <i class="icon-ctnr return"></i>
  </button>`;
const navMobileContent = `
<div id="nav-mobile" class="nav__mobile">
  <div class="nav__mobile__title">
    <div class="return-btn" id="return-btn"></div>
    <span id="menu-title">Menu</span>
    <button type="button" id="close-btn" class="close-btn" name="close-menu-button" aria-label="close-menu-button">
      <i class="icon-ctnr cross_circle35"></i>
    </button>
  </div>

  <nav>
  <ul class="nav__mobile__ul gap16" id="nav-mobile-ul">
<li class="li-button sell">
  <button type="button" id="get-sell-products-button" class="get-products" name="get-sell-products" aria-label="get-sell-products">
    <span><i class="icon-ctnr sell"></i>Diagnostics vente</span>
    <i class="icon-ctnr arrow_right"></i>
  </button></li>
<li class="li-button rent">
  <button type="button" id="get-rent-products-button" class="get-products" name="get-rent-products" aria-label="get-rent-products">
    <span><i class="icon-ctnr rent"></i>Diagnostics location</span>
    <i class="icon-ctnr arrow_right"></i>
  </button></li>
<li class="link home_repair">
  <a href="./diagnostics/audit-energetique.html">
    <span><i class="icon-ctnr home_repair"></i>Audit Énergétique</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link faq">
  <a href="./faq.html">
    <span><i class="icon-ctnr faq"></i>Foire aux questions</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="button cta_call">
  <a class="cta-button call" href="tel:0650675672">
   <i class="icon-ctnr call"></i><span>06 50 67 56 72</span>
  </a>
</li>
<li class="button cta_get">
    <a href="./obtenir-mon-devis.html" class="cta-button get-devis">
      <span>Obtenir mon devis</span>
    </a>
</li>
<li class="button cta_callback">
  <button type="button" class="cta-button callback callback-black" name="callback-button" aria-label="callback-button">
    <i class="icon-ctnr callback_icon-white"></i><span>être rappelé</span>
  </button>
</li>
</ul>
  </nav>
</div>
`;
const menuBaseList = `
<li class="li-button sell">
  <button type="button" id="get-sell-products-button" class="get-products" name="get-sell-products" aria-label="get-sell-products">
    <span><i class="icon-ctnr sell"></i>Diagnostics vente</span>
    <i class="icon-ctnr arrow_right"></i>
  </button></li>
<li class="li-button rent">
  <button type="button" id="get-rent-products-button" class="get-products" name="get-rent-products" aria-label="get-rent-products">
    <span><i class="icon-ctnr rent"></i>Diagnostics location</span>
    <i class="icon-ctnr arrow_right"></i>
  </button></li>
<li class="link home_repair">
  <a href="./diagnostics/audit-energetique.html">
    <span><i class="icon-ctnr home_repair"></i>Audit Énergétique</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link faq">
  <a href="./faq.html">
    <span><i class="icon-ctnr faq"></i>Foire aux questions</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="button cta_call">
  <a class="cta-button call" href="tel:0650675672">
   <i class="icon-ctnr call"></i><span>06 50 67 56 72</span>
  </a>
</li>
<li class="button cta_get">
    <a href="./obtenir-mon-devis.html" class="cta-button get-devis">
      <span>Obtenir mon devis</span>
    </a>
</li>
<li class="button cta_callback">
  <button type="button" class="cta-button callback callback-black" name="callback-button" aria-label="callback-button">
    <i class="icon-ctnr callback_icon-white"></i><span>être rappelé</span>
  </button>
</li>
`;
const sellList = `
<li class="link warningSell">
  <a href="./diagnostics/obligations-vente.html">
    <span><i class="icon-ctnr warningSell"></i>Obligations vente</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link amiante">
  <a href="./diagnostics/amiante.html">
    <span><i class="icon-ctnr amiante"></i>Amiante</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link sparkles">
  <a href="./diagnostics/assainissement.html">
    <span><i class="icon-ctnr sparkles"></i>Assainissement</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link sun">
  <a href="./diagnostics/dpe.html">
    <span><i class="icon-ctnr sun"></i>DPE</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link lightning">
  <a href="./diagnostics/electricite.html">
    <span><i class="icon-ctnr lightning"></i>Électricité</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link plane">
  <a href="./diagnostics/ensa.html">
    <span><i class="icon-ctnr plane"></i>ENSA / Bruit</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link seedling">
  <a href="./diagnostics/erp.html">
    <span><i class="icon-ctnr seedling"></i>ERP : Risques et Pollution</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link fire">
  <a href="./diagnostics/gaz.html">
    <span><i class="icon-ctnr fire"></i>Gaz</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link ruler_1">
  <a href="./diagnostics/mesurage-loi-carrez.html">
    <span><i class="icon-ctnr ruler_1"></i>Mesurage loi Carrez</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link drop">
  <a href="./diagnostics/plomb.html">
    <span><i class="icon-ctnr drop"></i>Plomb</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link termite">
  <a href="./diagnostics/termites.html">
    <span><i class="icon-ctnr termite"></i>Termites</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
`;
const rentList = `
<li class="link warningRent">
  <a href="./diagnostics/obligations-location.html">
    <span><i class="icon-ctnr warningRent"></i>Obligations location</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link amiante">
  <a href="./diagnostics/amiante.html">
    <span><i class="icon-ctnr amiante"></i>Amiante</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link sun">
  <a href="./diagnostics/dpe.html">
    <span><i class="icon-ctnr sun"></i>DPE</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link lightning">
  <a href="./diagnostics/electricite.html">
    <span><i class="icon-ctnr lightning"></i>Électricité</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link plane">
  <a href="./diagnostics/ensa.html">
    <span><i class="icon-ctnr plane"></i>ENSA / Bruit</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link seedling">
  <a href="./diagnostics/erp.html">
    <span><i class="icon-ctnr seedling"></i>ERP : Risques et Pollution</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link laptop_house">
  <a href="./diagnostics/etat-des-lieux.html">
    <span><i class="icon-ctnr laptop_house"></i>État des lieux</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link fire">
  <a href="./diagnostics/gaz.html">
    <span><i class="icon-ctnr fire"></i>Gaz</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link straight_ruler">
  <a href="./diagnostics/mesurage-loi-boutin.html">
    <span><i class="icon-ctnr straight_ruler"></i>Mesurage loi Boutin</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link drop">
  <a href="./diagnostics/plomb.html">
    <span><i class="icon-ctnr drop"></i>Plomb</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
`;
const reviewsSection = `
<div class="section-inner">
<div class="row-titles" id="reviews-titles"></div>
<div class="slide-container swiper">
  <div class="slide-content">
    <div id="card-wrapper" class="swiper-wrapper">
      <div class="card card-slides main-card swiper-slide">
        <div class="card-review-inner">
          <div><p class="card-title">Nos avis clients</p></div>
          <div class="main-card-info df-aib gap8">
            <p class="rate ff1 fw800" id="average-rate"></p>
            <div class="hearts"></div>
          </div>
          <div>
            <p class="total-reviews ff2">Note basée sur <strong><span id="total-reviews"></span> avis</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="swiper-navBtn swiper-button-next next"></div>
  <div class="swiper-navBtn swiper-button-prev prev"></div>
  <div class="swiper-pagination"></div>
</div>
</div>
`;
let reviewsArticle = (item) => `
<div class="card card-slides card-review swiper-slide">
<div class="card-review-inner">
  <div class="card-logo">
    <img src="/public/components/icons/google.png" alt="logo de la plateforme"
      width="50" height="50" loading="lazy">
  </div>
  <div><p class="review-text">${item.text}</p></div>
  <div class="card-rate df-aib gap8">
    <span class="fw500">5</span>
    <div class="stars" style="--rating: ${item.rate};"></div>
  </div>
  <div class="card-user-info df gap10">
    <div class="card-user-img df">
      <img src="/public/img/reviews/user.svg" alt="Avatar de ${item.pictureAlt}" class="itemPicture"
        width="40" height="40" loading="lazy">
    </div>
    <div>
      <p class="fw500 itemName">
        ${item.fullName}
      </p>
      <p class="itemDate">
        ${item.date}
      </p>
    </div>
  </div>
</div>
</div>
`;
const frameCallbackContent = `
<div class="full-frame frame-callback hidden" id="frame-callback">
  <button type="button" id="close-btn" class=" close-btn" name="close-frame-button"
  aria-label="close-frame-button">
  <i class="icon-ctnr cross_circle35"></i>
  </button>
  <div id="frame-overlay" class="frame-overlay"></div>

  <div class="frame-titles">
  <p class="frame-title">Je veux être rappelé</p>
  <p class="frame-question">Inspedia vous recontactera dans les plus brefs délais</p>
  </div>

  <div id="register" class="">

  <form id="inputContainer" name="Sheet1">
    <input type="tel" id="inputField" name="tel" required>
    <label id="inputLabel" for="inputField">
      Quel est votre numéro ?
    </label>
    <button type="submit" id="progressButton" class="ion-android-arrow-forward next" name="submit-form-btn" aria-label="submit-form-btn">
      <i class="arrow_right32"></i>
    </button>
  </form>
  <div id="inputProgress"></div>
  <p class="error-msg" id="error-msg"></p>

  <div id="thank-msg"></div>
  </div>
</div>
`;
const waitingFrame = `
  <div class="overlay">
    <div class="overlay-inner">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
`
const successFrame = `
  <div class="success-message">
    <img src="/public/img/logo-v2-300.png" alt="logo inspedia">
    <h1>MERCI !</h1>
    <h2>Votre demande a bien été envoyée</h2>
    <a href="./" class="go-home-btn">Retourner à l'accueil</a>
  </div>
  `
const errorFrame = `
  <div class="success-message">
    <img src="/public/img/logo-v2-300.png" alt="logo inspedia">
    <h1>OUPS !</h1>
    <h2>Une erreur s'est produite</h2>
    <a href="./obtenir-mon-devis.html" class="go-home-btn">Recommencer</a>
  </div>
  `;
const $ = selector => {
  return document.querySelector(selector);
};
const $$ = selector => {
  return document.querySelectorAll(selector);
};
window.onload = () => {
  if ($('.section.reviews')) fillReviewsSection();
  changeHeroButtonsPosition();
  displayTopBtn();


  /*===        EVENTS LISTENERS        ======*/
  /* =====  ON CLICK   ===== */
  $('#top-btn').onclick = () => scrollTo(0, 0);
  $('#nav-btn-bars').onclick = () => fillAndShowMenu();
  $$('button.cta-button.get-devis-button').forEach(x => x.onclick = () => fillFrame(frameGetContent));
  $$('button.cta-button.callback').forEach(x => x.onclick = () => {
    fillFrame(frameCallbackContent);
    controlCallbackForm();
  });
  listenToShowAnswer();

  getCurrentYear();
};
window.onscroll = () => {
  changeHeroButtonsPosition();
  displayTopBtn()
};
function addAndRemoveClass(x, y, z) {
  x.classList.add(y);
  x.classList.remove(z);
};
function showAndHide(elShow, elHide) {
  $(elShow).classList.remove('none');
  $(elHide).classList.add('none');
};
function fillThisElement(element, content) {
  $(element).innerHTML = content;
};
function fillThoseElements(elements, library, article) {
  for (el of $$(elements)) {
    if (library.find(x => x.icon == el.classList[1]) != undefined) {
      const itemFound = library.find(x => x.icon == el.classList[1]);
      el.innerHTML = article(itemFound);
    }
  }
};
function fillRowTitles(library, x) {
  $(`#${x}-titles`).innerHTML = `<h2></h2><h3></h3><p></p>`;
  $(`#${x}-titles h2`).innerHTML = `${library[x].title}`;
  $(`#${x}-titles h3`).innerText = `${library[x].subtitle}`;
  $(`#${x}-titles p`).innerText = `${library[x].description}`;
};
function fillSectionContentWithLoop(databaseItems, section, article) {
  for (item of databaseItems) {
    $(section).innerHTML += article(item);
  };
};
function fillAndShowMenu() {
  fillMenuBase();
  startMenuBaseListeners();
};
function fillMenuBase() {
  fillThisElement('#container-fixed', navMobileContent);
  setTimeout(() => {
    $('#nav-mobile').classList.toggle('hidden3');
    addAndRemoveClass($('#nav-mobile-ul'), 'gap16', 'gap4');
  }, 100);
  $$('li.link').forEach(x => x.onclick = () => {
    $('#container-fixed').firstElementChild.classList.toggle('hidden');
  });
};
function startMenuBaseListeners() {
  $('#get-sell-products-button').onclick = () => goToXProducts("Diagnostics vente", sellList);
  $('#get-rent-products-button').onclick = () => goToXProducts("Diagnostics location", rentList);
  $$('button.cta-button.callback').forEach(x => x.onclick = () => fillFrame(frameCallbackContent));
  $('#close-btn').onclick = () => {
    ($('#nav-mobile')) ? ($('#nav-mobile').classList.toggle('hidden3')) : toggleFrame();
  };
};
function goToXProducts(menuTitle, content) {
  $('#menu-title').innerText = menuTitle;
  $('#nav-mobile-ul').innerHTML = content;
  $('#return-btn').innerHTML = returnButton;
  listenClickReturnButton();
  addAndRemoveClass($('#nav-mobile-ul'), 'gap4', 'gap16');
};
function listenClickReturnButton() {
  $('#return-btn').onclick = () => {
    fillThisElement('#menu-title', "Menu");
    $('#nav-mobile-ul').innerHTML = menuBaseList;
    addAndRemoveClass($('#nav-mobile-ul'), 'gap16', 'gap4');
    $('#return-btn').innerHTML = '';
    startMenuBaseListeners();
  };
};
function changeHeroButtonsPosition() {
  const heroButtons = $('#hero-cta-buttons');
  (window.pageYOffset > 500)
    ? heroButtons.classList.add('floating')
    : heroButtons.classList.remove('floating');
};
function displayTopBtn() {
  const topBtn = $('#top-btn');
  (window.pageYOffset > 500 && window.innerWidth < 975)
    ? topBtn.style.display = 'block'
    : topBtn.style.display = 'none';
};

function showProducts() {
  const smallCards = $('.small-cards');
  const span = $('#btn-more-span');
  const arrow = $('#btn-more-arrow');

  if (smallCards.classList.contains('show')) {
    span.innerText = "Voir plus";
    arrow.style.transform = "rotate(0deg)";
  } else {
    span.innerText = "Voir moins";
    arrow.style.transform = "rotate(180deg)";
  }
  smallCards.classList.toggle('show');
};
function listenToShowAnswer() {
  $$(".question").forEach(question => {
    question.onclick = () => {
      const active = $(".question.active");

      if (active && active !== question) {
        active.classList.toggle("active");
        setTimeout(() => {
          question.classList.toggle("active");
        }, 200)
      } else {
        question.classList.toggle("active");
      }
    }
  });
};
function getCurrentYear() {
  $('#year').innerHTML = new Date().getFullYear();
};
function fillFrame(content) {
  fillThisElement('#container-fixed', content);
  setTimeout(() => {
    toggleFrame();
    // Close listeners
    $('#frame-overlay').onclick = () => toggleFrame();
    $('#close-btn').onclick = () => toggleFrame();
  }, 100);
};
function toggleFrame() {
  $('#container-fixed').firstElementChild.classList.toggle('hidden');
  $$('.blur-ctnr').forEach(x => x.classList.toggle('blur'));
};
const largeSlider = () => {
  let largeSliders = document.querySelectorAll('.slide-content');
  let prevArrow = document.querySelectorAll('.swiper-button-prev');
  let nextArrow = document.querySelectorAll('.swiper-button-next');
  let pagBullets = document.querySelectorAll('.swiper-pagination');
  largeSliders.forEach((slider, index) => {
    let sliderLength = slider.children[0].children.length;
    let result = (sliderLength > 1) ? true : false;
    const swiper = new Swiper(slider, {
      direction: 'horizontal',
      loop: false,
      // loop: result,
      navigation: {
        nextEl: nextArrow[index],
        prevEl: prevArrow[index],
      },
      slidesPerView: 1,
      spaceBetween: 25,
      grabCursor: 'false',
      speed: 500,
      fade: 'true',
      pagination: {
        el: pagBullets[index],
        clickable: false,
        dynamicBullets: true,
      },
      breakpoints: {
        loop: false,
        0: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        }
      }
    });
  })
}
function fillReviewsSection() {
  fillThisElement('.section.reviews', reviewsSection);
  fillRowTitles(datas, 'reviews');

  fetch('/js/stats2.json')
    .then(res => res.json())
    .then(data => {
      // Main card
      let rates = [];
      for (user of data) { rates.push(user.rate) }

      let sum = 0;
      for (item of rates) { sum += Number(item) }

      $('#average-rate').innerHTML = (sum / rates.length).toFixed(1).replace(".", ",");
      $('.hearts').style.setProperty('--rating', (sum / rates.length));
      $('#total-reviews').innerHTML = rates.length;

      // Cards
      fillSectionContentWithLoop(data, '#card-wrapper', reviewsArticle);

      setTimeout(() => largeSlider(), 300)
    })
    .catch(error => console.log(error))
};
