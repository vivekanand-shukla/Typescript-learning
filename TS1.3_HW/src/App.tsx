import React from 'react'

const App = () => {

  // 1
  function sayGoodbye(name: string): void {
    console.log("Goodbye, " + name + "!");
  }
  sayGoodbye("Vivek");


  // 2
  function multiply(x: number, y: number): number {
    return x * y;
  }
  console.log(multiply(5, 4));


  // 3
  function isEven(num: number): boolean {
    return num % 2 === 0;
  }
  console.log(isEven(4));


  // 4
  function logValue(value: string | number | boolean): void {
    console.log(value);
  }
  logValue("hello");
  logValue(100);
  logValue(true);


  // 5
  function describePerson(person: { name: string, age: number }): string {
    return `${person.name} is ${person.age} years old.`;
  }
  console.log(describePerson({ name: "Alice", age: 30 }));


  // 6
  type User =| { role: "admin" }| { role: "user" }| { role: "guest" };

  function getUserRole(user: User): string {
    if (user.role === "admin") {
      return "Admin Access";
    } else if (user.role === "user") {
      return "User Access";
    } else {
      return "Guest Access";
    }
  }
  console.log(getUserRole({ role: "admin" }));


  // 7
  type Employee = {
    name: string,
    department: string
  }

  type Manager = Employee & {
    level: string
  }

  function promoteEmployeeToManager(emp: Employee): Manager {
    return { ...emp, level: "Senior" };
  }
  console.log(promoteEmployeeToManager({ name: "Rahul", department: "IT" }));


  // 8
  function squareNumbers(nums: number[]): number[] {
    return nums.map(num => num * num);
  }
  console.log(squareNumbers([2, 3, 4]));


  return (
    <div>TS1.3_HW_Done</div>
  )
}

export default App