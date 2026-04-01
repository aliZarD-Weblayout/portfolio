const initialValue = 0;
const myArray: MyArray<number> = [1, 2, 3];

const result = myArray.reduce((accumulator, value) => accumulator + value, initialValue);
console.log(result); // Output: 6


interface MyArray<T> {
  [N: number]: T;
  reduce<U>(callback: (accumulator: U, value: T, index: number, array: MyArray<T>) => U, initialValue: U): U;
}
