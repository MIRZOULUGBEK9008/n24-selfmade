const elModalButton = document.querySelector('.button-turn-on-off');
const elModal = document.querySelector('.modal');
const elModalCloser = document.querySelector('.close-modal');

elModalButton.addEventListener('click', function () {
  elModal.classList.add('modal-openner')
});

elModalCloser.addEventListener('click', function () {
  elModal.classList.remove('modal-openner')
});