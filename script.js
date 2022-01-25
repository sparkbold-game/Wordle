'use strict'

const wordList = ["apply", "awful", "above", "apple", "award", "angry", "album", "avoid", "ahead", "allow", "alive", "aware", "after", "adopt", "admit", "adapt", "among", "apart", "abuse", "actor", "about", "along", "again", "aside", "argue", "agent", "agree", "angle", "anger", "arise", "asset", "alone", "alter", "block", "bunch", "bench", "beach", "break", "badly", "brown", "brush", "buyer", "brief", "below", "birth", "blame", "basic", "bible", "bring", "broad", "begin", "build", "being", "blade", "bread", "brand", "board", "blind", "blood", "brain", "basic", "crazy", "check", "cheek", "clock", "chief", "crack", "coach", "couch", "cheap", "cycle", "catch", "child", "crowd", "climb", "chain", "cover", "crash", "craft", "civil", "chart", "chase", "chair", "chest", "carry", "claim", "cream", "crime", "cable", "cabin", "cloud", "could", "cause", "cross", "clear", "count", "color", "coast", "close", "class", "clean", "court", "dozen", "depth", "drink", "draft", "daily", "dirty", "delay", "death", "drive", "doubt", "drama", "dream", "dance", "dress", "enjoy", "equal", "exact", "extra", "exist", "empty", "every", "enemy", "eight", "entry", "earth", "early", "essay", "event", "elect", "eager", "error", "elite", "enter", "fifty", "fight", "faith", "fully", "fresh", "forth", "flesh", "funny", "fewer", "favor", "frame", "force", "focus", "fence", "fiber", "flame", "field", "found", "final", "first", "floor", "fault", "front", "fruit", "false", "float", "ghost", "given", "glove", "grave", "group", "guard", "guide", "grand", "grade", "grant", "guest", "guess", "giant", "glass", "green", "great", "grain", "grass", "happy", "heavy", "honey", "habit", "human", "humor", "hello", "horse", "hotel", "house", "heart", "honor", "index", "imply", "image", "ideal", "inner", "issue", "judge", "juice", "joint", "knock", "knife", "lucky", "lunch", "light", "laugh", "leave", "layer", "lover", "lower", "level", "local", "limit", "lemon", "labor", "label", "legal", "large", "least", "learn", "loose", "later", "major", "match", "maybe", "maker", "might", "month", "mouth", "movie", "mayor", "marry", "money", "music", "model", "media", "metal", "mouse", "mount", "motor", "moral", "meter", "minor", "newly", "naked", "night", "nerve", "never", "north", "novel", "noise", "nurse", "offer", "occur", "ought", "often", "other", "owner", "ocean", "order", "onion", "porch", "pitch", "patch", "prove", "power", "photo", "phone", "phase", "proof", "party", "peace", "price", "prime", "place", "paper", "piece", "pride", "proud", "pound", "print", "prior", "press", "point", "plate", "plant", "plane", "pilot", "piano", "pause", "panel", "paint", "quick", "quiet", "quite", "quote", "relax", "reply", "reach", "rough", "ready", "right", "rapid", "river", "refer", "react", "round", "radio", "range", "ratio", "raise", "route", "rural", "shock", "seize", "shake", "stick", "stock", "stuff", "shelf", "staff", "speak", "smoke", "shift", "sharp", "shape", "sweep", "shade", "sight", "shrug", "space", "scope", "skill", "stake", "study", "swing", "sweet", "story", "spend", "solve", "sorry", "south", "swear", "speed", "style", "slave", "short", "sheet", "share", "shine", "shirt", "shoot", "shall", "shore", "seven", "shell", "serve", "shout", "sauce", "split", "scale", "super", "scene", "score", "strip", "storm", "sport", "smell", "sleep", "smart", "small", "slice", "smile", "since", "stand", "sugar", "sound", "slide", "stage", "solid", "salad", "sales", "sense", "solar", "stair", "stare", "state", "steal", "steel", "still", "stone", "store", "start", "thick", "think", "thank", "track", "throw", "trick", "truck", "theme", "touch", "teach", "twice", "tough", "tight", "today", "third", "thing", "topic", "tower", "truly", "truth", "their", "tooth", "there", "three", "these", "those", "terms", "troop", "tribe", "table", "trace", "tired", "trend", "trade", "taste", "trust", "total", "title", "train", "trial", "trail", "treat", "upper", "uncle", "urban", "under", "union", "until", "usual", "voice", "video", "value", "virus", "visit", "vital", "voter", "which", "watch", "weigh", "works", "whose", "worth", "whole", "white", "while", "where", "wheel", "worry", "woman", "would", "wound", "world", "wrong", "water", "write", "waste", "youth", "yield", "young", "yours", "quick", "crazy", "which", "check", "knock", "happy", "enjoy", "dozen", "thick", "shock", "seize", "quote", "quite", "quiet", "major", "lucky", "juice", "judge", "heavy", "fifty"];

const randomIndex = Math.floor(Math.random() * wordList.length);
const secretWord = wordList[randomIndex];
const maxGuess = secretWord.length + 1;

let guessWordList = [];
let currentGuess = '';

const board = document.getElementById('board');


buildBoard();
updateBoard();
window.addEventListener('keydown', handleKeyDown);

function handleKeyDown(e) {
  const char = e.key.toLowerCase();

  if (e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }

  if (guessWordList.length === 6) {
    return;
  }

  if (char === 'enter') {

    // check currentGuess chars
    if (currentGuess.length < secretWord.length) {
      return;
    }

    // check if currentGuess in the list
    if (!wordList.includes(currentGuess)) {
      alert('Not in my list');
      return;
    }

    // show the secret if no more guesses
    if (guessWordList.length === maxGuess && currentGuess !== secretWord) {
      alert(secretWord);
    }

    // Add it to guessWordList list
    guessWordList.push(currentGuess);
    // Reset currentGuess
    currentGuess = '';

    // delete char currentGuess
  } else if (char === 'backspace') {

    currentGuess = currentGuess.slice(0, currentGuess.length - 1)
    console.log(currentGuess);

    // check input valid char
  } else if (/[a-z]/.test(char)) {
    if (currentGuess.length < secretWord.length) {
      currentGuess += char;
      console.log(currentGuess);
    }
  }

  updateBoard();

}

function buildBoard() {
  for (let i = 0; i < maxGuess; i++) {
    let row = document.createElement('div');
    for (let j = 0; j < secretWord.length; j++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.textContent = '?';
      row.appendChild(cell);
    }
    board.appendChild(row);
  }
}


function updateBoard() {
  // for (let i = 0; i < secretWord.length + 1;i++) {
  //   let row = board.children[i];

  //   // check if current row is in the guessWordList list
  //   // update the row with the guessWord in the list
  //   if (i < guessWordList.length) {
  //     console.log('I am here i < guessWordList.length');
  //     updateRow(row, guessWordList[i], true);

  //   // check if it is the currentGuess (last word in the list)
  //   } else if (i === guessWordList.length) {
  //     console.log('I am here i = guessWordList.length');
  //     updateRow(row, currentGuess, false);

  //   // reset
  //   } else {
  //     console.log('I am here updateRow(row, false);');
  //     updateRow(row, '', false);
  //   }
  // }

  let row = board.firstChild;

  for (let guessWord of guessWordList) {
    updateRow(row, guessWord, false);
    row = row.nextSibling;
  }
  updateRow(row, currentGuess, true);
}

function updateRow(row, guessWord, isCurrent) {
  for (let i = 0; i < secretWord.length; i++) {
    let cell = row.children[i];

    if (guessWord[i] !== undefined) {
      cell.textContent = guessWord[i];
    } else {
      cell.innerHTML = '<div style="opacity: 0">X</div>';
    }

    if (isCurrent) {
      cell.style.backgroundColor = '#333'; //change bg to lighter dark grey
    } else {
      cell.style.backgroundColor = getBgColor(guessWord, i)
    }
  }
}

// Function to update backgroundColor on the cell
function getBgColor(guessWord, i) {
  const correctChar = secretWord[i];
  const guessChar = guessWord[i];


  // undefined or not in the secretWord
  if (guessChar === undefined || secretWord.indexOf(guessChar) === -1) {
    return 'darkGrey';
  }
  // matched return green bg
  if (guessChar === correctChar) {
    return 'LimeGreen';
  }

  return 'Khaki';

}

// Function to handle key press addEventListener

