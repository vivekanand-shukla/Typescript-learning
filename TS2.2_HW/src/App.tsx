import React from 'react'

const App = () => {

  
  
  //1
  function echo<T>(value: T): T {
    return value;
  }
  console.log(echo<number>(10));
  console.log(echo<string>("hello"));
  console.log(echo(true));
//2
  function getLength<T>(arr: T[]): number {
    return arr.length;
  }
  console.log(getLength([1, 2, 3]));
  console.log(getLength([ "fi", "hi"]));
  console.log(getLength([1, "fi", "hi"]));
//3
  function returnFirst<T>(arr: T[]): T {
    return arr[0];
  }
  console.log(returnFirst(["a", "b", "c"]));
//4
  function wrap<T>(value: T): T[] {
    return [value];
  }
  console.log(wrap(5));

//5
  function logAndReturn<T>(value: T): T {
    console.log(value);
    return value;
  }
  logAndReturn("test");
//6
  function isEmpty<T>(arr: T[]): boolean {
    return arr.length === 0;
  }
  console.log(isEmpty([]));
//7
  function containsItem<T>(items: T[], item: T): boolean {
    return items.includes(item);
  }
  console.log(containsItem([1, 2, 3], 2));
  //8
  function countOccurrences<T>(items: T[], item: T): number {
    return items.filter(i => i === item).length;
  }
  console.log(countOccurrences([1, 2, 2, 3, 2], 2));


  return (
    <div>TS2.2_HW</div>
  )
}

export default App