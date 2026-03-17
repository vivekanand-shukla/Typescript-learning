function App() {
let myAge: number = 25;
let country: string = "India";
 let isEmployed: boolean = true;
 let oddNumbers: number[] = [1, 3, 5, 7, 9];
  let colors: string[] = ["red", "blue", "green"];
 let myData: null = null;
let book: {
    title: string,
    pages: number
  } = {
    title: "Atomic Habits",
    pages: 300
  };

let employee: {
    name: string,
    id: number,
    isActive: boolean
  } = {
    name: "Rahul",
    id: 101,
    isActive: true
  };


  let profile: {
    username: string,
    email: string,
    age: number,
    skills: string[],
    address: {
      city: string,
      zipCode: number
    },
    isVerified: boolean,
    notes: null
  } = {
    username: "vivek123",
    email: "vivek@email.com",
    age: 21,
    skills: ["JS", "React", "Node"],
    address: {
      city: "Mumbai",
      zipCode: 400001
    },
    isVerified: true,
    notes: null
  };

  
  let company: {
    name: string,
    location: {
      city: string,
      state: string,
      zipCode: number
    },
    employees: {
      name: string,
      id: number,
      isFullTime: boolean
    }[],
    establishedYear: number,
    isPublic: boolean,
    additionalInfo: null
  } = {
    name: "TechCorp",
    location: {
      city: "Mumbai",
      state: "Maharashtra",
      zipCode: 400001
    },
    employees: [
      { name: "Amit", id: 1, isFullTime: true },
      { name: "vivek", id: 2, isFullTime: false }
    ],
    establishedYear: 2010,
    isPublic: true,
    additionalInfo: null
  };

  return (
    <>
      TS HW 1.1 done
    </>
  );
}

export default App;