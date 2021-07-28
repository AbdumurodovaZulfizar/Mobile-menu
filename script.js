const header = document.querySelector('header');
const title = document.getElementById('logo');
const button = document.querySelector('.menu-bars');

// const main = document.querySelector("main");

const navbar = document.querySelector('nav');
const button2 = document.createElement('button');
button2.innerHTML = '<i class="fas fa-times fa-2x"></i>';

const link = document.querySelector('.nav-link');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');

function showNav() {
  title.remove();
  button.remove();
  navbar.classList.remove('none');
  header.appendChild(navbar);
  header.appendChild(button2);
}

function showMenu() {
  button2.remove();
  navbar.classList.add('none');
  header.appendChild(title);
  header.append(button);
}

button.addEventListener('click', showNav);
button2.addEventListener('click', showMenu);
link.addEventListener('click', showMenu);
link2.addEventListener('click', showMenu);
link3.addEventListener('click', showMenu);
