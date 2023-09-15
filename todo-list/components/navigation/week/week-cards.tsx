import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DayCard from '@/components/common/day-card';
import style from './week.cards.module.scss'
import Link from "next/link";

const weekDay = [
  'SUNDAY',
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'TURSDAY',
  'FRIDAY',
  'SATURDAY'
]

export default function WeekCards() {
  const router = useRouter()
  const [weekdate, setWeekDate] = useState<Object>({});
  const tmp = [1,2,3,4,5,6,7]

  useEffect(() => {
    f_initWeek()
  }, [])

  const f_initWeek = () => {
    const baseDate = new Date()
    const baseDay = baseDate.getDate()

    for (let i=0;i<7;i++) {
      const targetDate = new Date(baseDate.setDate(baseDay - i))
      const year: string = targetDate.getFullYear().toString()
      const month: string = (targetDate.getMonth() + 1).toString().padStart(2, '0')
      const day: string = targetDate.getDate().toString().padStart(2, '0')
      const weekday: string = weekDay[targetDate.getDay()]
      const key: string = `${year}${month}${day}` 

      setWeekDate((prev) => {
        return { ...prev, [key]: { key, year, month, day, weekday } }
      })
    }
  }

  const f_moveToDay = (day: string) => {
    router.push(`/todo/day/${day}`)
  }

  return <div className={style.cards_wrapper}>
    <div className={style.cards}>
      {Object.keys(weekdate).length && Object.values(weekdate).map((item, idx) => (
        <Link
          href={`/todo/day/${item.day}`}
          key={item.key} 
          className={style.card}
        >
          <DayCard
            id={item.key} 
            day={item.day} 
            weekday={item.weekday.slice(0, 3)} 
          />
        </Link>
        
      ))}
    </div>
  </div>
}