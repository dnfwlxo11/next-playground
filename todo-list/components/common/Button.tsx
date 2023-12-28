import { assignInlineVars } from '@vanilla-extract/dynamic'
import {
  button,
} from './css/Button.css'

export default function Button({ type='primary', title="Button" }) {
  return <button className={button(assignInlineVars({ type }))}>
    {title}
  </button>
}