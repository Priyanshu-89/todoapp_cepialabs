import { useDispatch, useSelector } from "react-redux"
import { deleteTask, toggleTask, editTask } from "../redux/features/tasks/taskSlice"
import { useState } from "react"

const TaskList = () => {
  const { tasks } = useSelector((state) => state.tasks)
  const dispatch = useDispatch()
  // console.log(tasks)
  const [editId, seteditId] = useState(null)
  const [editText, setEditText] = useState("")

  const handleEditTasks = (task) => {
    seteditId(task.id)
    setEditText(task.text)
  }

  const handleSaveEditt = () => {
    if (editText === "") return
    dispatch(editTask({ id: editId, newText: editText }))
    seteditId(null)
    setEditText("")
  }


  const handleDelete = (id) => {
    if (confirm("Are you sure to delete the task?")) {
      dispatch(deleteTask(id))
    }
  }
  return (
    <div>
      {/* ----- Display Task List -----  */}

      <ul>
        {tasks.length === 0 && <p>There is No task Available.</p>}
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center justify-between gap-3 mb-2 bg-slate-200 py-3 px-2 rounded-md">
            {
              editId === task.id ? (
                <>
                  <input type="text" className="border-2 border-slate-500 rounded px-2 py-1" value={editText} onChange={(e) => setEditText(e.target.value)} />
                  <button onClick={handleSaveEditt} className="bg-green-600 px-4 py-1 rounded-md text-green-50 cursor-pointer">Save</button>
                  <button onClick={() => seteditId(null)} className="bg-gray-500 px-4 py-1 rounded-md text-gray-50 cursor-pointer">Cancel</button>
                </>
              ) : (
                <>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => dispatch(toggleTask(task.id))}
                    />
                    <p className={task.completed ? "line-through text-slate-400" : ""}>{task.text}</p>
                    {/* Edit Task */}
                  </div>
                  <div className="flex justify-end items-center gap-x-3">
                    <button onClick={() => handleEditTasks(task)} className="bg-orange-600 text-orange-50 rounded-md px-4 py-1 cursor-pointer">Edit Task</button>

                    {/* Delete TAsk  */}

                    <button onClick={() => handleDelete(task.id)} className="bg-rose-600 text-orange-50 rounded-md px-4 py-1 cursor-pointer">Delete</button>
                  </div>

                </>
              )
            }


          </li>
        ))
        }


      </ul>
    </div>
  )
}

export default TaskList
