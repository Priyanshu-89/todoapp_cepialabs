import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../redux/features/tasks/taskSlice"
const FormTask = () => {
  const [task, setTask] = useState("")

  const disPatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()

    if (task === "") return
    disPatch(addTask({
      id: Date.now(),
      text: task.trim(),
      completed: false
    }))
    setTask('')
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='mb-3 flex items-center gap-3'>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder='Add Your New Task' className='px-2 py-1 rounded-md outline-none border-2 border-slate-600' />

        <button type="submit" className='bg-slate-600 text-slate-100 px-8 py-2 rounded-md cursor-pointer hover:bg-slate-700 transition-all duration-300'>Add Task</button>
      </form>
    </>
  )
}

export default FormTask
