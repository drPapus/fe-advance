const alphabet = "qwertyuiop[]asdfghjkl;'zxcvbnm,./"

let line1 = (alphabet.slice(0, 12));
let line2 = (alphabet.slice(12, 23));
let line3 = (alphabet.slice(23, 33));

let arrLine1 = line1.split("");
console.log(arrLine1); //[ "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", … ]
let arrLine2 = line2.split("");
console.log(arrLine2); //[ "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", … ]
let arrLine3 = line3.split("")
console.log(arrLine3); //[ "z", "x", "c", "v", "b", "n", "m", ",", ".", "/" ]

let keybord = new Array (arrLine1, arrLine2, arrLine3);
console.log(keybord);

let helloWrd = (
    keybord[1][5]+
    keybord[0][2]+
    keybord[1][8]+
    keybord[1][8]+
    keybord[0][8]
)
console.log(helloWrd);

let jsWrd = (
    keybord[1][6]+ 
    keybord[1][0]+
    keybord[2][3]+
    keybord[1][0]+
    keybord[1][1]+
    keybord[2][2]+
    keybord[0][3]+
    keybord[0][7]+
    keybord[0][9]+
    keybord[0][4]
)
console.log(jsWrd);

let trainerWrd = (
    keybord[0][4]+ 
    keybord[0][3]+
    keybord[1][0]+
    keybord[0][7]+
    keybord[2][5]+
    keybord[0][2]+
    keybord[0][3]
)
console.log(trainerWrd);

