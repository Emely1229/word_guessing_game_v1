let qwerty = document.querySelectorAll(`#qwerty .keyrow button`);
let phrase = document.getElementById('phrase');
let missed = 0;

//allows game to start on button click
let start = document.querySelector('#overlay a');
start.addEventListener('click', ()=>{
  let startScreen = document.querySelector(`#overlay`);
  startScreen.style.display = `none`;
  //allows game to restart
   start.addEventListener('click', ()=>{
     console.log('click');
     let list = document.querySelector(`#phrase ul`);
     list.innerHTML = '';
     //regenerates a new phrase
     addPhraseToDisplay(getRandomPhraseAsArray(phrases));
     //removes class chosen to unhighlighted and enable letters
     qwerty.forEach(qwerty => {
       qwerty.classList.remove('chosen');
       qwerty.disabled = false;
     });
     missed= 0;
     //sets missed to zero
     const attempts = document.querySelectorAll(`#scoreboard .tries img`);
     //allows attempts to be set back to full health upon button click of restart
     attempts.forEach(attempts => {
       attempts.src = "images/liveHeart.png";
     });
     //allows all letters to be hidden until guessed on button click of restart
     letter.forEach(letter => {
       letter.classList.remove('show');
     });
   });
});

//creates a list of phrases
const phrases = [
  `Cats on trees`,
  `Animal Planet`,
  `Say yes to the dress`,
  `National Geographic`,
  `Pretty in pink`
];

//generates a randomphrase with the list of phrases
function randomPhrase(){
  const randomPhrase = Math.floor(Math.random()*5);
  return randomPhrase;
}

//makes random phrase into strings of letters
function getRandomPhraseAsArray(arr) {
  var splitArray = [];
  var number = randomPhrase();
  splitArray = arr[number];
  return splitArray.split("");
}
var phraseArray = getRandomPhraseAsArray(phrases);

//puts string of letters onto document
//spaces with space class
// letters with letter class
function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
  const item = document.createElement('li');
  const list = document.querySelector(`#phrase ul`);
  item.textContent = arr[i];
  list.append(item);
    if (item.textContent === " ") {
      item.className = "space";
    } else {
      item.className = "letter";
    }
  }}

addPhraseToDisplay(phraseArray);

//takes away a heart unpon misguess and adds to missed counter
//when you win it shows win overlay
//when you lose it shows lose overlay
let button;
for (var i=0; i<qwerty.length; i++) {
  qwerty[i].addEventListener('click', function(event){
    button = event.target;
    console.log(button.textContent);
    button.classList.add("chosen");
    button.disabled = true;
    checkLetter(button);
    if (checkLetter(button) === null) {
      missed ++;
      const attempts = document.querySelector(`#scoreboard .tries img[src="images/liveHeart.png"]`);
      console.log(attempts);
      attempts.src = "images/lostHeart.png";
    }
      show = document.querySelectorAll(`#phrase .show`);
      let overlay = document.querySelector(`#overlay`);
      let overlayText = document.querySelector(`#overlay .title`);
      var letter = document.querySelectorAll('.letter');
      if ( show.length === letter.length  ) {
        overlay.style.display = `block`;
        overlay.classList.add("win");
        overlayText.innerHTML = '<h2> You win!</h2>';
        overlay.classList.remove('lose');

      } if (missed >= 5) {
        overlay.style.display = `block`;
        overlay.classList.add("lose");
        overlay.classList.remove('win');
        overlayText.innerHTML = '<h2> You lose! Better luck next time.</h2>';
      }
    });
  }


var letter = document.querySelectorAll('.letter');
console.log(letter);

//checks to see if letter selected matches a letter within the phrases
//shows the letter upon correct guess
function checkLetter(button) {
  var letter = document.querySelectorAll('.letter');
  let letterFound = null;
  for (let i = 0; i < letter.length; i++) {
    if (letter[i].textContent.toLowerCase() === button.textContent) {
    letter[i].classList.add("show");
    letterFound = button.textContent;
  }
}
return letterFound;
}
