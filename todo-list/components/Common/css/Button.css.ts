import { recipe } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    width: '100%',
    border: 'none',
    display: 'block',
    color: 'rgba(255, 255, 255, 1)',
    boxSizing: 'border-box',
    padding: '7px 10px',
    borderRadius: 8,
  },
  variants: {
    type: {
      primary: { background: 'rgba(49, 108, 244, 1)', },
      secondary: { background: 'rgba(110, 117, 124, 1)', },
      success: { background: 'rgba(64, 133, 88, 1)', },
      danger: { background: 'rgba(203, 68, 74, 1)', },
      warning: { background: 'rgba(246, 195, 68, 1)', },
    },
  }
})