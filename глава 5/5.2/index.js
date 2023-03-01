let a = +prompt('число 1', '');
let b = +prompt('число 2', '');
console.log(a + b);



function readNumber() {
    let number;
    do {
        number = prompt('введите число', 0);
    } while (!isFinite(number));

    if (number === null || number === '') return null;
    return +number
}
console.log(readNumber())





function random(min, max) {
    return min + Math.random() * (max - min);
}
alert(random(1, 5));
alert(random(1, 5));
alert(random(1, 5));






function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }
  
  alert( randomInteger(1, 3) );