const SingleTask = ({ task, deleteSingleTask, handleCheck }) => {
    return (
        <li className="task">
            <input
                type="checkbox"
                checked={task.checked}
                onChange={handleCheck}
            />
            <label>{task.item}</label>

            <button onClick={() => deleteSingleTask(task.id)}>
                Delete Task
            </button>
            {/* <button onClick={updateTask}>Update Tasks</button> */}
        </li>
    )
}

export default SingleTask
