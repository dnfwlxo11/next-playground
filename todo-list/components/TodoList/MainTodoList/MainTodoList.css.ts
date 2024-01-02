import { globalStyle, style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const main_todo = style({
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '10px 0',
  // height: 50,
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
  flex: 1,
  boxSizing: 'border-box',
  padding: '20px 0',
  paddingTop: 0,
  overflowY: 'auto',

  '::-webkit-scrollbar': {
    display: 'none',
  }
})

export const todo_card = style({
  display: 'flex',
  boxSizing: 'border-box',
  padding: '15px 0',
  borderBottom: '0.5px solid rgba(221, 223, 225, 1)',

  ':first-child': {
    borderTop: '0.5px solid rgba(221, 223, 225, 1)',
  },
})

export const todo_add = style({
  textAlign: 'center',
  boxSizing: 'border-box',
  padding: '15px 0',
  borderTop: '0.5px solid rgba(221, 223, 225, 1)',
  fontSize: 14,
  fontWeight: 700,
  color: 'rgba(29, 31, 38, 1)',
})

export const todo_add_icon = style({
  textAlign: 'center',
  margin: '10px',
})

export const todo_card_date = style({
  minWidth: 60,
  textAlign: 'right',
  fontSize: 14,
  color: 'rgba(98, 99, 103, 1)',
  fontWeight: 600,
})

export const todo_card_priority = style({
  boxSizing: 'border-box',
  minWidth: 40,
  paddingTop: 3,
  display: 'flex',
  justifyContent: 'center',
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
  width: 'calc(100% - (40px + 60px))',
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
  wordWrap: 'break-word',
})