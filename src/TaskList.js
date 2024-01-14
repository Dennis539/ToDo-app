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
    taskChangeId,
    setUpdatingTask,
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
                    taskChangeId={taskChangeId}
                    setUpdatingTask={setUpdatingTask}
                />
            ))}
        </ul>
    )
}

export default TaskList
