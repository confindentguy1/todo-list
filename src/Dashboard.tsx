import React, { useState } from 'react'
import { Task } from './types'
import DisplayTask from './DisplayTask'
import EditTask from './EditTask'
import DeleteTask from './DeleteTask'
import SearchTasks from './SearchTasks'


interface DashboardProps {
  todos: Task[];
  selectedTodo: number;
  setSelectedTodo: Function;
  deleteTodo: Function;
  changeTodo: Function;
}
const Dashboard = ({todos, selectedTodo, setSelectedTodo, changeTodo, deleteTodo} : DashboardProps) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [isDeleting, setIsDeleting] = useState<boolean>(false)

  const openSettings = (index: number) => {
    setIsEditing(true)
    setSelectedTodo(index)
  }

  const openDeletion = (index: number) => {
    setIsDeleting(true)
    setSelectedTodo(index)
  }

  return (
    <div>
      {todos.length ? (
        <>
          <DisplayTask
            todos={todos}
            openSettings={openSettings}
            openDeletion={openDeletion}
          />
          {isEditing && (
            <EditTask
              setIsEditing={setIsEditing}
              changeTodo={changeTodo}
            />
          )}
          {isDeleting && (
            <DeleteTask
              setIsDeleting={setIsDeleting}
              deleteTodo={deleteTodo}
            />
          )}
        </>
      ) : (
        <p>No todos yet</p>
      )}
    </div>
  )
}

export default Dashboard