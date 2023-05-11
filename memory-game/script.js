const gameContainer = document.getElementById("game");

const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
const colorPicklist = [...colors];
const gameCount = colorPicklist.length;

let revealedCount = 0;
let activeGame = null;
let awaitingEndOfMove = false;

function buildGame(color) {
  const element = document.createElement('div');
  element.classList.add('game');
  element.setAttribute('data-color', color);
  element.setAttribute('data-revealed', 'false');

  element.addEventListener('click', () => {
    const revealed = element.getAttribute('data-revealed');

     if (
      awaitingEndOfMove
      || revealed === 'true'
      || element === activeGame
      ) {
      return;
     }

     element.style.backgroundColor = color;

     if (!activeGame) {
      activeGame = element;

      return;
     }

     const colorToMatch = activeGame.getAttribute('data-color');
     
     if (colorToMatch === color) {
      activeGame.setAttribute('data-revealed', 'true');
      element.setAttribute('data-revealed', 'true');

      awaitingEndOfMove = false;
      activeGame = null;
      revealedCount += 2;

      if (revealedCount === gameCount) {
        alert ('you win! Refresh to play again.');
      }
      return;

     }

     awaitingEndOfMove = true;

     setTimeout(() => {
      element.style.backgroundColor = null;
      activeGame.style.backgroundColor = null;

      awaitingEndOfMove = false;
      activeGame = null;
     }, 1000);

  });


  return element;

}

for (let i = 0; i < gameCount; i++) {
  const randomIndex = Math.floor(Math.random() * colorPicklist.length);
  const color = colorPicklist[randomIndex];
  const game = buildGame(color);


  colorPicklist.splice(randomIndex, 1);
  gameContainer.appendChild(game);
}












/*
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);
}

// when the DOM loads
createDivsForColors(shuffledColors);
*/