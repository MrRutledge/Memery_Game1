const cards = document.querySelectorAll('.memery-card');

let hasFlippedCard = false;
let firsCard, secondCard;

function flipCard() {
  this.classList.toggle('flip');
if (!hasFlippedCard) {
  // first clicke
  hasFlippedCard = true;
  firsCard = this;
}
else{
  // second Clicke
  hasFlippedCard =flase;
  secondCard =this;
  
  //
}
}

cards.forEach(card => card.addEventListener('click', flipCard));