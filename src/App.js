import * as React from "react"
import TaskContent from "./TaskContent"

function App() {
    const [inputValue, setInputValue] = React.useState("")
    const [tasks, setTasks] = React.useState([])

    const addItem = (item) => {
        const id = tasks.length ? tasks.length : 0
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
    }

    const updateTask = (index) => {
        const updatedTasks = [...tasks]
        console.log(updatedTasks)
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
                />
            </div>
        </div>
    )
}

export default App
