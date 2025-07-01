// BASE
let liButton = (item) => {
  return `
  <button type="button" id="get-${item.icon}-products-button" class="get-products" name="get-${item.icon}-products" aria-label="get-${item.icon}-products">
    <span><i class="icon-ctnr ${item.icon}"></i>${item.text}</span>
    <i class="icon-ctnr arrow_right"></i>
  </button>`
};
let liLink = (item) => `
  <a href="/${item.link}.html">
    <span><i class="icon-ctnr ${item.icon}"></i>${item.text}</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  `;
let liLink2 = (item) => `
  <a href="/${item.link}.html">
    <span><i>${item.icon}</i>${item.text}</span>
  </a>
    `;

const returnButton = `
  <button type="button return-btn">
    <i class="icon-ctnr return"></i>
  </button>`;

// MENU
const navMobileContent = `
<div id="nav-mobile" class="nav__mobile hidden3">
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
  <a href="/diagnostics/audit-energetique.html">
    <span><i class="icon-ctnr home_repair"></i>Audit Énergétique</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link faq">
  <a href="/faq.html">
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
    <a href="/obtenir-mon-devis.html" class="cta-button get-devis">
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
  <a href="/diagnostics/audit-energetique.html">
    <span><i class="icon-ctnr home_repair"></i>Audit Énergétique</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link faq">
  <a href="/faq.html">
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
    <a href="/obtenir-mon-devis.html" class="cta-button get-devis">
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
  <a href="/diagnostics/obligations-vente.html">
    <span><i class="icon-ctnr warningSell"></i>Obligations vente</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link amiante">
  <a href="/diagnostics/amiante.html">
    <span><i class="icon-ctnr amiante"></i>Amiante</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link sparkles">
  <a href="/diagnostics/assainissement.html">
    <span><i class="icon-ctnr sparkles"></i>Assainissement</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link sun">
  <a href="/diagnostics/dpe.html">
    <span><i class="icon-ctnr sun"></i>DPE</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link lightning">
  <a href="/diagnostics/electricite.html">
    <span><i class="icon-ctnr lightning"></i>Électricité</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link plane">
  <a href="/diagnostics/ensa.html">
    <span><i class="icon-ctnr plane"></i>ENSA / Bruit</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link seedling">
  <a href="/diagnostics/erp.html">
    <span><i class="icon-ctnr seedling"></i>ERP : Risques et Pollution</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link fire">
  <a href="/diagnostics/gaz.html">
    <span><i class="icon-ctnr fire"></i>Gaz</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link ruler_1">
  <a href="/diagnostics/mesurage-loi-carrez.html">
    <span><i class="icon-ctnr ruler_1"></i>Mesurage loi Carrez</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link drop">
  <a href="/diagnostics/plomb.html">
    <span><i class="icon-ctnr drop"></i>Plomb</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link termite">
  <a href="/diagnostics/termites.html">
    <span><i class="icon-ctnr termite"></i>Termites</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
`;
const rentList = `
<li class="link warningRent">
  <a href="/diagnostics/obligations-location.html">
    <span><i class="icon-ctnr warningRent"></i>Obligations location</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link amiante">
  <a href="/diagnostics/amiante.html">
    <span><i class="icon-ctnr amiante"></i>Amiante</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link sun">
  <a href="/diagnostics/dpe.html">
    <span><i class="icon-ctnr sun"></i>DPE</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link lightning">
  <a href="/diagnostics/electricite.html">
    <span><i class="icon-ctnr lightning"></i>Électricité</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link plane">
  <a href="/diagnostics/ensa.html">
    <span><i class="icon-ctnr plane"></i>ENSA / Bruit</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link seedling">
  <a href="/diagnostics/erp.html">
    <span><i class="icon-ctnr seedling"></i>ERP : Risques et Pollution</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link laptop_house">
  <a href="/diagnostics/etat-des-lieux.html">
    <span><i class="icon-ctnr laptop_house"></i>État des lieux</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link fire">
  <a href="/diagnostics/gaz.html">
    <span><i class="icon-ctnr fire"></i>Gaz</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link straight_ruler">
  <a href="/diagnostics/mesurage-loi-boutin.html">
    <span><i class="icon-ctnr straight_ruler"></i>Mesurage loi Boutin</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
<li class="link drop">
  <a href="/diagnostics/plomb.html">
    <span><i class="icon-ctnr drop"></i>Plomb</span>
    <i class="icon-ctnr arrow_right"></i>
  </a>
  </li>
`;
const navbarContent = `
  <div class="navbar__inner">
    <a href="/" title="Accueil du site" class="navbar__logo">
      <img src="/public/components/logos/navbar_logo.png" alt="logo INSPEDIA" width="148" height="45">
    </a>

    <nav class="navbar__nav" id="navbar__nav">
      <ul>
        <li id="nav-dropdown-1" class="nav-item">
          Diagnostics vente<i class="icon-ctnr chevron_down"></i>
          <ul class="nav-sublist" id="nav-sublist-1">
            <li class="link warningSell"></li>
            <li class="link amiante"></li>
            <li class="link sparkles"></li>
            <li class="link home_repair v2"></li>
            <li class="link sun"></li>
            <li class="link lightning"></li>
            <li class="link plane"></li>
            <li class="link seedling"></li>
            <li class="link fire"></li>
            <li class="link ruler_1"></li>
            <li class="link drop"></li>
            <li class="link termite"></li>
          </ul>
        </li>
        <li id="nav-dropdown-2" class="nav-item">
          Diagnostics location<i class="icon-ctnr chevron_down"></i>
          <ul class="nav-sublist" id="nav-sublist-2">
            <li class="link warningRent"></li>
            <li class="link amiante"></li>
            <li class="link sun"></li>
            <li class="link lightning"></li>
            <li class="link plane"></li>
            <li class="link seedling"></li>
            <li class="link laptop_house"></li>
            <li class="link fire"></li>
            <li class="link straight_ruler"></li>
            <li class="link drop"></li>
          </ul>
        </li>
        <li class="nav-item"><a href="/faq.html">FAQ</a></li>
      </ul>
    </nav>

    <button id="nav-btn-bars" class="nav-btn-bars" name="mobile-button-nav" aria-label="mobile-button-nav">
      <span></span><span></span><span></span>
    </button>

    <button type="button" id="top-btn" class="top-btn">
    <i>
      <svg width="26" height="15" viewBox="0 0 26 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_616_3256)">
          <path d="M23.2648 12.7648L13.2647 2.76477L3.26471 12.7648" stroke="white" stroke-width="4"
            stroke-linecap="round" stroke-linejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_616_3256">
            <rect width="14" height="25" fill="white" transform="translate(0.5 14.7648) rotate(-90)" />
          </clipPath>
        </defs>
      </svg>
    </i>
  </button>
  </div>
  `;

// SECTION - REVIEWS
const reviewsSection = `
<div class="section-inner">
<div class="row-titles" id="reviews-titles"><h2>Nos avis</h2><h3>Ils nous font confiance</h3><p>Une transparence assurée. Chez Inspedia, tous les avis comptent. C'est la raison pour laquelle nous montrons tous nos avis clients.</p></div>
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

// FULL FRAMES
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

// GET FORM SUCCESS OR ERROR
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
    <a href="/" class="go-home-btn">Retourner à l'accueil</a>
  </div>
  `
const errorFrame = `
  <div class="success-message">
    <img src="/public/img/logo-v2-300.png" alt="logo inspedia">
    <h1>OUPS !</h1>
    <h2>Une erreur s'est produite</h2>
    <a href="/obtenir-mon-devis.html" class="go-home-btn">Recommencer</a>
  </div>
  `;


