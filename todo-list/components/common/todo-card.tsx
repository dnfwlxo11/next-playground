import TodoState from '@/utils/contants/todoState'
import SvgIcon from './SvgIcon'
import style from './css/todo.card.module.scss'

interface TodoCard {
  title: string,
  content: string,
  state: TodoState,
}

export default function TodoCard({ title, content, state }: TodoCard) {
  const card = {
    width: '18px',
    height: '18px',
    src: '',
    color: 'rgba(107, 114, 193, 1)',
  }

  return <div className={style.todo_card}>
    <div className={style.top}>
      <span className={style.title}>{title}</span>
      <span className={style.state}>
        {state === TodoState.DONE && <SvgIcon icon={{...card, src: '/icons/done.svg'}} />}
        {state === TodoState.PROGRESS && <SvgIcon icon={{...card, src: '/icons/progress.svg'}} />}
        {state === TodoState.PENDING && <SvgIcon icon={{...card, src: '/icons/pending.svg'}} />}
      </span>
    </div>
    <div className={style.divider}></div>
    <div className={style.content}>{content}</div>
  </div>
}