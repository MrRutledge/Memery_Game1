const cards = document.querySelectorAll('.memery-card');

let hasFlippedCard = false;
let firsCard, secondCard;

function flipCard() {
  this.classList.toggle('flip');
if (!hasFlippedCard) {
  // first click
  hasFlippedCard = true;
  firsCard = this;
}
else{
  // second Click
  hasFlippedCard =flase;
  secondCard =this;
  
  //
}
}

cards.forEach(card => card.addEventListener('click', flipCard));