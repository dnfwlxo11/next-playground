import { style } from "@vanilla-extract/css";

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
  width: '75%',
  background: 'rgba(255, 255, 255, 1)',
  boxSizing: 'border-box',
  padding: 20,
  boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
})

export const modal_body = style({
  wordBreak: 'break-all',
})

export const modal_footer = style({
  display: 'flex',
  width: '100%',

  selectors: {
    'button &': {
      width: '50%',
    },
  }
})