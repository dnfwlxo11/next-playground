import { style } from '@vanilla-extract/css'

export const calendar = style({
  boxSizing: 'border-box',
  padding: '20px 40px',
})

export const calendar_title = style([
  {
    fontSize: 40,
    fontWeight: 700
  }
])

export const weekday_nav = style({
  display: 'flex',
  justifyContent: 'space-between'
})

export const month_days = style({
  display: 'flex',
  flexWrap: 'wrap',
})

export const month_day = style({
  justifyContent: 'space-between',
})