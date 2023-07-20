import { useState } from "react";
import DayCard from '@/components/common/day-card';
import style from './week.cards.module.scss'

export default function WeekCards() {
  const [date, setDate] = useState<Date>();
  const tmp = [1,2,3,4,5,6,7]
  return <div className={style.cards_wrapper}>
    <div className={style.cards}>
      {tmp && tmp.map((item) => (
        <DayCard day={item} weekday={item} /> 
      ))}
    </div>
  </div>
}