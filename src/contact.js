export default function contact(){
  const contentDiv = document.querySelector('div#content');
  const titleH1 = document.createElement('h1');
  titleH1.textContent = 'Contact';
  const emailH2 = document.createElement('h2');
  const phoneNumberH2 = document.createElement('h2');
  emailH2.textContent = 'fakeemail@name.net';
  phoneNumberH2.textContent = '000-000-0000';
  contentDiv.appendChild(titleH1);
  contentDiv.appendChild(emailH2);
  contentDiv.appendChild(phoneNumberH2);
  
}