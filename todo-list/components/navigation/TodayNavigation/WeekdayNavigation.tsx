import SvgIcon from '@/components/Common/SvgIcon'
import {
  weekday_navigation,
  plus_icon,
  magnify_icon,
} from './WeekdayNavigation.css'

export default function WeekdayNavigation() {
  return <div className={weekday_navigation}>
    <span className={plus_icon}>
      <SvgIcon icon={{ src: '/icons/plus.svg' }} />
    </span>
  </div>
}