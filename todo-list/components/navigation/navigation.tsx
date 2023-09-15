import TodayNav from './today/today-nav'
import Week from './week/week'
import WeekNav from './week/week-nav'
import WeekCards from './week/week-cards'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface hello {
	name: string
}

export default function Header({ type, title='Title' }: { type: string, title?: string }) {
	const router = useRouter();
	const navs: Object = { week: 'SCHEDULE', today: 'MY LIST' }

	const [route, setRoute] = useState('')
	const [hello, setHello] = useState('')

	const test = [
		{ title: 1, createdAt: (new Date()).getTime(), content: 'test' },
		{ title: 1, createdAt: (new Date()).getTime(), content: 'test' },
		{ title: 1, createdAt: (new Date()).getTime(), content: 'test' },
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
			{type === 'today' && <TodayNav title='SCHEDULE' />}
			{type === 'week' && <div>
					<Week title='test' content={test} />
				</div>
			}
		</div>
	)
}