import React from 'react'
import { Task } from './types'

interface DisplayTaskProps{
  todos: Task[];
  openSettings: Function;
  openDeletion: Function;
}
const DisplayTask = ({todos, openSettings, openDeletion} : DisplayTaskProps) => {
  return (
    <div className='task-display'>
      {todos.map((todo, index) => (
        <div key={index}>
          <p>{todo.title}</p>
          <button onClick={() => openSettings(index)}>Settings</button>
          <button onClick={() => openDeletion(index)}>Delete</button>
        </div>
      ))}
    </div>
  )
}

export default DisplayTask