import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

export const modal = style({
  display: "flex",
  justifyContent: 'center',
  alignItems: "center",
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
  // backdropFilter: 'blur(1px)',
  background: 'rgba(241, 243, 245, 0.3)',
})

export const modal_content = style({
  width: '60%',
  background: 'rgba(255, 255, 255, 1)',
  boxSizing: 'border-box',
  padding: 20,
  boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
})

export const modal_body = style({
  width: '100%',
  wordBreak: 'break-all',
})

export const modal_footer = style({
  boxSizing: 'border-box',
  paddingTop: 10,
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  gap: 10,
  justifyContent: 'space-between',
})

export const modal_body_title = style({
  color: 'rgba(174, 177, 199, 1)',
  fontSize: 14,
  fontWeight: 600,
})

export const modal_body_content = style({
  color: 'rgba(29, 31, 37, 1)',
  fontSize: 16,
  fontWeight: 600,
})

export const modal_body_dates = style({
  width: '100%',
  display: 'flex',
  gap: 10,
})

export const modal_body_date = style({
  width: '100%',
  marginBottom: 10,
})

export const modal_body_item = style({
  marginBottom: 10,
})

export const modal_priorities = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  margin: '10px 0',
  marginBottom: 20,
})

export const modal_priority_circle = recipe({
  base: {
    width: 24,
    height: 24,
    aspectRatio: '1 / 1',
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
    active: {
      border: '2px solid rgba(29, 31, 37, 1)',
    },
  },
  defaultVariants: {
    color: 'normal',
  },
})

export const modal_states = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 10,
  margin: '10px 0',
})

export const modal_state = recipe({
  base: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    border: '2px solid rgba(206, 206, 216, 1)',
    background: 'rgba(255, 255, 255, 1)',
    fontSize: 12,
    fontWeight: 700,
    boxSizing: 'border-box',
    padding: 5,
  },
  variants: {
    color: {
      DONE: { 
        border: '2px solid rgba(122, 217, 150, 1)',
        background: 'rgba(122, 217, 150, 1)',
        color: 'rgba(255, 255, 255, 1)',
      },
      PROGRESS: { 
        border: '2px solid rgba(102, 123, 206, 1)',
        background: 'rgba(102, 123, 206, 1)',
        color: 'rgba(255, 255, 255, 1)',
      },
      PENDING: { 
        // border: '2px solid rgba(206, 206, 216, 1)',
        // background: 'rgba(206, 206, 216, 1)',
      }
    },
    active: {
      border: '2px solid rgba(29, 31, 37, 1)',
      background: 'rgba(0,0,0,1)'
    },
  },
})