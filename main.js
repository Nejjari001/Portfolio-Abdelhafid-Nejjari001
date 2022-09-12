// Hambuger menu
const hamburgerMenu = document.querySelector('.menu');
const navBarMenu = document.querySelector('.navigation');

const hamburger = () => {
  hamburgerMenu.classList.toggle('change');
  navBarMenu.classList.toggle('change');
};

hamburgerMenu.addEventListener('click', hamburger);
document.querySelectorAll('.navigation').forEach((elements) => elements.addEventListener('click', () => {
  hamburgerMenu.classList.remove('change');
  navBarMenu.classList.remove('change');
}));
