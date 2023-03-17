function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum
}
function sumTo2(n) {
    if (n == 1) return 1;
    return n + sumTo(n - 1);
}
function sumTo3(n) {
    return n * (n + 1) / 2;
}
alert(sumTo(100))
alert(sumTo2(100))
alert(sumTo3(100))






function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
alert(factorial(5));







function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}
alert(fib(3));
alert(fib(7));
alert(fib(77));






let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};
function printList(list) {
    let tmp = list;
    while (tmp) {
        alert(tmp.value);
        tmp = tmp.next;
    }
}
function printList2(list) {
    alert(list.value);
    if (list.next) {
        printList(list.next);
    }
}
printList(list);
printList2(list);







function printReverseList(list) {
    if (list.next) {
        printReverseList(list.next);
    }
    alert(list.value);
}
function printReverseList2(list) {
    let arr = [];
    let tmp = list;
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}
printReverseList(list);
printReverseList2(list);