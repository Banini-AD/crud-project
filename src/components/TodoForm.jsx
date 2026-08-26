function TodoForm({
  addTodo,
  handleChange,
  formData,
  addCategory,
  todoCategory,
  isCategoryInput,
  setCategoryData,
  categoryData,
}) {
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

        <select
          className=" p-2 border"
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="No Category">No Category</option>
          {todoCategory.map((category, index) => (
            <option value={category} key={index}>
              {category}
            </option>
          ))}
          <option value="add_new_option">+ Create New</option>
        </select>

        {
          /*

        <input type="radio" name="date" id=""  value="1"/><label htmlFor="">Today</label>
        <input type="radio" name="date" id=""  value="2"/><label htmlFor="">Tomorrow</label>
        <input type="radio" name="date" id=""  value="3"/><label htmlFor="">Set Date</label>
        */
          <input
            className=" p-2 border"
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            id=""
          />
          /*
        <input className=" p-2 border" type="date" name="endDate" value={formData.startDate}  onChange={handleChange} id="" />

        <button className="text-amber-800 font-bold">Add Subtask</button>
        <input type="text" name="subTask" value={formData.subTask} className=" p-2 border"/>
*/
        }
        <button type="submit" className="border p-2 bg-yellow-600">
          Add Task
        </button>
      </form>
      {isCategoryInput && (
        <form className="" onSubmit={addCategory}>
          <input
            type="text"
            className=" p-2 border"
            placeholder="Category..."
            value={categoryData}
            onChange={(e) => {
              setCategoryData(e.target.value);
            }}
          />
          <button type="submit" className="border p-2 bg-yellow-600">
            Add Category
          </button>
        </form>
      )}
    </div>
  );
}

export default TodoForm;
