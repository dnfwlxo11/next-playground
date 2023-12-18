import SvgIcon from '@/components/Common/SvgIcon'
import style from './css/today.nav.module.scss'
import DayCard from '@/components/Common/day-card'

export default function TodayNav({ title }: { title: string }) {
	return <div className={style.today_nav}>
		<div className={style.nav_top}>
			<div className={style.back_btn}>
				<SvgIcon
					icon={{
						src: '/icons/arrow_back.svg', 
						color: 'rgba(241, 243, 245, 1)', 
						width: '18px', 
						height: '18px' 
					}} 
				/>
			</div>
			<div>{title}</div>
			<div className={style.more_btn}>
				<SvgIcon 
					icon={{ 
						src: '/icons/more_horiz.svg',
						color: 'rgba(241, 243, 245, 1)', 
						width: '18px', 
						height: '18px' 
					}} 
				/>
			</div>
		</div>
		<DayCard day={2} weekday={2} />
	</div>
}