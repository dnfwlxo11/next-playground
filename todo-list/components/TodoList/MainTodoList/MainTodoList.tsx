import { Fragment, useContext, useEffect, useState } from "react"
import { assignInlineVars } from '@vanilla-extract/dynamic'
import {
  main_todo,
  main_todo_title,
  more_btn,
  todo_list,
  todo_card,
  todo_add,
  todo_add_icon,
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
import SvgIcon from "@/components/Common/SvgIcon"
import CreateTodoModal from "@/components/Modal/createTodoModal"

export default function MainTodoList({ date: target }: { date: date }) {
  const [date, setDate] = useState<date>({ year: 0, month: 0, day: 0 })
  const [weekday, setWeekday] = useState<number>(0)
  const [todos, setTodos] = useState<todo[]>([])
  const [isModal, setIsModal] = useState<boolean>(false)
  
  const f_getTime = (timestamp: number) => {
    const date = new Date(timestamp)
    const hour = date.getHours()
    const minute = date.getMinutes()
    const hourClock = hour >= 12 ? 'PM' : 'AM'

    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')} ${hourClock}`
  }

  useEffect(() => {
    const { year, month, day } = target

    if (!year || !month || !day) return

    const tmpWeekday = (new Date(year, month - 1, day)).getDay()
    const todos = JSON.parse(localStorage.getItem('todos') || '{}')

    setDate(target)
    setTodos(todos[`${year}.${month}.${day}`] || [])
    setWeekday(tmpWeekday)
  }, [target])

  const onClickAddTodo = (data: todo) => {
    const { year, month, day } = target

    if (!year || !month || !day) return

    const key = `${year}.${month}.${day}`
    setTodos([ ...todos, data ])
  }

  return <Fragment>
    <div className={main_todo}>
      <div className={main_todo_title}>
        {WEEKDAY_FULL[weekday]} {date.day}, {date.month && MONTH_SHORT[date.month - 1]}
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
      {todos.length ? <>
        {todos.map((todo: todo) => {
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
        <div className={todo_add}>
          <div className={todo_add_icon} onClick={() => setIsModal(!isModal)}>
            <SvgIcon 
              icon={{ 
                src: '/icons/plus_box.svg', 
                width: '24px', 
                height: '24px', 
                color: 'rgba(29, 31, 38, 1)' 
              }} 
            />
          </div>
        </div>
      </> : <div className={todo_add}>
        <div>Write down your to-dos!</div>
        <div className={todo_add_icon} onClick={() => setIsModal(!isModal)}>
          <SvgIcon icon={{ src: '/icons/plus_box.svg', width: '24px', height: '24px', color: 'rgba(29, 31, 38, 1)' }} />
        </div>
      </div>}
    </div>
    {isModal && 
      <CreateTodoModal 
        date={target}
        prevData={todos} 
        setTodos={setTodos} 
        closeModal={setIsModal} 
      />}
  </Fragment>
}