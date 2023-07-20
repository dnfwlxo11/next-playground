import style from './today.nav.module.scss'

export default function TodayNav({ title }: { title: string }) {
	return <div className={style['today-nav']}>
		{title}
		<div className='card'>
			<div>2</div>
			<div className='weekday'>
				THU
			</div>
		</div>
	</div>
}