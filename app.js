let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;

let start = document.querySelector('#overlay a');
start.addEventListener('click', ()=>{
  let startScreen = document.querySelector(`#overlay`);
  startScreen.style.display = `none`;
})

const phrases = [
  `Cats on trees`,
  `Animal Planet`,
  `Say yes to the dress`,
  `National Geographic`,
  `Pretty in pink`
];

function randomPhrase(){
  const randomPhrase = Math.floor(Math.random()*5);
  return randomPhrase;
};

function getRandomPhraseAsArray(arr) {
  var splitArray = [];
  var number = randomPhrase();
  splitArray = arr[number];
  return splitArray.split("");
};
var phraseArray = getRandomPhraseAsArray(phrases);


function addPhraseToDisplay(arr) {
  for (let i = 0; i < arr.length; i++) {
  const item = document.createElement('li');
  const list = document.querySelector(`#phrase ul`)
  item.textContent = arr[i];
  list.append(item);
    if (arr[i].toLowerCase() >= 'a' && arr[i].toLowerCase() <= 'z') {
      item.className = "letter";
    }}};

addPhraseToDisplay(phraseArray);

let button;
qwerty.addEventListener('click', (event)=> {
  button = event.target
  console.log(button.textContent);
  button.classList = ("chosen");
  button.disabled = true;
});

var correct = phraseArray;

function checkLetter(button) {
  for (let i = 0; i < correct.length; i++) {
    if (correct[`${i}`].textContent === button.textContent) {
    correct[`${i}`].classList = ("show");
    var letterFound =+ correct[i].textContent;
  }
}
}
