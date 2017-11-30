const firstRow = 'qwertyuiop[]';
const secondRow = "asdfghjkl;'";
const thirdRow = 'zxcvbnm,./';

document.write("Первая строка " + firstRow.length + " символов" + `<br/>`); //12
document.write("Вторая строка " + secondRow.length  + " символов" + `<br/>`); //11
document.write("Третья строка " + thirdRow.length  + " символов" + `<br/>`); //10


var frstSymbol1str = firstRow.charAt(0);
var lstSmblFirstRow = firstRow.substr(-1);
var frstSymbol2str = secondRow.charAt(0);
var lstSmblSecondRow = secondRow.substr(-1);
var frstSymbol3str = thirdRow.charAt(0);
var lstSmblThrdRow = thirdRow.substr(-1);

var brackets = firstRow.indexOf('[');
var brackets2 = firstRow.indexOf(']');

//console.log(brackets);
//console.log(brackets2);

document.write(`Первый символ первой строки это ${frstSymbol1str} <br/>
Последний это знак ${lstSmblFirstRow} <br/>
Первый символ второй строки это ${frstSymbol2str} <br/>
Последний это знак ${lstSmblSecondRow} <br/>
Первый символ третьей строки это ${frstSymbol3str} <br/>
Последний это знак ${lstSmblThrdRow} <br/>
<br/>
Поиск по строке ${firstRow} показал что, знаки [] занимают ${brackets} и ${brackets2} -ое место. 
` );







