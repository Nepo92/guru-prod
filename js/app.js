/* Добавление класс active к меню */
const menuItems = document.querySelectorAll('.nav__item');

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    menuItems.forEach((elem) => {
      elem.classList.remove('active');
    });

    item.classList.add('active');
  });
});

const menu = document.querySelector('.menu');

menu.style.zIndex = '2';
