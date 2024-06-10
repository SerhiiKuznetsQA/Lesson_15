// **************** Практика **************** \\
// Створи картки з товарами на основі масиву products, приклад картки https://prnt.sc/KmgDlzqOIA3M
// Реалізуй делегування подій на колекції карток
// Після кліку на картку повинно з'являтись модальне вікно з детальною інформацією про продукт, приклад модального вікна https://prnt.sc/vWNoCeZcw7ii
// Для реалізації модального вікна використай бібліотеку basicLightbox (https://github.com/electerious/basicLightbox)

const products = [
  {
    id: 1,
    img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
    name: "Монітор",
    price: 3000,
    description: "23-дюймовий монітор з Full HD роздільною здатністю.",
  },
  {
    id: 2,
    img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
    name: "Ноутбук",
    price: 20000,
    description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
  },
  {
    id: 3,
    img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
    name: "Смартфон",
    price: 8000,
    description: "Оснащений потрійною камерою та багатоядерним процесором.",
  },
  {
    id: 4,
    img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
    name: "Планшет",
    price: 12000,
    description:
      "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
  },
];

const list = document.querySelector(".js-products")
list.addEventListener("click", handlerGetProduct);

function handlerGetProduct(event) { 
    if (event.currentTarget === event.target) { 
        return
    }
    // console.log(event.target);
    const parent = event.target.closest(".js-item");
    const currentId = Number(parent.dataset.productId)
    const currentProduct = products.find(({ id }) => id === currentId)
    const instance = basicLightbox.create(
      `
	<div class ="modal">
        <img src="${currentProduct.img}" alt="${currentProduct.name}">
        <h2>${currentProduct.name}</h2>
        <h3>${currentProduct.price}</h3>
        <p>${currentProduct.description}</p>
    </div>
            `
    );
    instance.show()
}

function createMarcup(arr) { 
    return arr
      .map(
        ({ id, img, name, price }) => `
    <li class = "item js-item" data-product-id = "${id}">
    <img src="${img}" alt="${name}">
    <h2>${name}</h2>
    <p>Price:${price} $</p>
   </li>
    `
      )
      .join("");
}
list.insertAdjacentHTML("afterbegin", createMarcup(products));





