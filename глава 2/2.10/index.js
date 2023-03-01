const name = prompt('Какое «официальное» название JavaScript?', name);
const question = (name == 'ECMAScript') ? 'верно' : 'Не знаете? ECMAScript!';
alert(question);



let result;
result = (a + b < 4) ? 'Мало' : 'Много';



let message;
let message = (login == 'Сотрудник') ? 'Привет' :
  (login == 'Директор') ? 'Здравствуйте' :
  (login == '') ? 'Нет логина' :
  '';