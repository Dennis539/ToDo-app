import * as React from "react"
import TaskContent from "./TaskContent"

function App() {
    const [inputValue, setInputValue] = React.useState("")
    const [updatingTask, setUpdatingTask] = React.useState(false)
    const [changedTask, setChangedTask] = React.useState("")
    const [tasks, setTasks] = React.useState([])

    const addItem = (item) => {
        const id = tasks.length ? tasks[tasks.length - 1].id + 1 : 1
        const newTask = { id, checked: false, item }
        setTasks([...tasks, newTask])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue) {
            addItem(inputValue)
        }
        setInputValue("")
    }

    const handleCheck = (id) => {
        const listTasks = tasks.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        )
        console.log(listTasks)
        setTasks(listTasks)
    }

    const updateTask = (id) => {
        const toUpdateTask = tasks.filter((task) => task.id === id)
        setUpdatingTask(true)
        setChangedTask(toUpdateTask[0].item)
    }

    const confirmUpdateTask = (e, taskId) => {
        e.preventDefault()
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, item: changedTask } : task
        )
        setTasks(updatedTasks)
        setUpdatingTask(false)
        setChangedTask("")
    }

    const deleteSingleTask = (id) => {
        console.log(`Deleting single task at index ${id}`)
        const updatedTasks = tasks.filter((task) => task.id !== id)
        setTasks(updatedTasks)
    }

    const deleteAllTasks = (e) => {
        setTasks([])
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>
                    Please enter your task:
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                </label>
                <button type="submit">Add task</button>
                <button onClick={deleteAllTasks}>Delete all tasks</button>
            </form>
            <div>
                <TaskContent
                    tasks={tasks}
                    deleteSingleTask={deleteSingleTask}
                    handleCheck={handleCheck}
                    updateTask={updateTask}
                    updatingTask={updatingTask}
                    confirmUpdateTask={confirmUpdateTask}
                    setChangedTask={setChangedTask}
                    changedTask={changedTask}
                />
            </div>
        </div>
    )
}

export default App
