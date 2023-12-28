import { STATE, PRIORITY } from '@/utils/contants/todo'

export interface todo {
  id: string,
  time: number,
  title: string,
  content: string,
  priority: PRIORITY,
  state: STATE,
  // [prop: string]: any,
}