import { useRouter } from 'next/router'
import {
  day_todo,
  day_todo_title,
} from './DayTotoList.css'
import { useEffect, useState } from 'react'

export default function DayTodoList() {
  const router = useRouter()

  const [day, setDay] = useState<number>(0)

  useEffect(() => {
    console.log(router)
    const { day } = router.query
    setDay(Number(day))
  }, [router])

  return <div className={day_todo}>
    <div className={day_todo_title}>
      TO-DO
    </div>
  </div>
}