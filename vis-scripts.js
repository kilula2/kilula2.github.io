let lisfOfWords = [
  "крем",
  "парацетамол",
  "развод",
  "сортир",
  "самбука",
  "кнопка",
  "массив",
  "милкшейк",
  "лагуна",
  "алгоритм",
  "Спортсмен",
  "баскетбол",
  "рюкзак",
  "вокзал",
  "октябрь",
  "хризантема",
  "хоккей",
  "матч",
  "брошюра",
  "жюри",
  "парашют",
  "съезд",
  "вьюга",
  "корпорация",
  "контрабас",
  "лиственница",
  "меридиан",
  "миниатюра",
  "медицина",
  "лилипут",
  "корректор",
  "пенис",
];

const mainWord = document.getElementById("mainWord");
const mainTimer = document.getElementById("count");
const charInputForm = document.getElementById("charInput");
const wordResInput = document.getElementById("wordResInput");


let word;
let wordHidden;
let timer = 10;


document.getElementById("restart").addEventListener("click", restart);

function restart(event) {
    event.preventDefault();

    timer = 10;
    word = lisfOfWords[Math.floor(Math.random() * lisfOfWords.length)];
    // lisfOfWords.splice(lisfOfWords.indexOf(word));

    wordHidden = "_";
    for (let i = 0; i < word.length - 1; i++) {
        wordHidden += " _";
    }

    console.log(word);

    document.getElementById("wordResInput").maxlength = word.length;

    mainWord.innerHTML = wordHidden;
    mainTimer.innerHTML = timer;
    charInputForm.value = "";
    wordResInput.value = "";
}


document.getElementById("resForm").addEventListener("submit", fullWord);

function fullWord(event) {
    event.preventDefault();
    wordInput = document.getElementById("wordResInput").value;

    if ((word != undefined)) {        //условие чтоб инпут был не пустой
        if (word == wordInput) {
            alert("АХУЕТЬ");
            mainWord.innerHTML = word.split('').join(' ');
        } else {
            timer--;
            mainTimer.innerHTML = timer;
            wordResInput.value = "";
        }
    }
    
    if (timer == 0) {                 // уходит в минус
        alert("иди нахуй");
        lose();
    }
}


document.getElementById("charForm").addEventListener("submit", chaRR);

function chaRR(event) {
    event.preventDefault();
    charInput = charInputForm.value.toLowerCase();

    if ((word != undefined)) {      //условие чтоб инпут чар был не пустой
        if (word.includes(charInput)) {
            word = word.split('');
            wordHidden = wordHidden.split(' ');

            let arr = [];

            // var n = word.indexOf(charInput);
            // console.log(n);

            for (let i = 0; i < word.length; i++) {
                if (word[i] == charInput) {
                    arr.push(i);
                }
            }

            for (let a of arr) {
                wordHidden[a] = charInput;
            }

            wordHidden = wordHidden.join(' ');

            word = word.join('');

            mainWord.innerHTML = wordHidden;
            charInputForm.value = "";

            if (word == wordHidden.split(' ').join('')) {
                alert("АХУЕТЬ");
            }
        } else {
            timer--;
            mainTimer.innerHTML = timer;
            charInputForm.value = "";
        }
    }

    if (timer == 0) {                 // уходит в минус
        alert("иди нахуй");
        lose();
    }
}


function lose() {
    mainTimer.innerHTML = '';
    mainWord.innerHTML = '';
}