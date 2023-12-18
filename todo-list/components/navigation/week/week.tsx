import WeekNav from './week-nav'
import WeekCards from './week-cards'
import WeekBody from './week-body'

interface Week {
  content: Array<todoObj>,
}

type todoObj = {
  title: string,
  createdAt: number,
  content: string,
}

export default function Week({ content }: Week) {
  return <>
    <WeekCards />
    <WeekBody content={content} />
  </>
}