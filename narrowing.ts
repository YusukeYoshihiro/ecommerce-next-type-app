export default function narrowing() {
  const names: string[] = ["Taro", "Jiro"];
  const numbers: Array<number> = [1, 2, 3];

  const random = Math.random() > 0.5 ? "Hello" : [1, 2, 3];

  if (typeof random === "string") {
    const upper = random.toUpperCase();
    console.log("upper", upper);
  } else {
    console.log("number[]", random);
  }

  console.log('number[] | "Hello"', random);
}
