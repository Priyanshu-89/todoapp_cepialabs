import { createSlice } from "@reduxjs/toolkit";

//  ----To load thr Taks from local Storage----
const loadTaskLocalStorage = () => {
    try {
        const data = localStorage.getItem("myTasks")
        return data ? JSON.parse(data) : []
    } catch (error) {
        return []
    }
}
//----- To save the Tasks in Local Storage----

const saveTaskInLocalStroage = (tasks) => {
    localStorage.setItem("myTasks", JSON.stringify(tasks))
}

const taskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: loadTaskLocalStorage(),
        filter: {
            status: "all",
            search: ""
        }
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
            saveTaskInLocalStroage(state.tasks)
        },

        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload)
            saveTaskInLocalStroage(state.tasks)
        },

        toggleTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload)
            if (task) task.completed = !task.completed
            saveTaskInLocalStroage(state.tasks)
        },

        editTask: (state, action) => {
            const { id, newText } = action.payload
            const task = state.tasks.find(taskId => taskId.id === id)
            if (task) task.text = newText
            saveTaskInLocalStroage(state.tasks)
        },

        setStatus: (state, action) => {
            state.filter.status = action.payload
        },
        setSearch: (state, action) => {
            state.filter.search = action.payload
        },

    }
})

export const { addTask, deleteTask, toggleTask, editTask, setStatus, setSearch } = taskSlice.actions

export default taskSlice.reducer