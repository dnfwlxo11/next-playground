import Navigation from '@/components/navigation/navigation'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function HomePage() {
	const router = useRouter()
  const [type, setType] = useState<string>()

	const safetyRouter = ['week', 'today']

  useEffect(() => {
		console.log(router, 'router')
    const queries = router?.query || 'week'

		console.log(queries.type, 'router type')

		if (queries.type) {
			console.log(queries.type)
			setType(queries.type)
		}
  }, [router])

	return (
		<>
			{safetyRouter.includes(type) ? <div>
				<Navigation type={type} />
				<span>This is Homepage</span>
			</div> : <div>잘못된 접근입니다. {type}</div>}
		</>
	)
}