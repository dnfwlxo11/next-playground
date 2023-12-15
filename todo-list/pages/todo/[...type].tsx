import Navigation from '@/components/navigation/navigation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Day from './day/[day]'

export default function HomePage() {
	const router = useRouter()
  const [type, setType] = useState<string>('')

	const safetyRouter = ['week', 'today', 'day']

	useEffect(() => {
    const queries = router?.query

		if (queries.type) {
			console.log(queries, 'queries type')
			setType(queries.type.toString())
		}
	}, [router])

	return (
		<>
			{safetyRouter.includes(type) ? <div>
        <Navigation type={type} />
			</div> : <div>잘못된 접근입니다. {type}</div>}
		</>
	)
}