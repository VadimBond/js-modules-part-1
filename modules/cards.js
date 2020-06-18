import {getResource} from "../services/services";

function cards(menuContainerSelector) {
  // menu
  const menuContainer = document.querySelector(menuContainerSelector);

  menuContainer.innerHTML = "";
  
  class MenuCard {
    constructor(img, altimg, title, descr, price) {
      this.img = img;
      this.altimg = altimg;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.exchange = 33;
      this.convertMoney();
    }

    convertMoney() {
      this.price *= this.exchange; 
    }
    
    render() {
      return `
        <div class="menu__item">
          <img src=${this.img} alt=${this.altimg}>
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">${this.descr}</div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
          </div>
        </div>
      `;
    }
  }

  getResource("http://localhost:3000/menu")
    .then(data => {
      data.forEach(({ img, altimg, title, descr, price }) => {
        menuContainer.insertAdjacentHTML('beforeend', 
          new MenuCard(img, altimg, title, descr, price).render());
      });
    });
}

export default cards;
