import { menu } from './utils/pages/menu';
import navbar from './utils/pages/navbar.js';
import { contact } from './utils/pages/contact';
import { home } from './utils/pages/home';

import './utils/css/style.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const display = () => {
  const content = document.querySelector('#content');

  content.innerHTML = `
<div>
${navbar()}
</div>
<div id="display-text">
${home()}
</div>


`;
};

const loadEventListners = () => {
  const switchTab = (event) => {
    event.preventDefault();
    const content = document.querySelector('#display-text');
    switch (event.target.textContent) {
      case 'Contact':
        content.innerHTML = contact();
        break;
      case 'Menu':
        content.innerHTML = menu();
        break;
      default:
        content.innerHTML = home();
    }

    const currentActive = document.querySelectorAll('.nav-links a.active');
    currentActive.forEach((node) => node.classList.remove('active'));
    event.target.classList.add('active');
  };

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach((navLink) => navLink.addEventListener('click', switchTab));
};

display();
loadEventListners();
