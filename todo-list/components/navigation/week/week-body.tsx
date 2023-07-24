import TodoCard from '@/components/common/todo-card'
import TodoState from '@/utils/contants/todoState'
import { extractToDate } from '@/utils/function/date'
import style from './week.body.module.scss'
import { useEffect, useState } from 'react'

type todoObj = {
  title: string,
  createdAt: number,
  content: string,
}

type newTodoObj = {
  title: string,
  createdAt: string,
  content: string,
}

export default function WeekBody({ content=[] }: { content: Array<todoObj> }) {
  const [todos, setTodos] = useState(Array<newTodoObj>)

  useEffect(() => {
    const tmpTodos: Array<newTodoObj> = []
    content.map((item, idx) => {
      const { hour, minute } = extractToDate(item?.createdAt)

      tmpTodos.push({
        title: item.title,
        content: item.content,
        createdAt: `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`
      })
    })
    
    setTodos(tmpTodos)
  }, [content])

  return <div className={style.week_body}>
    {todos.length && todos.map((item, idx) => {
      return <div key={idx} className={style.card}>
        <div className={style.date}>{item.createdAt}</div>
        <div className={style.content}>
          <TodoCard title='test' content='test' state={TodoState.DONE} />
        </div>
      </div>
    })}
  </div>
}