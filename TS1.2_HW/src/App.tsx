import React from 'react'

const App = () => {

//srt 1
 // 1
  let id: string | number;
  id = 101;
  id = "A101";
// 2
  let status: "active" | "inactive" | "pending";
  status = "active";

 
 
  // 3
  let input: boolean | null;
  input = true;
  input = null;
// 4
  let numberOrStringArray: (number | string)[] = [1, "two", 3, "four"];


  //set2

  // 1
  type Person = {
    name: string,
    age: number
  }

  // 2
  type Student = Person & {
    studentId: string
  }

  // 3
  type Teacher = Person & {
    subject: string
  }

  // 4
  type Employee = {
    company: string
  }

  type WorkingStudent = Student & Employee;

  // 5
  type Address = {
    city: string,
    zipCode: number
  }

  let fullProfile: Teacher & Address = {
    name: "Rahul",
    age: 30,
    subject: "Math",
    city: "Mumbai",
    zipCode: 400001
  }


  //set 3

  // 1
  type Vehicle = {
    make: string,
    year: number
  }

  // 2
  type Car = Vehicle & {
    seats: number
  }

  // 3
  type Bike = Vehicle & {
    type: string
  }

  // 4
  type Battery = {
    capacity: number
  }

  type ElectricCar = Car & Battery;

  // 5
  type Registration = {
    regNumber: string,
    ownerName: string
  }

  let bikeDetails: Bike & Registration = {
    make: "Yamaha",
    year: 2022,
    type: "Sports",
    regNumber: "MH12AB1234",
    ownerName: "Vivek"
  }

  return (
    <div>TS1.2_HW2_done</div>
  )
}

export default App