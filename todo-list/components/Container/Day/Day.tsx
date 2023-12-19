import DayTodoList from "@/components/TodoList/DayTodoList"
import WeekdayNavigation from "@/components/Navigation/TodayNavigation/WeekdayNavigation"
import { Fragment } from "react"

export default function day() {
  return <Fragment>
    <WeekdayNavigation />
    <DayTodoList />
  </Fragment>
}