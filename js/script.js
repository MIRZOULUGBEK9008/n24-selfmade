const elModal = document.querySelector('.js-modal');
const elModalClose = document.querySelector('.js-close-modal');
const elModalOnOff = document.querySelector('.button-turn-on-off');


if (elModalOnOff) {
  elModalOnOff.addEventListener("click", function () {
    elModal.classList.add('modal-openner')
  });
}

if (elModalClose) {
  elModalClose.addEventListener('click', function () {
    elModal.classList.remove('modal-openner')
  });
}

if (elModal) {
  setTimeout(function () {
    elModal.classList.add('modal-openner')
  }, 10000);
}