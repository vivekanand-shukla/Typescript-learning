import  { useState } from 'react'
import Header from './component/Header'
import TodoList from './component/TodoList'

type Todo = {
  id: number
  text: string
  completed: boolean
}

const App = () => {

  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn TypeScript", completed: false },
    { id: 2, text: "Build a React app", completed: false },
    { id: 3, text: "Drink water", completed: true }
  ])

  const handleToggle = (id: number) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
    setTodos(updatedTodos)
  }

  return (
    <div>
      <Header title="My To-Do List" />
      <TodoList todos={todos} onToggle={handleToggle} />
    </div>
  )
}

export default App