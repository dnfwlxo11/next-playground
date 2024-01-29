import { useRouter } from 'next/router'
import {
  day_todos,
  day_todos_title,
  day_todos_title_sub,
  day_todo_list,
  day_todo,
  day_check,
  day_todo_content,
  day_todo_title,
  day_todo_sub,
  day_check_circle,
  day_todo_priority,
  day_todo_add,
  day_todo_add_btn,
} from './DayTotoList.css'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import {
  date
} from '@/utils/interface/date'
import {
  MONTH_SHORT
} from '@/utils/contants/date'
import { extractToDate } from '@/utils/function/date'
import { todo } from '@/utils/interface/todo'
import { useEffect, useState } from 'react'
import SvgIcon from '@/components/Common/SvgIcon'
import CreateTodoModal from '@/components/Modal/createTodoModal'

export default function DayTodoList() {
  const router = useRouter()

  const [date, setDate] = useState<date>({ year: 0, month: 0, day: 0 })
  const [todos, setTodos] = useState<todo[]>([])
  const [isModal, setIsModal] = useState<boolean>(false)

  useEffect(() => {
    const tmpDate = new Date()
    const date = JSON.parse(localStorage.getItem('latestDate') 
    || `{
      "year": ${tmpDate.getFullYear()},
      "month": ${tmpDate.getMonth() + 1},
      "day": ${tmpDate.getDate()}
    }`)

    setDate(date)
    
    const targetTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    const targetDate = `${date.year}.${date.month}.${date.day}`
    setTodos(targetTodos[targetDate].sort((a: todo, b: todo) => a.time - b.time) || [])
  }, [router, isModal])

  const dayTodoTime = (timestamp: number) => {
    const { 
      year, 
      month, 
      day, 
      hour, 
      minute, 
      second 
    } = extractToDate(timestamp)
    
    return `${year.toString().padStart(2, '0')}.${month.toString().padStart(2, '0')}.${day.toString().padStart(2, '0')} 
      ${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}:${second.toString().padStart(2, '0')}`
  }
    
  return <div className={day_todos}>
    <div className={day_todos_title}>
      TO-DO
      <span className={day_todos_title_sub}>
        {date && MONTH_SHORT[date.month - 1]} {date && date.day}
      </span>
    </div>
    <div className={day_todo_list}>
      {todos && todos.map((todo, idx) => 
        <div className={day_todo} key={idx}>
          <div className={day_check}>
            <div className={day_check_circle(assignInlineVars({ color: todo.state }))}>
              {
                todo.state === 'DONE' ?
                  <SvgIcon
                    icon={{ 
                      src: '/icons/done.svg',
                      color: 'rgba(255, 255, 255, 1)',
                      width: '20px',
                      height: '20px',
                    }}
                  />
                : todo.state === 'PROGRESS' ?
                  <SvgIcon
                    icon={{ 
                      src: '/icons/progress_check.svg',
                      color: 'rgba(255, 255, 255, 1)',
                      width: '20px',
                      height: '20px',
                    }}
                  />
                : null
              }
            </div>
          </div>
          <div className={day_todo_content}>
            <div className={day_todo_title}>
              {todo.title || ''}
            </div>
            <div className={day_todo_sub}>
              {todo.time ? dayTodoTime(todo.time) : ''}
            </div>
          </div>
          <div className={day_todo_priority(assignInlineVars({ color: todo.priority }))}></div>
        </div>
      )}
    </div>
    <div className={day_todo_add}>
      <div className={day_todo_add_btn} onClick={() => setIsModal(!isModal)}>
        <SvgIcon
          icon={{ 
            src: '/icons/plus.svg',
            color: 'rgba(255, 255, 255, 1)',
            width: '20px',
            height: '20px',
          }}
        />
      </div>
    </div>
    {isModal && 
      <CreateTodoModal 
        date={date}
        prevData={todos}
        setTodos={setTodos}
        closeModal={setIsModal}
      />}
  </div>
}