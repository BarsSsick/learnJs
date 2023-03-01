let i = 3;

while (i) {
  alert( i-- ); 
}
// 1




let i = 0;
while (++i < 5) alert( i );  
// 1, 2, 3, 4

let i = 0;
while (i++ < 5) alert( i ); 
//1, 2, 3, 4, 5





for (let i = 0; i < 5; i++) alert( i ); 
//0, 1, 2, 3, 4

for (let i = 0; i < 5; ++i) alert( i ); 
//0, 1, 2, 3, 4




for(i=2; i <= 10; i++){
    if(i % 2 ==0){
        alert(i)
    }
}




let i = 0;
while (i < 3) {
    alert( `number ${i}!` );
    ++i;
}




let namber;
do{
     namber = prompt('введите число больше 100', 0);
}while(namber <=100 && namber);






let n = 10;
nextPrime:
for(i = 2; i <= n; i++){
    for(let a = 2; a < i; a++){
        if(i % a == 0) continue nextPrime;
    }
    alert(i)
}