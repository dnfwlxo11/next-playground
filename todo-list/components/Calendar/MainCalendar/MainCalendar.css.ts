import { style } from '@vanilla-extract/css'

export const calendar = style({
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
  padding: '20px 40px',
  height: 'calc(100% - 70px)',
})

export const calendar_title = style({
  fontSize: 30,
  fontWeight: 700,
  marginBottom: 20,
  color: 'rgba(29, 31, 38, 1)',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const weekday_nav = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  textAlign: 'center',
  color: 'rgba(33, 35, 42, 1)',
})

export const weekday = style({
  color: 'rgba(174, 178, 190, 1)',
  fontWeight: 700,
  boxSizing: 'border-box',
  padding: '10px 0',

  ':first-child': {
    color: 'rgba(255, 150, 138, 1)'
  },

  ':last-child': {
    color: 'rgba(134, 166, 213, 1)'
  }
})

export const month_days = style({
})

export const month_weeks = style({
  display: 'flex',
  width: '100%',
})

export const month_day_wrap = style({
  width: 'calc(100% / 7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
  color: 'rgba(76, 78, 82, 1)',
  fontWeight: 700,
  height: 80,

  '@media': {
    'screen and (max-width: 768px)': {
      height: 40
    }
  },

  ':first-child': {
    color: 'rgba(255, 150, 138, 1)'
  },

  ':last-child': {
    color: 'rgba(134, 166, 213, 1)'
  },
})

export const month_day = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 60,
  height: 60,

  ':hover': {
    color: 'rgba(255, 255, 255, 1)',
    width: 60,
    height: 60,
    aspectRatio: '1 / 1',
    background: 'rgba(104, 120, 206, 1)',
    borderRadius: '50%',
  },

  '@media': {
    'screen and (max-width: 768px)': {
      width: 30,
      height: 30,

      ':hover': {
        color: 'rgba(255, 255, 255, 1)',
        width: 30,
        height: 30,
        aspectRatio: '1 / 1',
        background: 'rgba(104, 120, 206, 1)'
      },
    }
  },
})

export const active_month_day = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'rgba(255, 255, 255, 1)',
  width: 60,
  height: 60,
  aspectRatio: '1 / 1',
  background: 'rgba(104, 120, 206, 1)',
  borderRadius: '50%',

  '@media': {
    'screen and (max-width: 768px)': {
      width: 30,
      height: 30,

      ':hover': {
        color: 'rgba(255, 255, 255, 1)',
        width: 30,
        height: 30,
        aspectRatio: '1 / 1',
        background: 'rgba(104, 120, 206, 1)'
      },
    }
  },
})