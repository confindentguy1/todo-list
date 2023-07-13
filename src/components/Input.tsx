import React, {ChangeEvent, KeyboardEvent} from 'react'

interface InputProps {
  type: string,
  field: any,
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleEnter: (event: KeyboardEvent<HTMLInputElement>) => void

}
const Input = ({type, field, handleChange, handleEnter} : InputProps) => {
  return (
    <input
        type={type}
        value={field}
        onChange={handleChange}
        onKeyUp={handleEnter}
      />
  )
}

export default Input