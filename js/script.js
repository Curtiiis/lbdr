const $ = selector => {
  return document.querySelector(selector);
};
const $$ = selector => {
  return document.querySelectorAll(selector);
};

// UTILS
function addAndRemoveClass(x, y, z) {
  x.classList.add(y);
  x.classList.remove(z);
};
function showAndHide(elShow, elHide) {
  $(elShow).classList.remove('none');
  $(elHide).classList.add('none');
};
function showElement(el) {
  $(el).classList.remove('none');
};
function hideElement(el) {
  $(el).classList.add('none');
};
// FILL FUNCTIONS
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
function fillSectionContentWithLoop(databaseItems, section, article) {
  for (item of databaseItems) {
    $(section).innerHTML += article(item);
  };
};


// Full Frames
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

