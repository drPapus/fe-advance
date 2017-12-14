 //task - 1
 
 addKeyboardLayout = (alphabet) => {
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

    return keybord;
};
console.log('Вывод функции', addKeyboardLayout("qwertyuiop[]asdfghjkl;'zxcvbnm,./"));

//end task - 1

//task - 2

 getRandCharInRow = (row) => {
    if (! /^NaN$/.test(+row) && row >= 0 && row <= 3) {
        let keyboard = ["qwertyuiop[]", "asdfghjkl;'", "zxcvbnm,./"];
        let str = keyboard[row - 1];
        let rnd = Math.floor(Math.random() * (str.length - 1));
        return str[rnd];
    }
    else {
        alert("Пробуем ввести по новой!");
    }	
}
console.log(getRandCharInRow(1));
console.log(getRandCharInRow(2));
console.log(getRandCharInRow(3));

//end task - 2

//task - 3

getRandCharInAlph = () =>{
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let spt = alphabet.split('');
    let rund = Math.floor( Math.random() * spt.length )

    return spt[rund];
}
console.log(getRandCharInAlph());

// getRandCharInAlph()
// "e"
// getRandCharInAlph()
// "n"
// getRandCharInAlph()
// "t"


//end task - 3