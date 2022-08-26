const elLoader = document.querySelector('.js-loader');

// Loader
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(function () {
    elLoader.classList.add('lds-facebook-wrapper--none');
  }, 800);
});