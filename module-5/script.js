//  //task - 1
 
//  addKeyboardLayout = (alphabet) => {
//     let line1 = (alphabet.slice(0, 12));
//     let line2 = (alphabet.slice(12, 23));
//     let line3 = (alphabet.slice(23, 33));

//     let arrLine1 = line1.split("");
//     console.log(arrLine1); //[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", … ]
//     let arrLine2 = line2.split("");
//     console.log(arrLine2); //[ "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", … ]
//     let arrLine3 = line3.split("")
//     console.log(arrLine3); //[ "z", "x", "c", "v", "b", "n", "m", ",", ".", "/" ]

//     let keybord = new Array (arrLine1, arrLine2, arrLine3);

//     return keybord;
// };
// console.log('Вывод функции', addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm,./"));

// //end task - 1

// //task - 2

//  getRandCharInRow = (row) => {
//     if (! /^NaN$/.test(+row) && row >= 0 && row <= 3) {
//         let keyboard = ["qwertyuiop[]", "asdfghjkl;'", "zxcvbnm,./"];
//         let str = keyboard[row - 1];
//         let rnd = Math.floor(Math.random() * (str.length - 1));
//         return str[rnd];
//     }
//     else {
//         alert("Пробуем ввести по новой!");
//     }	
// }
// console.log(getRandCharInRow(1));
// console.log(getRandCharInRow(2));
// console.log(getRandCharInRow(3));

// //end task - 2

// //task - 3

// getRandCharInAlph = () =>{
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz';
//     let spt = alphabet.split('');
//     let rund = Math.floor( Math.random() * spt.length )

//     return spt[rund];
// }
// console.log(getRandCharInAlph());

// getRandCharInAlph()
// "e"
// getRandCharInAlph()
// "n"
// getRandCharInAlph()
// "t"


//end task - 3


const keyboard = {
    layouts: {
        en: {
            topRow: ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
            middleRow: ["a", "s", "d", "f", "g", "h", "j", "k", "l"],
            bottomRow: ["z", "x", "c", "v", "b", "n", "m"]
        },
        ru: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ"],
            middleRow: ["ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э"],
            bottomRow: [ "я", "ч", "с", "м", "и", "т", "ь", "б", "ю"]
        },
        ua: {
            topRow: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ї"],
            middleRow: ["ф", "і", "в", "а", "п", "р", "о", "л", "д", "ж", "є"],
            bottomRow: ["я", "ч", "с", "м", "и", "т", "ь", "б", "ю"]
        }
    },
    langs: ['en', 'ru', 'ua'],
    currentLang: ''
};
let selectLanguage = prompt("Select language using en-0, ru-1, ua-2");
let getLang = parseInt(selectLanguage);
for (; getLang <= -1 || getLang >= 3 || isNaN(getLang);){
    getLang = prompt("Not correct data!, re-enter");
}

function getRandCharInAlph() {
    keyboard.currentLang = keyboard.langs[selectLanguage];
    const EN_ALPHABET = ((keyboard.layouts['en']['topRow']).join('') + (keyboard.layouts['en']['middleRow']).join('') + (keyboard.layouts['en']['bottomRow']).join(''));
    const RU_ALPHABET = ((keyboard.layouts['ru']['topRow']).join('') + (keyboard.layouts['ru']['middleRow']).join('') + (keyboard.layouts['ru']['bottomRow']).join(''));
    const UA_ALPHABET = ((keyboard.layouts['ua']['topRow']).join('') + (keyboard.layouts['ua']['middleRow']).join('') + (keyboard.layouts['ua']['bottomRow']).join(''));
    if (keyboard.currentLang === 'en') {
        alert(`Rundom letter: ${EN_ALPHABET[Math.floor(Math.random() * EN_ALPHABET.length - 1)]}`);
    }
    else if (keyboard.currentLang === 'ru') {
        alert(`Случайная буква: ${RU_ALPHABET[Math.floor(Math.random() * EN_ALPHABET.length - 1)]}`);
    }
    else {
        alert(`Випадкова буква: ${UA_ALPHABET[Math.floor(Math.random() * EN_ALPHABET.length - 1)]}`);
    }
}
getRandCharInAlph();	
    



