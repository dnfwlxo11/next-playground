import SvgIcon from '@/components/Common/SvgIcon'
import {
  weekday_navigation,
  plus_icon,
  left_chevron_icon,
} from './WeekdayNavigation.css'
import { useRouter } from 'next/router'

export default function WeekdayNavigation() {
  const router = useRouter()
  const f_onClickPrevClick = () => {

    router.push('/')
  }

  return <div className={weekday_navigation}>
    <span className={left_chevron_icon} onClick={f_onClickPrevClick}>
      <SvgIcon icon={{ src: '/icons/chevron_left.svg' }} />
    </span>
    <span className={plus_icon}>
      <SvgIcon icon={{ src: '/icons/plus.svg' }} />
    </span>
  </div>
}