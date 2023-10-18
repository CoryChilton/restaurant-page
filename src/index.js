import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import './style.css';

const displayController = (function(){
  const homeButton = document.getElementById('home-button');
  const menuButton = document.getElementById('menu-button');
  const contactButton = document.getElementById('contact-button');
  const contentDiv = document.getElementById('content');
  homeButton.addEventListener('click', () => {clearContent(); home();});
  menuButton.addEventListener('click', () =>{clearContent(); menu();});
  contactButton.addEventListener('click', () =>{clearContent(); contact();});

  function clearContent(){
    contentDiv.textContent = "";
  }

  contact();
})();