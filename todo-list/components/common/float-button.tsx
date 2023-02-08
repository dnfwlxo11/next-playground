interface float {
  top?: number,
  left?: number,
}

export default function FloatButton({ top, left }: float) {
  const buttonStyle = {
    "position": "absolute" as const,
    "top": top || 0,
    "left": left || 0,
  }

  return <div style={buttonStyle}>
    test
  </div>
}