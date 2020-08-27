const headerTop = document.querySelector('.header__top');
const headerBottom = document.querySelector('.header__bottom');
const headerDropdownMenu = document.querySelector('.header__dropdown-menu');
const headerLangs = document.querySelector('.header__langs');
const headerMenus = document.querySelectorAll('.header__menu');
const menuButton = document.querySelector('.menu-button');
const dropDownMenu = document.querySelector('.dropdown-menu');
const pageBody = document.querySelector('.page__body');

document.addEventListener('DOMContentLoaded', function () {
  window.dispatchEvent(new Event('resize'));
});

window.onresize = function () {
  if (document.documentElement.clientWidth <= 768) {
    headerDropdownMenu.appendChild(headerLangs);
    headerMenus.forEach(function (menu) {
      headerDropdownMenu.appendChild(menu);
    });
  } else {
    headerTop.prepend(headerLangs);
    headerBottom.prepend(headerMenus[0]);
    headerBottom.appendChild(headerMenus[1]);
  }
}

menuButton.onclick = function () {
  this.classList.toggle('menu-button--open');
  dropDownMenu.classList.toggle('dropdown-menu--open');
  pageBody.classList.toggle('page__body--lock');
}