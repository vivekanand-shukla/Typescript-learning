import React from 'react'

const App = () => {
type hi ={
  ji : string
}

  interface Persion {
    name : string ,
    age : number
  }
 const perion : Persion ={
   name: "john",
   age : 55
 }

 interface car {
make : string ,
model : string ,
year: number,
iselectric : boolean,
features : string[]
discription?: string
 }

 const mycar : car = {
   make : "tesla",

model : "model 3" ,
year: 2018,
iselectric : true,
features : ["autopiolet" ,"seat heating"]

 }


 function displayPersion(persion : Persion): void{
  console.log(`name : ${persion.name}, age : ${persion.age}`)
 }


 interface Mathfunction {
 (a:number ,b : number): number
 }
 const add : Mathfunction = (a,b)=>{
   return a+b
  }
  
  console.log(add(5,5))
  interface Doublefunction{
    (a:number ): number
  }
  const double : Doublefunction = (a)=>{
    return a*2
  }
  console.log(double(5))
  return (
    <div>TS2.1_CW_Done</div>
  )
}

export default App