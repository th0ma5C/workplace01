class Person {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(this.name);
    }

    static greet() {
        console.log(`Hello, ${this.name}!`); // 錯誤：this.name 未定義
    }
}

let a = Person.greet('tom');
console.log(a)

// const person = new Person("John Doe");
// const boundGreet = Person.greet.bind(person);
// boundGreet(); // "Hello, John Doe!"
