const UpdateThisTask = ({
    task,
    confirmUpdateTask,
    setChangedTask,
    changedTask,
    setUpdatingTask,
}) => {
    return (
        <form onSubmit={(e) => confirmUpdateTask(e, task.id)}>
            <label>
                Please update your task:
                <input
                    type="text"
                    value={changedTask}
                    onChange={(e) => setChangedTask(e.target.value)}
                />
                {console.log(changedTask)}
            </label>
            <button type="submit">Confirm update</button>
            <button id="cancelButton" onClick={() => setUpdatingTask(false)}>
                Cancel
            </button>
        </form>
    )
}

export default UpdateThisTask
