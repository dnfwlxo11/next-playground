import SvgIcon from '@/components/Common/SvgIcon'
import { week_navigation, plus_icon, magnify_icon } from './WeekNavigation.css'

export default function WeekNavigation() {
  return <div className={week_navigation}>
    <span className={plus_icon}>
      <SvgIcon icon={{ src: '/icons/plus.svg', color: 'rgba(33, 35, 41, 1)' }} />
    </span>
    <span className={magnify_icon}>
      <SvgIcon icon={{ src: '/icons/magnify.svg' }} />
    </span>
  </div>
}