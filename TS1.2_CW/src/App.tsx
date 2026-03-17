
function App() {
 let id :string | number | boolean;
 id = 1
 id = "john"
 id = true

 let numberStrtingArray : (number | string | boolean  )[] = [1, "two", "three" , true]

 let mixedArray  : (number| boolean | string)[]=[1,2, false, "three" , "five"]

 type typeA ={
  propA: number
 }
 const typeA ={
  propA: "number"
 }

 type typeB ={
  propB: string
 }

 const objA : typeA ={
  propA : 25
 }

 const objB : typeB = {
propB : "hi"
 }

 type typeC = typeA & {
  propD :string 
 }

 type persion = {
  name : string ,
  age : number
 }
 type student = persion & {
  studentId : string
 }
 type teacher=  persion & {
    subject : string 
 }
 let num = 10;
let aa  : typeC & typeB ={
    propA : 25,
propB : "hi",
propD:"hi"
} //  is this obj right ==aa
  return (
    <>
     
    </>
  )
}

export default App
