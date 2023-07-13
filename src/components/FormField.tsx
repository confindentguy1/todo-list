import React, {KeyboardEvent, ChangeEvent} from 'react'
import { useState } from 'react'
import Input from './Input'

interface FormFieldProps {
  title: string,
  value: any,
  setValue: any,
  type: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

const FormField = ({title, value, setValue, type, onChange} : FormFieldProps) => {
  const [isChanging, setIsChanging] = useState(false)
  const [field, setField] = useState(value)

  const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      stopChanging()
    }
  }

  const handleChange = onChange || function(e: ChangeEvent<HTMLInputElement>){
    setField(e.target.value)
  }

  const startChanging = () => {
    setIsChanging(true)
  }

  const stopChanging = () => {
    setIsChanging(false)
    setValue(field)
  }

  return (
    <div className={value}>
      <p>{title}:</p>
      {isChanging ? (
        <Input
          type='text'
          field={value}
          handleChange={handleChange}
          handleEnter={handleEnter}
        />
      ) : (
        <p>{value}</p>
      )}
      {isChanging ? (
        <button onClick={stopChanging}>
          Apply Changes
        </button>
      ) : (
        <button onClick={startChanging}>
          Change
        </button>
      )}
    </div>
  )
}

export default FormField