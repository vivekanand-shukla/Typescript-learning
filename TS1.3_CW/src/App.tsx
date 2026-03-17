import React from 'react'


const App = () => {
  function greet( name:string ,): void {
    console.log("hello " + name)
  }

  greet("name")
  function addNumbers(a : number , b: number) :void{
    const sum = a+b
    console.log(sum)

  }
  addNumbers(5,5)
  function calculateVolume(length : number , width : number ,height : number) : number {
    return length *width * height

  }
calculateVolume(5,5,5)
function printInfo(input :string | number):void{
  console.log(input)

}
printInfo(100)
printInfo("this is an info")

type circle={
  kind:"circle",
  rad : number
}
type Rectangle ={
  kind : "rectangle",
  length : number ,
  width : number 
}
type shape =circle  | Rectangle
function getArea( shape : shape): number {
  if(shape.kind === "circle"){
    return Math.PI * shape.rad
  }else{
    return shape.length * shape.width
  }
   
}
getArea({
  kind:"circle",
  rad : 5
})

console.log(getArea({ kind : "rectangle",
  length : 5 ,
  width : 5 }))

  type  Persion ={
    name: string ,
    age: number
  } 
  type Student = Persion & {
     studnetId : string 
  }

  function convertPersionToStudnet ( perison : Persion ):Student{
    return { ...perison , studnetId : "12" }
  }
convertPersionToStudnet({name:"vivek", age:23 , })

function doubleNumber(number : number[]  ) : number[]{
   return number.map(number =>number*2 )
}
doubleNumber([2,3,4])


  return (
    <div>App</div>
  )
}

export default App