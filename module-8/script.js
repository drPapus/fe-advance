

const playSound = note => {
    const audio = document.querySelector(`audio[data-note=${note}]`);
    audio.currentTime = 0;
    audio.play();
  };
  
  const buttons = Array.from(document.querySelectorAll("button"));
  const keys = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
  const slider = document.querySelector("#slideThree");
  const activeBtn = {
    node: null
  };
  
  function keyboardPressed (event){
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
  