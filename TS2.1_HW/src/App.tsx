import React from 'react'

const App = () => {

  // 1
  interface Book {
    title: string,
    author: string
  }

  const myBook: Book = {
    title: "Atomic Habits",
    author: "me"
  }

  // 2
  function printBookInfo(book: Book): void {
    console.log(`Title: ${book.title}, Author: ${book.author}`);
  }
  printBookInfo(myBook);


  //3
  interface User {
    username: string,
    email: string
  }

  const currentUser: User = {
    username: "vivek123",
    email: "vivek@gmail.com"
  }

  //4
  function printUser(user: User): void {
    console.log(`Username: ${user.username}, Email: ${user.email}`);
  }
  printUser(currentUser);


  //  5
  interface Movie {
    title: string,
    director: string,
    releaseYear: number,
    genres: string[]
  }

  const myMovie: Movie = {
    title: "Inception",
    director: "me",
    releaseYear: 2010,
    genres: ["Sci-fi", "thriller"]
  }


  //    6
  interface Laptop {
    brand: string,
    model: string,
    price: number,
    specs: {
      ram: string,
      storage: string,
      processor: string
    }
  }

  const myLaptop: Laptop = {
    brand: "dell",
    model: "i5",
    price: 120000,
    specs: {
      ram: "16GB",
      storage: "512GB ",
      processor: "i7"
    }
  }


  //7
  interface ConcatFunction {
    (a: string, b: string): string
  }

  const concatStrings: ConcatFunction = (a, b) => {
    return a + b;
  }
  console.log(concatStrings("Hello ", "World"));


  //8
  interface BooleanFunction {
    (num: number): boolean
  }

  const isPositive: BooleanFunction = (num) => {
    return num > 0;
  }
  console.log(isPositive(5));


  //9
  interface SubtractFunction {
    (a: number, b: number): number
  }

  const subtract: SubtractFunction = (a, b) => {
    return a - b;
  }
  console.log(subtract(10, 5));


  //10
  interface StringCheckFunction {
    (str: string): boolean
  }

  const isLongString: StringCheckFunction = (str) => {
    return str.length > 10;
  }
  console.log(isLongString("HelloWorld123"));


  return (
    <div>TS2.1_CW_Done</div>
  )
}

export default App