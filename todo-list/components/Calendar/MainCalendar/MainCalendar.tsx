import { useEffect, useState } from 'react'
import { calendar, calendar_title, weekday_nav, month_days, month_day } from './MainCalendar.css'
import { extractToMonth } from '@/utils/function/date'

enum e_month {
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'ARPIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER'
}

enum e_weekday {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}

type month = {
  month?: number,
  firstDay?: number,
  lastDay?: number,
  firstWeekday?: number,
  lastWeekday?: number,
}

export default function MainCalendar() {
  const [month, setMonth] = useState<number>()
  const [monthDays, setMonthDays] = useState<Array<number>>([])

  useEffect(() => {
    const timestamp: number = (new Date()).getTime()
    const { 
      month,
      firstDay,
      lastDay,
      firstWeekday,
      lastWeekday
    } = extractToMonth(timestamp)

    setMonth(month)
    setMonthDays((prev) => [ ...prev, ...Array(firstWeekday).fill(0), ...Array(lastDay).fill(0).map((item, idx) => (idx + 1)) ])
  }, [])

  return <div className={calendar}>
    <div className={calendar_title}>
      {month && e_month[month - 1]}
    </div>
    <div className={weekday_nav}>
      {[1,2,3,4,5,6,7].map((item, idx) => { 
        return <div key={idx}>{e_weekday[idx]}</div>
      })}
    </div>
    <div className={month_days}>
      {monthDays.length && monthDays.map((day) => {
        return <div className={month_day}>{day}</div>
      })}
    </div>
  </div>
}