import SvgIcon from '@/components/common/svg-icon'
import style from './css/week.nav.module.scss'

export default function Week({ title }: { title: string }) {
	return (
		<div className={style.week_nav}>
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
			<div className={style.note_btn}>
				<SvgIcon 
					icon={{ 
						src: '/icons/event_note.svg',
						color: 'rgba(241, 243, 245, 1)', 
						width: '18px', 
						height: '18px' 
					}} 
				/>
			</div>
		</div>
	)
}