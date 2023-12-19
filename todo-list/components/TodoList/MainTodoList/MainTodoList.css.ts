import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const main_todo = style({
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '10px 40px',
})

export const main_todo_title = style({
  color: 'rgba(161, 163, 178, 1)',
  fontSize: 14,
  fontWeight: 700,
})

export const more_btn = style({
  color: 'rgba(161, 163, 178, 1)',
  marginLeft: 'auto',
  fontSize: 14,
  fontWeight: 700,
})

export const todo_list = style({
  boxSizing: 'border-box',
  padding: '20px 40px',
  paddingTop: 0,
  display: 'flex',
  flexDirection: 'column',
})

export const todo_card = style({
  display: 'flex',
  boxSizing: 'border-box',
  padding: '15px 0',

  ':first-child': {
    borderTop: '0.5px solid rgba(221, 223, 225, 1)',
  },
})

export const todo_card_date = style({
  width: 60,
  textAlign: 'right',
  fontSize: 14,
  color: 'rgba(98, 99, 103, 1)',
  fontWeight: 600,
})

export const todo_card_priority = style({
  boxSizing: 'border-box',
  padding: '0 15px',
  paddingTop: 3,
})
export const todo_card_priority_circle = recipe({
  base: {
    width: 8,
    height: 8,
    aspectRatio: '1 / 1',
    borderRadius: '50%',
  },
  variants: {
    color: {
      highest: { background: 'rgba(219, 88, 78, 1)' },
      high: { background: 'rgba(225, 142, 71, 1)' },
      normal: { background: 'rgba(237, 186, 89, 1)' },
      low: { background: 'rgba(121, 196, 148, 1)' },
      lowest: { background: 'rgba(37, 94, 225, 1)' },
    },
  },
  defaultVariants: {
    color: 'normal',
  },
})

export const todo_card_main = style({
  flex: 1,
})

export const todo_card_title = style({
  fontSize: 16,
  fontWeight: 700,
  color: 'rgba(38, 40, 46, 1)',
  marginBottom: 10,
})

export const todo_card_content = style({
  fontSize: 14,
  color: 'rgba(180, 183, 193, 1)',
  fontWeight: 600,
})