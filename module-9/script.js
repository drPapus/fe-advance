
const lang = {
  en: "qwertyuiop[]asdfghjkl;'zxcvbnm,./"
};
const notes = ["do", "re", "mi", "fa", "sol", "la", "la", "sol", "fa", "mi", "re", "do"];

const createKeyboardLayout = (alphabet) => {

    let keyboard = {
        topRow: [],
        middleRow: [],
        bottomRow: []
    };
    let alphArr = [...alphabet]; //вариант вместо .split

    alphArr.forEach(function(item, i) {
        if (i<12) {keyboard.topRow[i] = item}
        else if (i<23) {keyboard.middleRow[i-12] = item}
        else {keyboard.bottomRow[i-23] = item}
    });

    const tpl = document.querySelector('#keyboard-tpl').textContent.trim();

    const compiled = _.template(tpl, {variable: "keyboard"});

    const result = compiled(keyboard);

    document.querySelector('#keyboard-container').innerHTML += result;
}

createKeyboardLayout(lang.en);

const buttons = Array.from(document.querySelectorAll("button"));
const slider = document.querySelector("#slideThree");
const activeBtn = {
  node: null
};

const playSound = note => {
  const audio = document.querySelector(`audio[data-note=${note}]`);
  console.log(audio);
  audio.currentTime = 0;
  audio.play();
};



const keyboardPressed = event => {

  if (activeBtn.node) {
      activeBtn.node.classList.remove("keyboard__btn--active");
  };

  activeBtn.node = buttons.find(function(button) {

    let a = event.keyCode;

    if (a == 222) {a = 39}
      else if (a > 218) {a = a - 128}
       else if (a > 187) {a = a - 144}
        else if (a == 186) {a = 59}
          else if (a == 32) {return button.innerHTML == "space"}

    return button.innerHTML.toUpperCase().charCodeAt(0) == a;
  });
  
  if (activeBtn.node) {
    activeBtn.node.classList.add("keyboard__btn--active");
    if (slider.checked) {
      playSound(activeBtn.node.getAttribute("data-note"));
    };
  }
}


window.addEventListener("keydown", keyboardPressed);
