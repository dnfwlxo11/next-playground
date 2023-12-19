import { STATE, PRIORITY } from '@/utils/contants/todo'

export interface todo {
  time: number,
  title: string,
  content: string,
  priority: PRIORITY,
  state: STATE,
}