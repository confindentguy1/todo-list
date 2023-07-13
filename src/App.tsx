import React, {KeyboardEvent, ChangeEvent} from 'react'
import { useState } from 'react'
import Dashboard from './Dashboard'
import { Task } from './types'
import SearchTasks from './SearchTasks'
const App = () => {
  const [todoTitle, setTodoTitle] = useState<string>('')
  const [todos, setTodos] = useState<Task[]>([])
  const [filteredTodos, setFilteredTodos] = useState<Task[]>([])
  const [selectedTodo, setSelectedTodo] = useState<number>(0)

  const handleEnter = (e : KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo()
    }
  }
  
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const addTodo = () => {
    if (todoTitle === '') {
      alert('Every task should have its title')
      return
    }
    const todo : Task = {
      title: todoTitle,
      completed: false
    }
    setTodos([...todos, todo])
    setTodoTitle('')
  }

  const changeTodo = (todo : Task, index: number) => {
    setTodos(prevList =>
      prevList.map((item, i) => (i === index ? todo : item)))
  }
  
  const deleteTodo = (setIsDeleting : Function) => {
    const newTodos = [...todos.slice(0, selectedTodo), ...todos.slice(selectedTodo + 1)]
    setTodos(newTodos)
    setIsDeleting(false)
  }

  return (
    <div>
      <h1>Todo-list app</h1>
      <div className='task-add'>
        <input
          type="text"
          value={todoTitle}
          onChange={handleChange}
          onKeyUp={handleEnter}
        />
        <button onClick={addTodo}>
          Add task
        </button>
      
      </div>
      <Dashboard
        todos={todos}
        selectedTodo={selectedTodo}
        setSelectedTodo={setSelectedTodo}
        changeTodo={changeTodo}
        deleteTodo={deleteTodo}
      />
      <SearchTasks
        todos={todos}
        setFilteredTodos={setFilteredTodos}
      />
    </div>
  )
}

export default App