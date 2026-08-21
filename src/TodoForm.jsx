function TodoForm({addTodo, handleChange, formData}) {
  return (
    <div>
      <form className="" onSubmit={addTodo}>
        <input
          type="text"
          className=" p-2 border"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Task Title"
        />
        <button type="submit" className="border p-2 bg-yellow-600">
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TodoForm
