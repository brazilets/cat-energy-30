document.querySelector('.header').classList.remove('header--no-js');
document.querySelector('.menu-nav').classList.remove('menu-nav--no-js');

document.getElementById('burger').addEventListener('click', () => {
  document.querySelector('.menu-nav__list').classList.toggle('active');
  document.querySelector('.menu-nav__toggle').classList.toggle('active');
});
