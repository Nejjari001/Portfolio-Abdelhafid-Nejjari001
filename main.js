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



listProjects.forEach((project, index) => {
 
  const {name, Image, experience, description, skills, feature, listPopupProjects} = project;
 

const projects = document.querySelector('.projects');
const section = document.createElement('section');
section.setAttribute('class', 'works card-1 grid');
projects.appendChild(section);

const card = document.createElement('div');
card.setAttribute('class', 'card-container-1');
card.innerHTML = `<img class="img-version-mobile" src="././img/Snapshoot-Portfolio-1.png" alt="Snapshot Portfolio Image">`
card.innerHTML = `<img class="img-version-desktop" src="././img/img-desktop-1.png" alt="Snapshot Portfolio Image">`
section.appendChild(card);

const containerDesktop = document.createElement('div');
containerDesktop.setAttribute('class', 'grid-container-desktop');
section.appendChild(containerDesktop);

const title = document.createElement('div');
containerDesktop.appendChild(title);

const mobileTitle = document.createElement('h1');
mobileTitle.innerText = name;
title.appendChild(mobileTitle);

const DeskTitle = document.createElement('h1');
title.appendChild(DeskTitle);

const paragraph = document.createElement('div');
containerDesktop.appendChild(paragraph);

const languages = document.createElement('div');
containerDesktop.appendChild(languages);

const button = document.createElement('div');
containerDesktop.appendChild(button);

});


// <div class="grid-container-desktop">
//     <div class="title experience">
//         <h1 class="mobile-title">Tonic</h1>
//         <h1 class="desktop-title">Tonic</h1>
//         <div class="container">
//             <h2>CANOPY</h2>
//             <ul class="flex-container-list">
//                 <li>Back End Dev</li>
//                 <li>2015</li>
//             </ul>
//         </div>
//     </div>
//     <div class="paragraph">
//         <p class="mobile-para">A daily selection of privately personalized reads; no accounts <br> or
//             sign-ups required.</p>
//     </div>
//     <div class="languages">
//         <ul class="flex-lang">
//             <li><span>html</span></li>
//             <li><span>css</span></li>
//             <li><span>javaScript</span></li>
//         </ul>
//     </div>
//     <div class="btn-see-projects">
//         <a href="#" class="button" id="btn">See Project</a>
//     </div>
// </div>

// </section>