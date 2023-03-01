alert(null || 2 || undefined);        //2


alert(alert(1) || 2 || alert(3));     //1 , 2


alert(1 && null && 2);                // null


alert(alert(1) && alert(2));          //1 , undefined


alert(null || 2 && 3 || 4);           //3


if (age >= 14 && age <= 90)


if (!(age >= 14 && age <= 90))


if (-1 || 0) alert('first');          //true
if (-1 && 0) alert('second');         //false
if (null || -1 && 1) alert('third');  //true


let login = prompt('кто там', '');
if(login === 'Админ') {
    let password = prompt('password', '');
    if(password === 'Я главный') {
        alert('здравствуйте');
    }else if(password === '' || pass === null){
        alert('отменено');
    }else{
        alert('неверный пароль');
    }
}else if(login === '' || login === null){
    alert('отменено');
}else {
    alert('я вас не знаю');
}