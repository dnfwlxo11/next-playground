import { ChangeEvent, useState } from 'react'
import { input } from './css/Input.css'

export default function Input({ 
  type='text', 
  value='',
  onChange,
}: { 
  type: string, 
  value: string|number|string[]|undefined,
  onChange?: (evt: ChangeEvent<HTMLInputElement>) => void,
}) {
  const [inputValue, setInputValue] = useState<string|number|string[]>(value)

  const changeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    setInputValue(evt.target.value)
    onChange && onChange(evt)
  }

  return <input className={input} type={type} value={value} onChange={changeHandler} />
}