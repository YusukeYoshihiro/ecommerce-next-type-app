import { log } from "console";

interface Person {
  name: string;
  age: number;
}

interface BusinessPerson extends Person {
  salary: number;
}
interface AcademicPerson extends Person {
  publications: string[];
}

type Car = {
  name: string;
};

type RaceCar = {
  speed: number;
} & Car & { mileage: number };

export default function extendingInterface() {
  const person: Person = {
    name: "Yusuke",
    age: 29,
  };

  const Person1: BusinessPerson = {
    name: "Yusuke",
    age: 29,
    salary: 1000,
  };

  const Person2: AcademicPerson = {
    name: "Yusuke",
    age: 29,
    publications: ["1", "2"],
  };

  const car: RaceCar = {
    name: "Yusuke",
    speed: 100,
    mileage: 200,
  };

  function logPerson(person: Person) {}

  logPerson(Person1);

  function logCar(car: Car) {}

  logCar(car);
}
