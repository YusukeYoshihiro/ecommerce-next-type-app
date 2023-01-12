// TS recommend to use Interface over types

/**
 * Describe data structure in natural way
 * Describe objects
 *
 */
// interface Person {
//   name: string;
//   age: number;
// }

/**
 * Class types
 * */
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

/**
 * type aliases
 * to describe function type
 */
type PersonLoggerFn = (name: string, age: number) => string;

export default function play() {
  const name: string = "Yusuke";
  const age: number = 29;

  //   const person = {
  //     name: "Yoshi",
  //     age: 30,
  //   };

  const logPersonInfo: PersonLoggerFn = (
    personName: string,
    personAge: number
  ): string => {
    const info = `Name: ${personName}, Age: ${personAge}`;
    console.log(info);
    return info;
  };

  const logPersonInfo2 = (person: Person) => {
    const info = `Name: ${person.name}, Age: ${person.age}`;
    console.log(info);
    return info;
  };

  const person = new Person("Tanaka", 50);

  logPersonInfo(name, age);
  logPersonInfo2(person);
}
