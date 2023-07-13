import React, {ChangeEvent, useState} from 'react'

interface CheckboxProps {
  title: string;
  value: boolean;
  setValue: Function;
}
const Checkbox = ({title, value, setValue} : CheckboxProps) => {
  const [field, setField] = useState(value)
  return (
    <>
      <p>{title}:</p>
      <input type="checkbox" checked={field} onChange={(e) => setField(e.target.checked)}/>
      <button onClick={setValue(field)}>
        Change
      </button>
    </>
  )
}

export default Checkbox