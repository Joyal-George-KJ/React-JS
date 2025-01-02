// Closure:
//      What is a Closure?
//      A closure is a function that remembers the variables from its outer scope even after the outer function has finished executing.

// Example:
const returnFun = () => {
    let res = 0;
    console.log("returnFun wrked! ", res);

    return function () {
        res++;
        console.log("Return Function Wrked! ", res);
    };
};

const fun = returnFun();
fun();
fun();
fun();

// Closure Task
// 1

const createAdder = (num) => {
    return function (addVal) {
        num += addVal;
        console.log(num);
    };
};

const add5 = createAdder(5);
add5(10); // 15

// 2

const counterInit = () => {
    let initCount = 0;

    return function () {
        initCount++;
        console.log("count: ", initCount);
    };
};

const counter = counterInit();
counter();
counter();
counter();

// Project - Counter with Closures

const createCounter = () => {
    let init = 0;
    return {
        increment: function () {
            init++;
            console.log("Incremented: ", init);
        },
        decrement: function () {
            inti--;
            console.log("Decrement: ", init);
        },
        getCount: function () {
            console.log("Count: ", init);
        },
        reset: function () {
            init = 0;
            console.log("Reset Complete! ", init);
        }

    }
}

const calculator = createCounter();
calculator.increment(); // 1
calculator.increment(); // 2
calculator.getCount(); // 2
calculator.reset(); // 0
