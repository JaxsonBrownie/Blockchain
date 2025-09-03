class Person {
    constructor(fn, ln) {
        this.firstname = fn;
        this.lastname = ln;
        this.fullname = fn + ln;
    };

    sayHello() {
        console.log("Hi my name is " + this.fullname);
    };
}

let bob = new Person("Bob", "Hawk");
bob.sayHello();