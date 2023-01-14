const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const body = document.body;
const blackLayer = document.querySelector('.black-layer')

// Клонируем меню, чтобы задать свои стили для мобильной версии
const menu = document.querySelector(".nav__list").cloneNode(1);

// При клике на иконку hamb вызываем ф-ию hambHandler
hamb.addEventListener("click", hambHandler);

// Выполняем действия при клике ..
function hambHandler(e) {
  e.preventDefault();
  // Переключаем стили элементов при клике
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  blackLayer.classList.toggle('black-layer_active');
  renderPopup();
}

// Здесь мы рендерим элементы в наш попап
function renderPopup() {
  popup.appendChild(menu);
}

// Код для закрытия меню при нажатии на ссылку
const links = Array.from(menu.children);

// Для каждого элемента меню при клике вызываем ф-ию
links.forEach((link) => {
  link.addEventListener("click", closeRemove);
});

// Закрытие попапа при клике на меню
function closeRemove() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
  blackLayer.classList.remove('black-layer_active');
}
//при клике на затемненную область
blackLayer.addEventListener('click', () => {
  closeRemove();
})