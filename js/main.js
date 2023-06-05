const products = {
  crazy: {
    name: 'crazy',
    amount: 0,
    price: 31000,
  },
  light: {
    name: 'light',
    amount: 0,
    price: 26000,
  },
  cheeseburger: {
    name: 'cheeseburger',
    amount: 0,
    price: 29000,
  },
  dBurger: {
    name: 'dBurger',
    amount: 0,
    price: 24000,
  },
}

function summ() { return this.amount * this.price }
for(const key in products) {
  products[key]['summ'] = summ
}

const cardList = document.querySelectorAll('.card')
const arrProducts = []
const cardBtnOpen = document.querySelector('.cart-btn')
const cartBtnClose = document.querySelector('.cart-dropdown__close')
const cardDropdown = document.querySelector('.cart-dropdown')

cardList.forEach(function(card, cardKey) {
  const cardBtn = card.querySelector('.card-btn')
  const cardId = card.getAttribute('id')
  const cardAmount = card.querySelector('.card-content__amount')
  const cardCount = card.querySelector('.card-count')
  const countItemAmount = card.querySelector('.count-item__amount')
  const cardSymbol = card.querySelectorAll('.symbol-btn')
  
  cardBtn.addEventListener('click', function(event) {
    event.preventDefault()
    cardBtn.classList.add('active')
    cardAmount.classList.add('active')
    cardCount.classList.add('active')
    products[cardId].amount++
    arrProducts.push(products[cardId])
    cardAmount.textContent = products[cardId].amount
    countItemAmount.textContent = products[cardId].amount
  })
  cardSymbol.forEach(function(btn, key) {
    btn.addEventListener('click', function(event) {
      event.preventDefault()
      const symbol = btn.textContent
      console.log(symbol);
      if(symbol == "+" && products[cardId].amount <= 9) {
        products[cardId].amount++
      } else if(symbol == "-" && products[cardId].amount <= 9) {
        products[cardId].amount--
      }
      cardAmount.textContent = products[cardId].amount
      countItemAmount.textContent = products[cardId].amount
      if(products[cardId].amount == 0) {
        cardBtn.classList.remove('active')
        cardAmount.classList.remove('active')
        cardCount.classList.remove('active')
      }
      arrProducts.forEach(function(item, key) {
        if(item.amount == 0) {
          arrProducts.splice(key, 1)
        }
      })
      console.log(arrProducts);
    })
  })
})

cardBtnOpen.addEventListener('click', function(event) {
  event.preventDefault()
  cardDropdown.style.display = 'flex'
  cardDropdown.style.transition = '0.5s'
  setTimeout(function() {
    cardDropdown.style.transform = 'translateY(0%)'
  }, 200);
  setTimeout(function() {
    cardDropdown.style.opacity = '1'
  }, 500);
})
cartBtnClose.addEventListener('click', function(event) {
  event.preventDefault()
  cardDropdown.style.opacity = '0'
  setTimeout(function() {
    cardDropdown.style.transform = 'translateY(-150%)'
  }, 200);
  setTimeout(function() {
    cardDropdown.style.display = 'none'
  }, 500);
  setTimeout(function() {
    cardDropdown.removeAttribute('style')
  }, 600);
})
