import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Week from './week'

export default function Home() {
  const router = useRouter()

  // useEffect(() => {
  //   router.push('/todo/week')
  // }, [router])
  return (
    <main>
      <Week />
    </main>
  )
}
