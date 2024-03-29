'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
btnScrollTo.addEventListener('click', function(e) {
  const s1cords = section1.getBoundingClientRect();
  // console.log(s1cords);
  // console.log(e.target.getBoundingClientRect());
  // console.log('Cuurent scroll (X/Y)', window.pageXOffset, pageYOffset);
  // console.log('height/width viewport',
  // document.documentElement.clientHeight,
  // document.documentElement.clientWidth);

  // scrolling
  // window.scrollTo(s1cords.left + window.pageXOffset, s1cords.top + 
  // window.pageYOffset);

  // window.scrollTo({
  //   left: s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({behavior: 'smooth'});
});

// page navigation
document.querySelectorAll('.nav__link').forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    // console.log(id);
    document.querySelector(id).scrollIntoView({behavior: 'smooth'});
  })
})

// 1. Add event listener to common parent element
// 2. Determine what element originated the event
// document.querySelector('.nav__links').addEventListener('click', function(e) {
//   e.preventDefault();

//   // Matching startegy
//   if (e.target.classList.contains('nav__link')) {
//     const id = e.target.getAttribute('href');
//     console.log(id); 
//     document.querySelector(id).scrollIntoView({
//       behavior: 'smooth' });
//   };
// });


// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function(e, opacity) {
  if(e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').
    querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector
    ('img');

    siblings.forEach(el => {
      if(el !==  link) el.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
}

nav.addEventListener('mouseover', function(e) {
  handleHover(e, 0.5);
});
//or
// nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', function(e) {
  handleHover(e, 1);
});

// Sticky navigation
const initialCords = section1.getBoundingClientRect();
// console.log(initialCords);
window.addEventListener('scroll', function(e) {
  // console.log(e);
  // console.log(this.window.scrollY);

  if(this.window.scrollY > initialCords.top) {
    nav.classList.add('sticky')
  } else{
    nav.classList.remove('sticky'); 
  }
})

// reveal sections
const allSections = document.querySelectorAll('.section');
const revealSection = function(entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if(!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
} 

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function(section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
})

// lazy loading images
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if(!entry.isIntersecting) return;

  // replace src with data-src
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '-200px',
});
imgTargets.forEach(img => imgObserver.observe(img));

// slider
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
let maxSlide = slides.length;

// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.3) translateX(-800px)';
// slider.style.overflow = 'visible';

const goToSlide = function (slide) {
  slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`))
}
goToSlide(0);

const nextSlide = function () {
  if(curSlide === maxSlide - 1) {
    curSlide = 0;
  } else{
  curSlide++;
  }

  goToSlide(curSlide);
}

const prevSlide = function () {
  if(curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
  curSlide--;
  }
  goToSlide(curSlide);
}

// next slide
btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);



///////////////////////////////////////////////
//////////////////////////////////////////////
// selecting, creating and deleting elements.
// selecting elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);
// const header = document.querySelector('.header');
// const allSection = document.querySelectorAll('.section'); 
// console.log(allSection);

// document.getElementById('section--1');
// const allButton = document.getElementsByTagName('button');
// console.log(allButton);

// console.log(document.getElementsByClassName('btn'));

// // creating and inserting elements
// // .insertAdjacentHTML
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.'
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it</button>';
// header.prepend(message);  // create element at the top
// header.append(message);   // create element at the bottom
// header.before(message);  // will insert before header element
// header.after(message);   // will insert after the header element

// // delete the element
// document.querySelector('.btn--close-cookie').addEventListener('click', function() {
//     // message.remove();
//     message.parentElement.removeChild(message);
// })

// // styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message));  // will return all properties
// console.log(getComputedStyle(message).color);  // now it will return color value

// // message.style.height = getComputedStyle(message).height + 40 + 'px';  // result is string (not gonna work)
// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';  // now the height of message element will change.

// // document.documentElement.style.setProperty('--color-primary', 'orangered');  // it will change all buttons in orange color instead of green

// // Attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt); // will return Bankist logo
// console.log(logo.src);  // will return url of image

// // classes
// logo.classList.add('');
// logo.classList.remove();
// logo.classList.toggle();
// logo.classList.contains();


// Types of events & events handlers
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', function(e) {
//   alert('addEventListener: Great! You are reading the heading.')
// })
// h1.onmouseenter = function(e) {
//   alert('onmouseenter: Great! You are reading the heading.');
// }
// const alertH1 = function (e) {
//   alert("you are reading the heading.")
// h1.removeEventListener('mouseenter', alertH1);
// }
// h1.addEventListener('mouseenter', alertH1);

// Event propagation practice
// rgb(255, 255, 255) (random color generator)
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor(0, 255));

// document.querySelector('.nav__link').addEventListener
// ('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('LINK', e.target, e.currentTarget);

//   // stop propagation
//   e.stopPropagation(); // now it will change only this background color not all three
// });
// document.querySelector('.nav__links').addEventListener
// ('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('CONTAINER', e.target, e.currentTarget);
// });
// document.querySelector('.nav').addEventListener
// ('click', function(e) {
//   this.style.backgroundColor = randomColor();
//   console.log('NAV', e.target, e.currentTarget);
// });

// DOM traversing
// const h1 = document.querySelector('h1');
//Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); // will return all type of nodes like text comment HTML element
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white'; // will give the color white to first child element(span)
// h1.lastElementChild.style.color = 'orangered';

//Going upwards: parent
// console.log(h1.parentNode); // will return parent div of h1 element
// console.log(h1.parentElement); // same output
// console.log(h1.closest('.header'));

//Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);
// console.log(h1.previousSibling); // not much important
// console.log(h1.nextSibling);

// console.log(h1.parentElement.children);

// intersection observer API
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   })
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe()