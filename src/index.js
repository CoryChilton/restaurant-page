import home from './home.js';
import menu from './menu.js';

const displayController = (function(){
  const homeButton = document.getElementById('home-button');
  const menuButton = document.getElementById('menu-button');
  const contactButton = document.getElementById('contact-button');
  const contentDiv = document.getElementById('content');
  homeButton.addEventListener('click', () => {clearContent(); home();});
  menuButton.addEventListener('click', () =>{clearContent(); menu();});
  

  // menuButton.addEventListener('click', menuClick);

  function clearContent(){
    contentDiv.textContent = "";
  }
})();

menu();
