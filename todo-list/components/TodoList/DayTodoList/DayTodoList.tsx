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
import {
  STATE,
  PRIORITY,
} from '@/utils/contants/todo'
import { todo } from '@/utils/interface/todo'
import { useEffect, useState } from 'react'
import SvgIcon from '@/components/Common/SvgIcon'

export default function DayTodoList(todo: date) {
  const router = useRouter()

  const [month, setMonth] = useState<number | undefined>(1)
  const [day, setDay] = useState<number | undefined>(0)
  const [todos, setTodos] = useState<Array<todo>>([])

  const dummy: Array<todo> = [
    {
      id: '1',
      time: 1703662407765,
      title: 'qwe1',
      content: 'qwer1',
      priority: PRIORITY['NORMAL'],
      state: STATE['PROGRESS'],
    },
    {
      id: '2',
      time: 1703662407765,
      title: 'qwe2',
      content: 'qwer2',
      priority: PRIORITY['HIGH'],
      state: STATE['PENDING'],
    },
    {
      id: '3',
      time: 1703662407765,
      title: 'qwe3',
      content: 'qwer3',
      priority: PRIORITY['LOW'],
      state: STATE['DONE'],
    }
  ]

  useEffect(() => {
    const { year, month, day }: date = JSON.parse(localStorage.getItem('latestDate') || '{}')
    setMonth(month)
    setDay(day)
    
    const targetTodos = JSON.parse(localStorage.getItem('todos') || '[]')
    setTodos(targetTodos)
  }, [router])

  return <div className={day_todos}>
    <div className={day_todos_title}>
      TO-DO
      <span className={day_todos_title_sub}>
        {month && MONTH_SHORT[month - 1]} {day && day}
      </span>
    </div>
    <div className={day_todo_list}>
      {todos.length && todos.map((todo, idx) => 
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
              {todo.title}
            </div>
            <div className={day_todo_sub}>
              {todo.time}
            </div>
          </div>
          <div className={day_todo_priority(assignInlineVars({ color: todo.priority }))}></div>
        </div>
      )}
    </div>
    <div className={day_todo_add}>
      <div className={day_todo_add_btn}>
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
  </div>
}