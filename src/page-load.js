export default function pageLoad() {
  const contentDiv = document.querySelector('div#content');
  const titleH1 = document.createElement('h1');
  titleH1.textContent = 'Nachoria';
  const nachosImg = document.createElement('img');
  nachosImg.setAttribute('src', '/src/nachos.jpg');
  const tagH2 = document.createElement('h2');
  tagH2.textContent = 'The best nachos in the world!';

  contentDiv.appendChild(titleH1);
  contentDiv.appendChild(nachosImg);
  contentDiv.appendChild(tagH2);
  console.log('done');
}