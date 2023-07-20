import Label from '@/components/common/label'
import SvgIcon from '@/components/common/svg-icon'
import style from './navigation.module.scss'
import TodayNav from './today-nav'
import WeekNav from './week-nav'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

type hello = {
	name: string
}

export default function Header({ type, title='Title' }: { type: string, title?: string }) {
	const router = useRouter();

	const [route, setRoute] = useState('')
	const [hello, setHello] = useState('')

	useEffect(() => {
		console.log(router)
	}, [router])

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
		<div className={style.header}>
			<Label title={title} />
			<SvgIcon icon={{ src: '/icons/event_note.svg', color: 'rgba(241, 243, 245, 1)' }} />
			<SvgIcon icon={{ src: '/icons/arrow_back.svg', color: 'rgba(241, 243, 245, 1)' }} />
			<SvgIcon icon={{ src: '/icons/more_horiz.svg', color: 'rgba(241, 243, 245, 1)' }} />
			{type === 'today' ? <TodayNav title='SCHEDULE' /> : <WeekNav title='MY LIST' />}
		</div>
	)
}