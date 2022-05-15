export {};

/* let variable declaration */
let message = "hello world!!";
console.log(message);

/* Declaring type of variable */
let isBoolean: boolean = true;
console.log(isBoolean);

/* String type declaration of variable */
const name: string = "Prachi";
console.log(name);

/* Number type declaration of variable */
let num: number = 290;

/* can change the value of variables declared as let */
num = 12;

/* Tuple type variable declaration */
const tupple1: [String, number] = ["Anukalp", 11];
console.log(tupple1);

/* Tupple with any type declaration, can call function like tupple[2](), or property like tupple[2].name or tupple[2].toUpperCase() with type any */
const tupple2: [boolean, number, any] = [false, 34, "mike"];

/* assigning new value of integer type doesn't throw error in case of any type declaration */
tupple2[2] = 20;
console.log(tupple2);

/* Enum Type, starting index 0 by default */
enum Color {
  Red,
  Green,
  Yellow
}

const color: Color = Color.Green;
console.log(color);

/* unknown type declaration, can't call function like test(), or property like test.name or test.toUpperCase() here */
let test: unknown = "20";

/* Providing type of arguments and their specific property */
function printName(obj: any): obj is { name: string } {
  return typeof obj === "object" && obj.name;
}

console.log(printName(test));

console.log(printName({ name: "Naman" }));

console.log((test as string).toUpperCase());

/* ? represent optional argument. it might be more than one but should always come after the required arguments */
function printAvg(arg1: number, arg2?: number) {
  if (arg2) return (arg1 + arg2) / 2;
  else return arg1;
}

console.log(printAvg(10, 40));
console.log(printAvg(100));

/* Passing traditionally an object as an argument */
function printFullNameWithGreeting(person: {
  firstName: string;
  lastName: string;
}) {
  return `Hello ${person.firstName} ${person.lastName}`;
}
printFullNameWithGreeting({ firstName: "Ashish", lastName: "Goel" });

/* Instead of passing a whole structure of object with variable's type, Interface is used */
interface Person {
  firstName: string;
  lastName: string;
}

function printFullName(person: Person) {
  return `${person.firstName} ${person.lastName}`;
}

console.log(printFullName({ firstName: "Swati", lastName: "Sachan" }));

/* class declaration */
class Employee {
  name: string;
  /* private property */
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
  getAge() {
    console.log(`${this.name}'s age is ${this.age}`);
  }
}

const e1 = new Employee("Manak", 22);
e1.greet();
e1.getAge();

/* Inheriting from Employee class */
class Manager extends Employee {
  constructor(name: string, age: number) {
    super(name, age);
  }
  /* Own Method */
  assignWork() {
    console.log("assigning tasks...");
  }
}

const m1 = new Manager("Milan", 42);

m1.assignWork();
m1.getAge();
