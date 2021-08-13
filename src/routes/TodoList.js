import React, { useState } from 'react'

function Todo() {
  const [todos, setTodo] = useState([])

  return (
    <div>
      <h1>TODO List</h1>
      <ul>
      </ul>
    </div>
  )
}

export default Todo
