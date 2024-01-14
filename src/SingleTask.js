import UpdateThisTask from "./UpdateTask"
import { FaTrashAlt } from "react-icons/fa"

const SingleTask = ({
    task,
    deleteSingleTask,
    handleCheck,
    updateTask,
    updatingTask,
    confirmUpdateTask,
    setChangedTask,
    changedTask,
    taskChangeId,
    setUpdatingTask,
}) => {
    return (
        <li className="task">
            <input
                type="checkbox"
                checked={task.checked}
                onChange={() => handleCheck(task.id)}
            />
            <label>{task.item}</label>

            <div>
                {updatingTask && task.id === taskChangeId ? (
                    <UpdateThisTask
                        task={task}
                        confirmUpdateTask={confirmUpdateTask}
                        setChangedTask={setChangedTask}
                        changedTask={changedTask}
                        setUpdatingTask={setUpdatingTask}
                    />
                ) : updatingTask && task.id !== taskChangeId ? (
                    <div></div>
                ) : (
                    <div>
                        <button onClick={() => updateTask(task.id)}>
                            Update Task
                        </button>
                        <FaTrashAlt
                            onClick={() => deleteSingleTask(task.id)}
                            role="button"
                            tabIndex="0"
                            aria-label={`Delete ${task.item}`}
                        />
                    </div>
                )}
            </div>
        </li>
    )
}

export default SingleTask
