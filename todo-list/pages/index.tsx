import { Inter } from 'next/font/google'
import HomePage from './todo/[type]'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

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
