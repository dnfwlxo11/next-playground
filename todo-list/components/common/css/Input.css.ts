import { style } from "@vanilla-extract/css";

export const input = style({
  width: '100%',
  border: 'none',
  outline: 'none',
  boxSizing: 'border-box',
  padding: '7px 0',
  color: 'rgba(29, 31, 37, 1)',
  fontSize: 14,
  fontWeight: 600,

  ':focus': {
    borderBottom: '1px solid rgba(29, 31, 44, 1)',
  }
})