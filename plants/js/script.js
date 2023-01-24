const body = document.body;
const blackLayer = document.querySelector('.black-layer')
const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");

// Дубликат nav, для создания новых стилей
const menu = document.querySelector(".nav__list").cloneNode(1);

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  blackLayer.classList.toggle('black-layer_active');
  renderBurger();
}

//Рендер элементов
function renderBurger() {
  popup.appendChild(menu);
}

function closeRemove() {
  popup.classList.remove("open");
  hamb.classList.remove("active");
  body.classList.remove("noscroll");
  blackLayer.classList.remove('black-layer_active');
}
//Закрытие при клике на затемненную область
blackLayer.addEventListener('click', () => {
  closeRemove();
})
//Закрытие при клике на меню
menu.addEventListener('click', () => {
  closeRemove();
})


//аккордеон 
  const prices = document.querySelectorAll('.price__item');
  prices.forEach((price) => {
    price.addEventListener('click', () => {
      if(price.classList.contains('active')) {
        price.classList.remove('active');
      } else {
        const pricesActive = document.querySelectorAll('.price__item.active');
        pricesActive.forEach((priceActive) => {
        priceActive.classList.remove('active');
        });
        price.classList.add('active');
      }
    });
  });
