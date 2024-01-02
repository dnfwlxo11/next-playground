import { todo } from "@/utils/interface/todo"
import { date } from "@/utils/interface/date"
import { PRIORITY, STATE } from "@/utils/contants/todo"
import {
  modal,
  modal_content,
  modal_body,
  modal_footer,
  modal_body_title,
  modal_body_item,
  modal_body_dates,
  modal_body_date,
  modal_priorities,
  modal_priority_circle,
  modal_states,
  modal_state,
} from './createTodoModal.css'
import { MouseEventHandler, useEffect, useState } from "react"
import Button from "../Common/Button"
import Input from "../Common/Input"
import { assignInlineVars } from "@vanilla-extract/dynamic"

export default function CreateTodoModal({ 
  date,
  prevData, 
  setTodos,
  closeModal,
}: { 
  date: date,
  prevData: Array<todo>, 
  setTodos: React.Dispatch<React.SetStateAction<todo[]>>,
  closeModal: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [dateString, setDateString] = useState<string>()
  const [timeString, setTimeString] = useState<string>()
  const [title, setTitle] = useState<string>('')
  const [content, setContent] = useState<string>('')
  const [targetPriority, setTargetPriority] = useState<PRIORITY>(PRIORITY.NORMAL)
  const [targetState, setTargetState] = useState<STATE>(STATE.PROGRESS)

  const onClickAdd = (evt) => {
    evt.stopPropagation()

    const addData = {
      id: (prevData.length + 1).toString(),
      time: (new Date(`${dateString} ${timeString}`)).getTime(),
      title,
      content,
      priority: targetPriority,
      state: targetState,
    }

    const targetDate = new Date(dateString || '')
    const year = targetDate.getFullYear()
    const month = targetDate.getMonth() + 1
    const day = targetDate.getDate()
    const prevTodos = JSON.parse(localStorage.getItem('todos') || '{}')

    prevTodos[`${year}.${month}.${day}`] = [ 
      ...(prevTodos?.[`${year}.${month}.${day}`] || []), 
      addData 
    ]
    
    localStorage.setItem('todos', JSON.stringify(prevTodos))

    closeModal(false)
  }

  const f_getTimestamp = (date: string) => {
    return (new Date(date)).getTime()
  }

  useEffect(() => {
    const { year, month, day } = date
    setDateString(`${year.toString().padStart(4, '0')}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`)
    setTimeString(`00:00:00`)
    
    // setTodos([
    //   ...prevData,
    //   {
    //     id: (prevData.length + 1).toString(),
    //     time: timestamp,
    //     title,
    //     content,
    //     priority,
    //     state,
    //   }
    // ])
  }, [])

  return <div className={modal} onClick={(evt) => { evt.stopPropagation(); closeModal(false)}}>
    <div className={modal_content} onClick={(evt) => {evt.stopPropagation()}}>
      <div className={modal_body}>
        <div className={modal_body_dates}>
          <div className={modal_body_date}>
            <div className={modal_body_title}>
              START TIME
            </div>
            <Input type="date" value={dateString} onChange={(evt) => setDateString(evt.target.value)} />
          </div> 
          <div className={modal_body_date}>
            <div className={modal_body_title}>
              END TIME
            </div>
            <Input type="time" value={timeString} onChange={(evt) => setTimeString(evt.target.value)} />
          </div>
        </div>
        <div className={modal_body_item}>
          <div className={modal_body_title}>
            TITLE
          </div>
          <Input type="text" value={title} onChange={(evt) => setTitle(evt.target.value)} />
        </div>
        <div className={modal_body_item}>
          <div className={modal_body_title}>
            CONTENT
          </div>
          <Input type="text" value={content} onChange={(evt) => setContent(evt.target.value)} />
        </div>
        <div className={modal_body_item}>
          <div className={modal_body_title}>
            PRIORITY
          </div>
          <div className={modal_priorities}>
            {[
              PRIORITY.HIGHEST, 
              PRIORITY.HIGH, 
              PRIORITY.NORMAL, 
              PRIORITY.LOW, 
              PRIORITY.LOWEST].map((priority) => {
              return <div 
                key={priority} 
                className={modal_priority_circle(assignInlineVars({ 
                  color: `${priority}`,
                  empha: priority === targetPriority ? 'active' : '',
                }))}
                onClick={() => setTargetPriority(priority)}
              ></div>
            })}
          </div>
        </div>
        <div>
          <div className={modal_body_title}>
            STATE
          </div>
          <div className={modal_states}>
            {[
              STATE.PENDING,
              STATE.PROGRESS, 
              STATE.DONE].map((state) => {
              return <div 
                key={state} 
                className={
                  modal_state(assignInlineVars({ 
                    color: `${state}`,
                    empha: state === targetState ? 'active' : '',
                }))}
                onClick={() => setTargetState(state)}
              >
                {state}
              </div>
            })}
          </div>
        </div>
      </div>
      <div className={modal_footer}>
        <Button type="secondary" title="CANCEL" onClick={() => closeModal(false)} />
        <Button type="primary" title="ADD" onClick={onClickAdd} />
      </div>
    </div>
  </div>
}