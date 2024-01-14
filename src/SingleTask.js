import UpdateThisTask from "./UpdateTask"

const SingleTask = ({
    task,
    deleteSingleTask,
    handleCheck,
    updateTask,
    updatingTask,
    confirmUpdateTask,
    setChangedTask,
    changedTask,
}) => {
    return (
        <li className="task">
            <input
                type="checkbox"
                checked={task.checked}
                onChange={() => handleCheck(task.id)}
            />
            <label>{task.item}</label>

            <button onClick={() => deleteSingleTask(task.id)}>
                Delete Task
            </button>
            <div>
                {updatingTask ? (
                    <UpdateThisTask
                        task={task}
                        confirmUpdateTask={confirmUpdateTask}
                        setChangedTask={setChangedTask}
                        changedTask={changedTask}
                    />
                ) : (
                    <button onClick={() => updateTask(task.id)}>
                        Update Tasks
                    </button>
                )}
            </div>
        </li>
    )
}

export default SingleTask
