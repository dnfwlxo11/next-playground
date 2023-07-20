import style from './day.card.module.scss'

interface dayCard {
  id?: string,
  day: Number,
  weekday: Number
}

enum Weekday {
  SUN,
  MON,
  TUE,
  WED,
  THU,
  FRI,
  SAT,
}

export default function DayCard({ id, day, weekday }: dayCard) {
  function getWeekday<T>(type: T, day: number): T[keyof T] {
    const weekday = day as keyof T
    return type[weekday - 1]
  }

  return <div className={style.card}>
    <div className={style.weekday}>{weekday}</div>
    <div className={style.day}>{getWeekday(Weekday, day)}</div>
  </div>
}