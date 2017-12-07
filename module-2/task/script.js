let participants = prompt('Введите количество путешественников', 'число');
let sharm = 15;
let hurgada = 25;
let taba = 6;
 if (participants <= 0) {
    alert("Не верное значение!");
 } else if (parseInt(participants) != participants) {  // или вариант (Math.ceil(participants) - participants > 0)
    alert("Не целое число!");
 } else if (participants <= taba){
    alert(`Можем предложить тур в Табу`);
    var tabaTrvl = (taba - participants);
    alert("Осталось " + tabaTrvl + " мест в Табу");
 } else if (participants > taba && participants <= sharm) {
     alert('Можем предложить тур в Шармальшейх');
     var sharmTrvl = (sharm - participants);
     alert("Осталось " + sharmTrvl + " мест в Шармальшейх");
 } else if (participants > sharm && participants <= hurgada){
    alert('Можем предложить тур в Хургаду');
    var hurTrvl = (hurgada - participants);
    alert("Осталось " + hurTrvl + " мест в Хургаду");
 } else {
     alert("Мест нет!");
 };




