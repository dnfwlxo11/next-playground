import { Fragment } from 'react'
import Navigation from '@/components/Navigation/WeekNavigation/index'
import MainCalendar from '@/components/Calendar/MainCalendar'

export default function week() {
  return <Fragment>
    <Navigation />
    <MainCalendar />
  </Fragment>
}