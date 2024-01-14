import SingleTask from "./SingleTask"

const TaskList = ({
    tasks,
    deleteSingleTask,
    handleCheck,
    updateTask,
    updatingTask,
    confirmUpdateTask,
    setChangedTask,
    changedTask,
}) => {
    return (
        <ul>
            {tasks.map((task) => (
                <SingleTask
                    task={task}
                    deleteSingleTask={deleteSingleTask}
                    handleCheck={handleCheck}
                    updateTask={updateTask}
                    updatingTask={updatingTask}
                    confirmUpdateTask={confirmUpdateTask}
                    setChangedTask={setChangedTask}
                    changedTask={changedTask}
                />
            ))}
        </ul>
    )
}

export default TaskList
