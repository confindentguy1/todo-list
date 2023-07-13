import React from 'react'
import {AiOutlineArrowDown} from 'react-icons/ai'
import {FaTimes} from 'react-icons/fa'
import { useState } from 'react'
import { PriorityOptions } from '../types'

interface DropdownProps {
  option: PriorityOptions;
  setOption: Function;
  options: PriorityOptions[];
}
const Dropdown = ({option, setOption, options} : DropdownProps) => {
  const [isOpened, setIsOpened] = useState(false)

  const toggleDropdown = () => {
    setIsOpened(() => !isOpened)
  }
  const selectItem = (item: PriorityOptions) => {
    setOption(item)
    toggleDropdown()
  }
  
  return (
    <div className='dropdown'>
      {option ? (
        <p>{option}</p>
      ): (
        <p>Select item from list...</p>
      )}
      <button onClick={toggleDropdown}>
        {isOpened ? (
          <FaTimes/>
        ): (
          <AiOutlineArrowDown/>
        )}
      </button>
      {isOpened && (
        <div className='dropdown-options'>
          {options.map((item) => (
            <div className='dropdown-option' onClick={() => selectItem(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown