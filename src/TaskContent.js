import TaskList from "./TaskList"

const TaskContent = ({ tasks, deleteSingleTask, handleCheck }) => {
    return (
        <main>
            {tasks.length ? (
                <TaskList
                    tasks={tasks}
                    deleteSingleTask={deleteSingleTask}
                    handleCheck={handleCheck}
                />
            ) : (
                <p>Your list is empty</p>
            )}
        </main>
    )
}

export default TaskContent
