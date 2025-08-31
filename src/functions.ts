import type { GreetWithNameParams } from "./types";

export function greet() {
  console.log("Hello, you!");
}

export function greetWithName({ name }: GreetWithNameParams) {
  console.log(`Hello, ${name}!`);
}
