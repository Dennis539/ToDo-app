import SingleTask from "./SingleTask"

const TaskList = ({ tasks, deleteSingleTask, handleCheck }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <SingleTask
                    task={task}
                    deleteSingleTask={deleteSingleTask}
                    handleCheck={handleCheck}
                />
            ))}
        </ul>
    )
}

export default TaskList
