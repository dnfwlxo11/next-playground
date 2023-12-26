import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const day_todos = style({
  boxSizing: 'border-box',
  padding: 20,
})

export const day_todos_title = style({
  fontSize: 30,
  fontWeight: 700,
  marginBottom: 20,
  color: 'rgba(29, 31, 38, 1)',
  textAlign: 'left',
})

export const day_todos_title_sub = style({
  fontSize: 20,
  fontWeight: 700,
  color: 'rgba(210, 210, 218, 1)',
  marginLeft: 10,
})

export const day_todo_list = style({
  
})

export const day_todo = style({
  display: 'flex',
  boxSizing: 'border-box',
  padding: '20px 0',
})

export const day_check = style({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: 40,
})

export const day_check_circle = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    aspectRatio: '1 / 1',
    borderRadius: '50%',
    border: '2px solid rgba(206, 206, 216, 1)',
    background: 'rgba(255, 255, 255, 1)',
  },
  variants: {
    color: {
      DONE: { 
        border: '2px solid rgba(122, 217, 150, 1)',
        background: 'rgba(122, 217, 150, 1)',
      },
      PROGRESS: { 
        border: '2px solid rgba(102, 123, 206, 1)',
        background: 'rgba(102, 123, 206, 1)',
      },
      PENDING: { 
        // border: '2px solid rgba(206, 206, 216, 1)',
        // background: 'rgba(206, 206, 216, 1)',
      }
    }
  }
  
})

export const day_todo_content = style({
  flex: 1,
})

export const day_todo_title = style({
  fontWeight: 600,
  fontSize: 18,
  color: 'rgba(43, 45, 52, 1)',
})

export const day_todo_sub = style({
  fontWeight: 500,
  fontSize: 16,
  color: 'rgba(165, 168, 181, 1)'
})

export const day_todo_priority = recipe({
  base: {
    marginLeft: 'auto',
    width: 20,
    height: 4,
    borderRadius: 8,
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
})

export const day_todo_add = style({
  display: 'flex',
  boxSizing: 'border-box',
  padding: '20px 0',
})

export const day_todo_add_btn = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: 'auto',
  width: 40,
  height: 40,
  borderRadius: '50%',
  background: 'rgba(102, 123, 206)',
})