import { todo } from "@/utils/interface/todo"
import { date } from "@/utils/interface/date"
import { PRIORITY, STATE } from "@/utils/contants/todo"
import {
  modal,
  modal_content,
  modal_body,
  modal_footer,
} from './createTodoModal.css'
import { useState } from "react"
import Button from "../Common/Button"

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
  const [todo, setTodo] = useState<todo>()

  const onClickAdd = () => {
    setTodos([
      ...prevData, 
      {
        id: '1',
        time: 1703733926399,
        title: 'test',
        content: 'test',
        priority: PRIORITY.HIGH,
        state: STATE.DONE,
      }
    ])
  }

  return <div className={modal} onClick={(evt) => { console.log(evt); evt.preventDefault(); evt.stopPropagation(); closeModal(false)}}>
    <div className={modal_content}>
      {JSON.stringify(date)}   {setTodos.toString()}

      <div className={modal_body}>
        {JSON.stringify(prevData)}
      </div>
      <div className={modal_footer}>
        <Button type="secondary" title="CANCEL" />
        <div onClick={onClickAdd}>
          <Button type="primary" title="ADD" />
        </div>
        
      </div>
    </div>
  </div>
}