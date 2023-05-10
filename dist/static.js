"use strict";
class Counter {
    static increment() {
        return (Counter.counter = Counter.counter + 1);
    }
    static decrement() {
        return (Counter.counter = Counter.counter - 1);
    }
}
Counter.counter = 0;
;
const instance = new Counter();
const instance1 = new Counter();
console.log(Counter.increment());
console.log(Counter.decrement());
