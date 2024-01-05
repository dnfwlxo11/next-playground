import { assignInlineVars } from '@vanilla-extract/dynamic'
import {
  button,
} from './css/Button.css'
import { MouseEventHandler } from 'react'

export default function Button({ type='primary', title="Button", onClick=()=>{} }: { type: string, title: string, onClick?: MouseEventHandler<HTMLButtonElement> }) {
  return <button className={button(assignInlineVars({ type }))} onClick={onClick}>
    {title}
  </button>
}