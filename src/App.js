import * as React from "react"
import TaskContent from "./TaskContent"
import Header from "./Header"
import AddTask from "./Addtask"
import Footer from "./Footer"

function App() {
    const [inputValue, setInputValue] = React.useState("")
    const [updatingTask, setUpdatingTask] = React.useState(false)
    const [changedTask, setChangedTask] = React.useState("")
    const [tasks, setTasks] = React.useState([])
    const [taskChangeId, setTaskChangeId] = React.useState("")

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
        setTaskChangeId(toUpdateTask[0].id)
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
        setUpdatingTask(false)
        setChangedTask("")
    }

    return (
        <div className="App">
            <Header title="Todo list" />
            <AddTask
                handleSubmit={handleSubmit}
                inputValue={inputValue}
                setInputValue={setInputValue}
                deleteAllTasks={deleteAllTasks}
            />
            <TaskContent
                tasks={tasks}
                deleteSingleTask={deleteSingleTask}
                handleCheck={handleCheck}
                updateTask={updateTask}
                updatingTask={updatingTask}
                confirmUpdateTask={confirmUpdateTask}
                setChangedTask={setChangedTask}
                changedTask={changedTask}
                taskChangeId={taskChangeId}
                setUpdatingTask={setUpdatingTask}
            />
            <Footer length={tasks.length} />
        </div>
    )
}

export default App
