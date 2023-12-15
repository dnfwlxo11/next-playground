import HomePage from './todo/[type]'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    router.push('/todo/week')
  }, [router])
  return (
    <div>
      <main>
        <HomePage />
      </main>
    </div>
  )
}
