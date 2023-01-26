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
  const priceBox = document.querySelector('.price__list');
  prices.forEach((price) => {
    price.addEventListener('click', () => {
      if(price.classList.contains('active')) {
        price.classList.remove('active');
        priceBox.classList.remove('open')
      } else {
        const pricesActive = document.querySelectorAll('.price__item.active');
        pricesActive.forEach((priceActive) => {
        priceActive.classList.remove('active');
        priceBox.classList.remove('open')
        });
        price.classList.add('active');
        priceBox.classList.add('open');
      }
    });
  });

  //селект

  const item = document.querySelector(".contacts__list");
  const itemName = document.querySelector(".contacts__item");
  const box = document.querySelector(".contacts__box");
  const town = document.querySelectorAll(".contacts__town");
  const cityValue = document.querySelector(".town__name-value");
  const phoneValue = document.querySelector(".town__phone-value");
  const adressValue = document.querySelector(".town__adress-value");
  const callNumber = document.querySelector(".town__number")
  const cardTown = document.querySelector(".town__wrapper")
  const valueCard = document.querySelector("label").innerHTML;
  const bode = document.querySelector(".contacts")

  item.addEventListener('click', () => {
    item.classList.toggle("pick");
    box.classList.toggle("active");
    itemName.classList.toggle("pick");
   
   
    body.addEventListener("click", close);
        function close(e) {
              let selectedItem = e.target.closest(".contacts__item");
              if (selectedItem === null)
               {      
                box.classList.toggle('active');
                item.classList.toggle("pick");
                itemName.classList.toggle("pick");
                body.removeEventListener("click", close);

              }
            }
          }    
    );
    town.forEach((e) => {
      e.addEventListener("click", () => {
        console.log("bla2")
        itemName.innerHTML = e.querySelector("label").innerHTML;
        itemName.classList.toggle('pick');
        item.classList.toggle("pick");
        box.classList.remove('active');
        showCard(e);

        //при выборе города закрываем список и выводис список в title
      });
    })

    function showCard(e) {
      cardTown.style.display = "block";
    
      itemName.classList.add('pick');
        if ( e.querySelector("label").innerHTML === "Canandaigua, NY") {
            cityValue.textContent = "Canandaigua, NY";
            phoneValue.textContent = "+1	585	393 0001";
            adressValue.textContent = "151 Charlotte Street";
            callNumber.setAttribute('href', "tel:+15853930001");
            console.log(callNumber)
        } else if (e.querySelector("label").innerHTML === "New York City"){
            cityValue.textContent = "New York City";
            phoneValue.textContent = "+1	212	456 0002";
            adressValue.textContent = "9 East 91st Street";
            callNumber.setAttribute('href', "tel:+12124560002");
            console.log(callNumber)
        } else if (e.querySelector("label").innerHTML === "Yonkers, NY") {
            cityValue.textContent = "Yonkers, NY";
            phoneValue.textContent = "+1	914	678 0003";
            adressValue.textContent = "511 Warburton Ave";
            callNumber.setAttribute('href', "tel:+19146780003");
            console.log(callNumber)
        } else if (e.querySelector("label").innerHTML === "Sherrill, NY") {
          cityValue.textContent = "Sherrill, NY";
          phoneValue.textContent = "+1	315	908 0004";
          adressValue.textContent = "14 WEST Noyes BLVD";
          callNumber.setAttribute('href', "tel:+13159080004");
          console.log(callNumber)
        }
    }



   

