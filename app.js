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
  return splitArray
};
console.log(getRandomPhraseAsArray(phrases));
