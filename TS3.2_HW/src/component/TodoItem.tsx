import React from 'react'

type Todo = {
  id: number
  text: string
  completed: boolean
}

type TodoItemProps = {
  todo: Todo
  onToggle: (id: number) => void
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {todo.text} {todo.completed && "- Done"}
    </li>
  )
}

export default TodoItem