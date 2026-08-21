

function TodoItem({todoList, deleteTodo, editTask}) {
  return (
    <div>
      
      {todoList.length === 0 && (
        <>
          <h1 className="text-2xl mb-3">
            <span className="text-6xl mb-3">😢</span>
            <br />
            No todos added yet
          </h1>
          <button className="mb-3">Add Todo</button>
        </>
      )}

      {todoList.length > 0 &&
        todoList.map((tsk, index) => (
          <div className="border p-4 flex gap-1 m-4" key={index}>
            <h2 className="text-2xl font-bold">{tsk.title}</h2>
            <button
              className="border p-2 bg-red-600"
              onClick={() => {
                deleteTodo(tsk);
              }}
            >
              Delete Task
            </button>
            <button
              className="border p-2 bg-green-600"
              onClick={() => {
                editTask(tsk);
              }}
            >
              Edit Task
            </button>
          </div>
        ))}

    </div>
  )
}

export default TodoItem
