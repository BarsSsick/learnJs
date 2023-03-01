function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}



function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}


let x = prompt("x?", '');
let n = prompt("n?", '');
function pow(x, n) {
  let result = x;

  for(let i = 1; i < n; i++){
    result = result * x;
  }
  return result
}
if (n < 1) {
  alert('Поддерживает только натуральные значения');
} else {
  alert( pow(x, n) );
}