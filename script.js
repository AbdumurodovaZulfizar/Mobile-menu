const header = document.querySelector('header');
const title = document.getElementById('logo');
const button = document.querySelector('.menu-bars');

// const main = document.querySelector("main");

const navbar = document.querySelector('nav');
const cross = document.createElement('button');
cross.innerHTML = '<i class="fas fa-times fa-2x"></i>';

const link = document.querySelector('.nav-link');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');

const showNav = () => {
  title.remove();
  button.remove();
  navbar.classList.remove('none');
  header.appendChild(navbar);
  header.appendChild(cross);
};

const showMenu = () => {
  cross.remove();
  navbar.classList.add('none');
  header.appendChild(title);
  header.append(button);
}

button.addEventListener('click', showNav);
cross.addEventListener('click', showMenu);
link.addEventListener('click', showMenu);
link2.addEventListener('click', showMenu);
link3.addEventListener('click', showMenu);
