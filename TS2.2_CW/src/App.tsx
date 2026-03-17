import React from 'react'

const App = () => {
  function identiy<T>(value :T):T{
    return value
  }
  const numResult = identiy<number>(10)
  const stringRes = identiy<string>("hello")

  function finditem<T>(items: T[] , item:T ) : number {
    return items.indexOf(item)
  }

  finditem([1,2,3,4] ,2)
  finditem([1,2,3,4] ,4)
  return (
    <div>RS2.2_CW</div>
  )
}

export default App