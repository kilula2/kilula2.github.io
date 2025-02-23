let listOfWords = [
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
    "спортсмен",
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
    "пенис"
  ];
  
  const mainWord = document.getElementById("mainWord");
  const mainTimer = document.getElementById("count");
  const charInputForm = document.getElementById("charInput");
  const wordResInput = document.getElementById("wordResInput");
  const loser = document.getElementById("loser");
  
  
  let word;
  let wordHidden;
  let timer = 10;
  let alf = {};
  
  
  function mama_brik() {
      for (x of 'ёйцукенгшщзхъфывапролджэячсмитьбю') {
          alf[x] = false;
      }
  
      timer = 10;
      word = listOfWords[Math.floor(Math.random() * listOfWords.length)];
  
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
      loser.innerHTML = "";
  }
  
  const wordsOver = (func) => {
      if (listOfWords.length == 0) {
          mainWord.innerHTML = "слова кончились";
          mainTimer.innerHTML = "";
          document.getElementById("restart").disabled = true;
          document.getElementById("resBut").disabled = true;
          document.getElementById("charBut").disabled = true;
      } else {
          func();
      }
  }
  
  
  document.getElementById("restart").addEventListener("click", restart);
  
  function restart(event) {
      event.preventDefault();
      wordsOver(mama_brik);
  }
  
  
  document.getElementById("resForm").addEventListener("submit", fullWord);
  //функция для обработки результатов поля ввода слова целиком
  function fullWord(event) {
      event.preventDefault();
      wordResInputValue = wordResInput.value.toLowerCase();
  
      console.log(wordResInputValue, word);
  
      if ((word != "")) {        //условие чтоб инпут был не пустой
          if (word == wordResInputValue) {
              mainWord.innerHTML = word.split('').join(' ');
              alert("АХУЕТЬ, это действительно " + word);
              listOfWords.splice(listOfWords.indexOf(word), 1);
              wordResInput.value = "";
          } 
      } else {
          timer--;
          mainTimer.innerHTML = timer;
          wordResInput.value = "";
      }
      
      if (timer == 0) {            
          alert("иди нахуй");
          wordsOver(mama_brik);
      }
  }
  
  
  document.getElementById("charForm").addEventListener("submit", chaRR);
  //функция для обработки результатов поля ввода символа
  function chaRR(event) {
      event.preventDefault();
      charInput = charInputForm.value.toLowerCase();
  
      console.log(charInput, alf[charInput]);
  
  
      if ((word != undefined) && (!alf[charInput])) {  //проверяем поле на пустоту и вводили ли букву до этого
              alf[charInput] = true;
              if (word.includes(charInput)) {
                  loser.innerHTML = "";
                  word = word.split('');
                  wordHidden = wordHidden.split(' ');
  
                  let arr = [];
  
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
                      alert("АХУЕТЬ, это действительно " + word);
                      listOfWords.splice(listOfWords.indexOf(word), 1);
                  }
              } else {
                  timer--;
                  mainTimer.innerHTML = timer;
                  charInputForm.value = "";
                  loser.innerHTML = "Такой буквы нет";
              }
      } else if (charInput) {
          loser.innerHTML = "Буква уже была введена";
      }
  
      if (timer == 0) {
          alert("иди нахуй");
          wordsOver(mama_brik);
      }
  }