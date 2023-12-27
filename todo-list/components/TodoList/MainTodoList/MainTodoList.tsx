import { Fragment, useContext, useEffect, useState } from "react"
import { assignInlineVars } from '@vanilla-extract/dynamic'
import {
  main_todo,
  main_todo_title,
  more_btn,
  todo_list,
  todo_card,
  todo_card_date,
  todo_card_priority,
  todo_card_priority_circle,
  todo_card_main,
  todo_card_title,
  todo_card_content,
} from './MainTodoList.css'
import {
  MONTH_SHORT,
  WEEKDAY_FULL,
} from '@/utils/contants/date'
import {
  STATE,
  PRIORITY,
} from '@/utils/contants/todo'
import { date } from '@/utils/interface/date'
import { useRouter } from "next/router"
import Link from "next/link"
import { Context as todoContext } from '@/contexts/todoContext'

import { todo } from '@/utils/interface/todo'

export default function MainTodoList({ date: target }: { date: date }) {
  const [date, setDate] = useState<date>({ year: 0, month: 0, day: 0 })
  const [weekday, setWeekday] = useState<number>(0)
  const [todos, setTodos] = useState<Array<todo>>([
    {
      id: '1',
      time: (new Date()).getTime(),
      title: 'qwe1',
      content: 'qwer1',
      priority: PRIORITY['NORMAL'],
      state: STATE['PROGRESS'],
    },
    {
      id: '2',
      time: (new Date()).getTime(),
      title: 'qwe2',
      content: 'qwer2',
      priority: PRIORITY['HIGH'],
      state: STATE['PENDING'],
    },
    {
      id: '3',
      time: (new Date()).getTime(),
      title: 'qwe3',
      content: 'qwer3',
      priority: PRIORITY['LOW'],
      state: STATE['DONE'],
    }
  ])

  const router = useRouter()

  const { date: initDate } = useContext(todoContext)
  
  const f_getTime = (timestamp: number) => {
    const date = new Date(timestamp)
    const hour = date.getHours()
    const minute = date.getMinutes()
    const hourClock = hour >= 12 ? 'PM' : 'AM'

    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${hourClock}`
  }

  useEffect(() => {
    const { year, month, day } = target

    if (!year && !month && !day) return

    const tmpWeekday = (new Date(year, month - 1, day)).getDay()

    setDate(target)
    setWeekday(tmpWeekday)
  }, [target])

  return <Fragment>
    <div className={main_todo}>
      <div className={main_todo_title}>
        {WEEKDAY_FULL[weekday]} {date.day}, {MONTH_SHORT[date.month - 1]}
      </div>
      <div className={more_btn}>
        <Link href={{ 
          pathname: `/day/${date.day}`, 
          query: { 
            year: date.year, 
            month: date.month, 
            day: date.day 
          }}}
          as={`/day/${date.day}`}
        >
          more
        </Link>
      </div>
    </div>
    <div className={todo_list}>
      {todos.length && todos.map((todo: todo) => {
        return <div key={todo.id} className={todo_card}>
          <div className={todo_card_date}>
            {f_getTime(todo.time)}
          </div>
          <div className={todo_card_priority}>
            <div className={todo_card_priority_circle(assignInlineVars({ color: `${todo.priority.toString()}` }))}></div>
          </div>
          <div className={todo_card_main}>
            <div className={todo_card_title}>
              {todo.title}
            </div>
            <div className={todo_card_content}>
              {todo.content}
            </div>
          </div>
        </div>
      })}
    </div>
  </Fragment>
}