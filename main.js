// HAMBURGER BUTTON
const hamburger = document.querySelector('.container_menu');
const navMenu = document.querySelector('.li-desk');

const bars = () => {
  hamburger.classList.toggle('change');
  navMenu.classList.toggle('change');
};

hamburger.addEventListener('click', bars);

document.querySelectorAll('.nav-link').forEach((element) => element.addEventListener('click', () => {
  hamburger.classList.remove('change');
  navMenu.classList.remove('change');
}));
