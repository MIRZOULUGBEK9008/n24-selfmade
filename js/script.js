const elModal = document.querySelector('.js-modal');
const elModalClose = document.querySelector('.js-close-modal');

if (elModalClose) {
  elModalClose.addEventListener('click', function () {
    elModal.classList.remove('modal-openner')
  });
}

setTimeout(function () {
  elModal.classList.add('modal-openner')
}, 10000);