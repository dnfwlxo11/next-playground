import SvgIcon from './svg-icon'


export default function FloatingIcon({ content, children }: { content: string }) {
  return <div>
    {children?.left && <children.left />}
    {content && <span>{content}</span>}
    {children?.right && <children.right />}
  </div>
}