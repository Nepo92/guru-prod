(function menuNavigation() {
  function checkActive(elem) {
    if (elem.classList.contains('active')) {
      elem.classList.remove('active');
    }
  }

  const menuItem = Array.from(document.querySelectorAll('.main-nav__item-wrapper'));

  menuItem.splice(0, 1);

  const popup = document.querySelector('.popup');

  menuItem.forEach((item) => {
    checkActive(item);

    item.addEventListener('click', (e) => {
      menuItem.forEach((elem) => {
        checkActive(elem);
      })

      item.classList.add('active');

      const type = item.dataset.type;
 
      if (type === 'settings') {
        e.preventDefault();
        popup.style.opacity = '1';
        popup.style.pointerEvents = 'all';
        document.body.scrollbarWidth = '0';
      }
    });
  });

  const popupClose = document.querySelector('.popup__close');
  const popupCancel = document.querySelector('.popup__cancel');
  
  function closePopup() {
    popup.style.opacity = '0';
    popup.style.pointerEvents = 'none';
    menuItem.forEach((item) => {
      checkActive(item);
    });
  }

  popupClose.addEventListener('click', closePopup);
  popupCancel.addEventListener('click', closePopup);
}());
