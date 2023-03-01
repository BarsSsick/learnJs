function ucFirst(str){
    let newStr = str[0].toUpperCase() + str.slice(1);
    return newStr
}
console.log(ucFirst('вася'))




function checkSpam(str){
    let lowCase = str.toLowerCase();
    return lowCase.includes('viagra') || lowCase.includes('xxx');
}
alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );





function truncate(str, maxlength){
    return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '…' : str;
    
}
console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))






function extractCurrencyValue(str){
    return +str.slice(1);
}
alert( extractCurrencyValue('$120') === 120 );