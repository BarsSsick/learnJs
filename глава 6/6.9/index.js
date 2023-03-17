function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, args);
    }
    wrapper.calls = [];
    return wrapper;
}
function work(a, b) {
    alert(a + b);
}
work = spy(work);
work(1, 2);
work(4, 5);
for (let args of work.calls) {
    alert('call:' + args.join());
}







function delay(f, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    };
}
function f(x) {
    alert(x);
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000("test");
f1500("test");






function debounce(f, ms) {
    let isCooldown = false;
    return function () {
        if (isCooldown) return;
        f.apply(this, arguments);
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms);
    };
}
let f = debounce(alert, 1000);
f(1);
f(2);
setTimeout(() => f(3), 100);
setTimeout(() => f(4), 1100);
setTimeout(() => f(5), 1500);





function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;
    function wrapper() {
        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }
        func.apply(this, arguments);
        isThrottled = true;
        setTimeout(function () {
            isThrottled = false;
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
    return wrapper;
}
function f(a) {
    console.log(a)
}
let f1000 = throttle(f, 1000);
f1000(1);
f1000(2);
f1000(3);