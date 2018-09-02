const cards = document.querySelectorAll('.memery-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  this.classList.toggle('flip');
if (!hasFlippedCard) {
  // first click
  hasFlippedCard = true;
  firstCard = this;

  return;
}
else{
  // second click
  hasFlippedCard = flase;
  secondCard = this;

  checkFoMatch();
  }
}

function checkFoMatch() {
  //checking if the cards match 
  
  let isMatch = firstCard.dataset.image === secondCard.dataset.image 
    //
   isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
  }
  function unflipCards() {
    setTimeout(() => {
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
    }, 1400);
  }


cards.forEach(card => card.addEventListener('click', flipCard));