import { FaPlus } from "react-icons/fa"

const AddTask = ({
    handleSubmit,
    inputValue,
    setInputValue,
    deleteAllTasks,
}) => {
    return (
        <form className="addTaskForm" onSubmit={handleSubmit}>
            <input
                autoFocus
                type="text"
                value={inputValue}
                placeholder="Add Task"
                required
                id="addItem"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">
                <FaPlus />
            </button>
            <button onClick={deleteAllTasks} id="deleteButton">
                DELETE ALL TASKS
            </button>
        </form>
    )
}

export default AddTask
