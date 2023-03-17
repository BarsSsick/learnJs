function sum(a) {
    return function (b) {
        return a + b;
    };
}
sum(1)(2) = 3
sum(5)(-1) = 4






let arr = [1, 2, 3, 4, 5, 6, 7];
function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}
function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}
alert(arr.filter(inBetween(3, 6)));
alert(arr.filter(inArray([1, 2, 10])));




let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
function byField(fieldName) {
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
users.sort(byField('name'));
users.forEach(user => alert(user.name));
users.sort(byField('age'));
users.forEach(user => alert(user.name));







function makeArmy() {
    let shooters = [];
    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            alert(i);
        };
        shooters.push(shooter);
    }
    return shooters;
}
let army = makeArmy();
army[0]();
army[5]();