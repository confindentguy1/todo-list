import React, {useState} from 'react'
import { Task } from './types'
import Input from './components/FormField'

interface SearchTasksProps{
  todos: Task[]
  setFilteredTodos: Function
}

const SearchTasks = ({todos, setFilteredTodos} : SearchTasksProps) => {
  const [search, setSearch] = useState<string>('')
  const filterTodos = () => {
    if (search) {
      const searchRegex = new RegExp(`.*${search}.*`, 'gm')
      const filteredTodos = todos.filter(todo => todo.title.match(searchRegex))
      setFilteredTodos(filterTodos)
    }
  }
  return (
    <div>
      <Input
        title='Search'
        value={search}
        setValue={setSearch}
        type='text'
        onChange={filterTodos}
      />
    </div>
  )
}

export default SearchTasks