import "./App.css"
import * as React from "react"

function App() {
    const [inputValue, setInputValue] = React.useState("")
    const [tasks, setTasks] = React.useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue) {
            setTasks([...tasks, { label: inputValue, completed: false }])
        }
        setInputValue("")
    }

    const Checkbox = ({ label, value, toggle }) => {
        return (
            <label>
                <input type="checkbox" checked={value} onChange={toggle} />
                {label}
            </label>
        )
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
            </form>
            <div>
                {tasks.map((task, index) => {
                    return (
                        <Checkbox
                            key={index}
                            label={task.label}
                            value={task.completed}
                            toggle={() => {
                                const updatedTasks = [...tasks]
                                updatedTasks[index].completed =
                                    !updatedTasks[index].completed
                                setTasks(updatedTasks)
                            }}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default App
