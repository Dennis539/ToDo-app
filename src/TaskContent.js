import TaskList from "./TaskList"

const TaskContent = ({
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
        <main>
            {tasks.length ? (
                <TaskList
                    tasks={tasks}
                    deleteSingleTask={deleteSingleTask}
                    handleCheck={handleCheck}
                    updateTask={updateTask}
                    updatingTask={updatingTask}
                    confirmUpdateTask={confirmUpdateTask}
                    setChangedTask={setChangedTask}
                    changedTask={changedTask}
                />
            ) : (
                <p>Your list is empty</p>
            )}
        </main>
    )
}

export default TaskContent
