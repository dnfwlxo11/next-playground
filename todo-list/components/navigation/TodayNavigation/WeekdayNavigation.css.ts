import { style } from '@vanilla-extract/css'

export const weekday_navigation = style({
  display: 'flex',
  alignItems: 'center',
  boxSizing: 'border-box',
  padding: '20px 40px',
})

export const plus_icon = style ({
  marginLeft: 'auto',
  
  ':hover': {
    cursor: 'pointer'
  }
})

export const left_chevron_icon = style ({
  marginRight: 'auto',

  ':hover': {
    cursor: 'pointer'
  }
})