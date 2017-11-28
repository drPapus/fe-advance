const firstRow = 'qwertyuiop[]';
const secondRow = "asdfghjkl;'";
const thirdRow = 'zxcvbnm,./';

console.log(firstRow.length); //12
console.log(secondRow.length); //11
console.log(thirdRow.length); //10

const firstRowNum = 12;
const secondRowNum = 11;
const thirdRowNum = 10;


var frstSymbol1str = firstRow.charAt(0);
var lstSmblFirstRow = firstRow.charAt(11);
var frstSymbol2str = secondRow.charAt(0);
var lstSmblSecondRow = secondRow.charAt(10);
var frstSymbol3str = thirdRow.charAt(0);
var lstSmblThrdRow = thirdRow.charAt(9);

var brackets = firstRow.indexOf('[');
var brackets2 = firstRow.indexOf(']');

console.log(brackets);
console.log(brackets2);

document.write(`Первый символ строки ${firstRow} это ${frstSymbol1str} <br/>
Последний это знак ${lstSmblFirstRow} <br/>
Первый символ строки ${secondRow} это ${frstSymbol2str} <br/>
Последний это знак ${lstSmblSecondRow} <br/>
Первый символ строки ${thirdRow} это ${frstSymbol3str} <br/>
Последний это знак ${lstSmblThrdRow} <br/>
<br/>
Поиск по строке ${firstRow} показал что, знаки [] занимают ${brackets} и ${brackets2} -ое место. 
` );







