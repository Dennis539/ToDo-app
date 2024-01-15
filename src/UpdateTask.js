const UpdateThisTask = ({
    task,
    confirmUpdateTask,
    setChangedTask,
    changedTask,
    setUpdatingTask,
}) => {
    return (
        <form
            className="updateTaskForm"
            onSubmit={(e) => confirmUpdateTask(e, task.id)}
        >
            <label>
                <input
                    type="text"
                    value={changedTask}
                    onChange={(e) => setChangedTask(e.target.value)}
                />
                {console.log(changedTask)}
            </label>
            <div className="updateTaskFormButton">
                <button type="submit">Confirm update</button>
                <button
                    id="cancelButton"
                    onClick={() => setUpdatingTask(false)}
                >
                    Cancel
                </button>
            </div>
        </form>
    )
}

export default UpdateThisTask
