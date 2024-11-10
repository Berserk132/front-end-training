const navbarCloseLink = document.getElementsByClassName('navbar-x-icon')[0];
const navbarToggler = document.getElementsByClassName('navbar-toggler')[0];
let currentCounter = 1;
navbarToggler.addEventListener('click', () => {
  const navbarMobileView = document.getElementsByClassName('navbar-mobile')[0];
  navbarMobileView.classList.toggle('show-element');
});

navbarCloseLink.addEventListener('click', () => {
  const navbarMobileView = document.getElementsByClassName('navbar-mobile')[0];
  navbarMobileView.classList.toggle('show-element');
});

const interval = setInterval(() => {
  const words = ["Larry Daniels", "Developer", "Designer"]
  const word = document.getElementsByClassName('header-word')[0];
  word.innerHTML = words[currentCounter % 3];
  currentCounter = currentCounter + 1;
}, 3000)