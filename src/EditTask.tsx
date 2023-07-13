import React, { useState } from 'react'
import Input from './components/FormField'
import Dropdown from './components/Dropdown'
import Modal from './components/Modal'
import Checkbox from './components/Checkbox'
import { PriorityOptions, Task } from './types'

interface EditTaskProps {
  setIsEditing: Function;
  changeTodo: Function
}

const EditTask = ({setIsEditing, changeTodo} : EditTaskProps) => {
  const [todoTitle, setTodoTitle] = useState<string>('')
  const [isCompleted, setIsCompleted] = useState<boolean>(false)
  const [priorityOptions, setPriorityOptions] = useState<PriorityOptions[]>([
    'High', 'Medium', 'Low'
  ])
  const [selectedPriority, setSelectedPriority] = useState<PriorityOptions>('')
  const [selectedDate, setSelectedDate] = useState('')

  const closeSettings = () => {
    changeTodo()
    setIsEditing(false)
  }

  return (
    <Modal onClose={closeSettings}>
      <Input
        title='Title'
        value={todoTitle}
        setValue={setTodoTitle}
        type='text'
      />
      <Checkbox
        title='Completed'
        value={isCompleted}
        setValue={setIsCompleted}
      />
      <Input
        title='Date'
        value={selectedDate}
        setValue={setSelectedDate}
        type='date'
      />
      <Dropdown
        option={selectedPriority}
        setOption={setSelectedPriority}
        options={priorityOptions}
      />
  </Modal>
  )
}

export default EditTask