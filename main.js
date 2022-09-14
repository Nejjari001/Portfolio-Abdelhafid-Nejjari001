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

// ------- Pop-UP ----- //
const listProjects = [
  {
    name: 'Tonic',
    Image: '././img/img-desktop-1.png',
    experience: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javaScript'],
    feature: 'See Project',
    listPopupProjects: {
      popDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam accusantium unde eum voluptas beatae, sit sed impedit eaque dolor deserunt eligendi repellendus hic recusandae porro dignissimos, blanditiis suscipit modi!',
      popSkills: ['html', 'css', 'javaScript', 'Github', 'ruby', 'Bootstrap'],
      buttonLive: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      buttonSource: 'See Source &nbsp; <i class="fa fa-github"></i>',
    },
  },
  {
    name: 'TonMulti-Post Stories',
    image: '././img/img-desktop-2.png',
    experience: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javaScript'],
    feature: 'See Project',
    listPopupProjects: {
      popDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam accusantium unde eum voluptas beatae, sit sed impedit eaque dolor deserunt eligendi repellendus hic recusandae porro dignissimos, blanditiis suscipit modi!',
      popSkills: ['html', 'css', 'javaScript', 'Github', 'ruby', 'Bootstrap'],
      buttonLive: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      buttonSource: 'See Source &nbsp; <i class="fa fa-github"></i>',
    },
  },
  {
    name: 'FaceBook 360',
    image: '././img/img-desktop-3.png',
    experience: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javaScript'],
    feature: 'See Project',
    listPopupProjects: {
      popDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam accusantium unde eum voluptas beatae, sit sed impedit eaque dolor deserunt eligendi repellendus hic recusandae porro dignissimos, blanditiis suscipit modi!',
      popSkills: ['html', 'css', 'javaScript', 'Github', 'ruby', 'Bootstrap'],
      buttonLive: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      buttonSource: 'See Source &nbsp; <i class="fa fa-github"></i>',
    },
  },
  {
    name: 'Uber Navigation',
    image: '././img/img-desktop-4.png',
    experience: ['CANOPY', 'Back End Dev', '2015'],
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    skills: ['html', 'css', 'javaScript'],
    feature: 'See Project',
    listPopupProjects: {
      popDescription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias quam accusantium unde eum voluptas beatae, sit sed impedit eaque dolor deserunt eligendi repellendus hic recusandae porro dignissimos, blanditiis suscipit modi!',
      popSkills: ['html', 'css', 'javaScript', 'Github', 'ruby', 'Bootstrap'],
      buttonLive: 'See Live &nbsp; <i class="fa fa-arrow-circle-right"></i>',
      buttonSource: 'See Source &nbsp; <i class="fa fa-github"></i>',
    },
  },
];
