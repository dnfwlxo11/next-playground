import TodayNav from './today/today-nav'
import Week from './week/week'
import WeekCards from './week/week-cards'
import navStyle from './index.module.scss'
import SvgIcon from '@/components/Common/SvgIcon'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface hello {
	name: string
}

export default function Header({ type }: { type: string }) {
	const router = useRouter();
	const navs: Object = { week: 'SCHEDULE', today: 'MY LIST' }

	const [route, setRoute] = useState('')
	const [hello, setHello] = useState('')

	const test = [
		{ title: '1', createdAt: (new Date()).getTime(), content: 'test' },
		{ title: '1', createdAt: (new Date()).getTime(), content: 'test' },
		{ title: '1', createdAt: (new Date()).getTime(), content: 'test' },
	]

	useEffect(() => {
		callHello()
	}, [])

	const callHello = async () => {
		const res: Response = await fetch('/api/hello')
		const result: hello = await res.json()
		setHello(result?.name)

		return result
	}

	return (
		<div>
			<div className={navStyle.week_nav}>
				<div className={navStyle.back_btn}>
					<SvgIcon
						icon={{
							src: '/icons/arrow_back.svg', 
							color: 'rgba(241, 243, 245, 1)', 
							width: '18px', 
							height: '18px' 
						}} 
					/>
				</div>
				<div>SCHEDULE</div>
				<div className={navStyle.note_btn}>
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
			{type === 'today' && <TodayNav title='SCHEDULE' />}
			{type === 'week' && <Week content={test} /> }
			{type === 'day' && <>qwe</> }
		</div>
	)
}