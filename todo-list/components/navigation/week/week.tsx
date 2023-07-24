import WeekNav from './week-nav'
import WeekCards from './week-cards'
import WeekBody from './week-body'

interface Week {
  title: string,
  content: Array<todoObj>,
}

type todoObj = {
  title: string,
  createdAt: number,
  content: string,
}

export default function Week({ title, content }: Week) {
  return <>
    <WeekNav title={title} />
    <WeekCards />
    <WeekBody content={content} />
  </>
}