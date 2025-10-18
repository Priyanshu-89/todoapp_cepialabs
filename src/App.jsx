import './App.css'
import FormTask from './components/FormTask'
import TaskList from './components/TaskList'

const App = () => {
  return (
    <div className='min-h-screen w-full flex items-center justify-center flex-col p-4 bg-slate-100'>
      <h1 className='text-center text-xl text-slate-700 font-semibold underline mb-6'>ToDo Application</h1>
 <div className='max-w-auto bg-slate-200 px-5 py-3 rounded-md mx-auto'>
  <FormTask/>
  <TaskList/>
 </div>

    </div>
  )
}

export default App
