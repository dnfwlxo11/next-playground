import { useRouter } from "next/router"

export default function TestById() {
	const router = useRouter()

	return <div>{router.query.id}</div>
}