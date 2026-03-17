

function App() {
 let myNumber :number =42;

 let myName :string = "Akansha";

  let isStudent : boolean= false;
  let myData : null = null;
  let numbers : number[] = [1,2,3,4,5]
  let fruits : string[] = ["apple", "orange", "kivi"]
fruits = ["apple", "orange"]
  let persion : {
    name : string,
    age : number
  } ={
    name:"alice", age:25
  }

  let car:{
    make :string,
    year : number
  } = {
    make :"Hundai",
    year : 2018
  }

  let student :{
    name:string  ,age : number,
    isEnrolled :boolean

  } ={
    name : "john",
    age : 20,
    isEnrolled : true
  }

  let persionDetail:{
    name : string,age: number ,hobbies : string[], address: {
      street: string,city: string
    },
    scores:number[],
    extraInfo:null,
    isStudent :boolean,


  } = {
    name : "bob", age : 18, hobbies : ["singing", "cooking", ] , address: {
      street : "123 park avenue" ,city : "tokyo"
    }
    , isStudent: true,scores :[98,87,88,90],
    extraInfo : null,
  }
  return (
    <>
      

   hhhhhhh
    </>
  )
}

export default App
