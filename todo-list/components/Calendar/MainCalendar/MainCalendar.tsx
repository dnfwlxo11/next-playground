import { useEffect, useState, Fragment, useContext } from 'react'
import { 
  calendar, 
  calendar_title, 
  weekday_nav, 
  month_weeks, 
  month_days, 
  month_day_wrap,
  weekday,
  month_day,
  active_month_day,
} from './MainCalendar.css'
import { 
  extractToMonth,
  extractToPrevMonth,
  extractToNextMonth,
} from '@/utils/function/date'
import {
  MONTH_FULL,
  WEEKDAY_SHORT,
} from '@/utils/contants/date'
import {
  date,
} from '@/utils/interface/date'
import { useRouter } from 'next/router'
import MainTodoList from '@/components/TodoList/MainTodoList'
import { Context as todoContext } from '@/contexts/todoContext'

export default function MainCalendar() {
  const [targetDate, setTargetDate] = useState<date>()
  const [monthDays, setMonthDays] = useState<Array<date>>([])

  const router = useRouter()
  const { date: initDate } = useContext(todoContext)

  const onClickDayCard = (year: number, month: number, day: number) => {
    localStorage.setItem('latestDate', JSON.stringify({ year, month, day }))

    setTargetDate({
      year,
      month,
      day,
    })
  }

  useEffect(() => {
    setMonthDays([])
    const { year: ltsYear, month: ltsMonth, day: ltsDay }: date = JSON.parse(localStorage.getItem('latestDate') || '{}')
    // const { year: targetYear, month: targetMonth, day: targetDay}: date = targetDate
    const timestamp: number = !ltsYear || !ltsMonth || !ltsDay 
      ? (new Date()).getTime()
      : (new Date(ltsYear, ltsMonth, ltsDay)).getTime()
      
    const { 
      year,
      month,
      day,
      firstDay,
      lastDay,
      firstWeekday,
      lastWeekday
    } = extractToMonth(timestamp)
    const { year: prevYear, month: prevMonth } = extractToPrevMonth(timestamp)
    const { year: nextYear, month: nextMonth } = extractToNextMonth(timestamp)

    setTargetDate({ year, month, day })
    setMonthDays((prev) => [ 
      ...prev, 
      ...Array(firstWeekday).fill({ year: prevYear, month: prevMonth, day: 0 }), 
      ...Array(lastDay).fill(0).map((item, idx) => {
        return {
          year,
          month,
          day: idx + 1,
        }
      }) ,
      ...Array(6 - lastWeekday).fill({ year: nextYear, month: nextMonth, day: 0 }), 
    ])
  }, []) 

  return <Fragment>
    <div className={calendar}>
      <div className={calendar_title}>
        {targetDate && targetDate.month && MONTH_FULL[targetDate.month - 1]}
      </div>
      <div className={weekday_nav}>
        {[1,2,3,4,5,6,7].map((item, idx) => { 
          return <div key={idx} className={weekday}>{WEEKDAY_SHORT[idx]}</div>
        })}
      </div>
      <div className={month_days}>
        {monthDays.length && 
          Array(Math.floor(monthDays.length / 7)).fill(0).map((line, lineIdx) => {
            return <div key={lineIdx} className={month_weeks}>
              {monthDays.slice(lineIdx * 7, (lineIdx * 7) + 7).map(({ year, month, day }, dayIdx) => {
                if (day !== 0) return <div key={dayIdx} className={month_day_wrap} onClick={() => onClickDayCard(year, month, day)}>
                  <span 
                    className={`
                      ${month_day},
                      ${targetDate && targetDate.year === year
                      && targetDate.month === month
                      && targetDate.day === day 
                      ? active_month_day : ''}
                    `}
                  >
                    {day}
                  </span>
                </div>
                else return <div key={dayIdx} className={month_day_wrap}></div>
              })}
            </div>
          })
        }
      </div>
    </div>
    <MainTodoList date={targetDate} />
  </Fragment>
}