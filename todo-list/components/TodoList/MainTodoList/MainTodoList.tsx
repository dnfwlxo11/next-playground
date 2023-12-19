import { Fragment, useEffect, useState } from "react"
import {
  main_todo,
  main_todo_title,
  more_btn,
  todo_list,
  todo_card,
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

export default function MainTodoList({ date: target }: { date: date }) {
  const [date, setDate] = useState<date>({ year: 0, month: 0, day: 0 })
  const [weekday, setWeekday] = useState<number>(0)
  const [todo, setTodo] = useState<Array<Object>>([
    {
      time: (new Date()).getTime(),
      title: 'qwe1',
      content: 'qwer1',
      priority: PRIORITY[0],
      state: STATE[0],
    },
    {
      time: (new Date()).getTime(),
      title: 'qwe2',
      content: 'qwer2',
      priority: PRIORITY[1],
      state: STATE[1],
    },
    {
      time: (new Date()).getTime(),
      title: 'qwe3',
      content: 'qwer3',
      priority: PRIORITY[2],
      state: STATE[2],
    }
  ])

  const router = useRouter()

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
        {WEEKDAY_FULL[weekday]} {date.day} {MONTH_SHORT[date.month - 1]}
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
      <div className={todo_card}>

      </div>
    </div>
  </Fragment>
}