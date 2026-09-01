import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
function TodoForm({
  addTodo,
  handleChange,
  formData,
  addCategory,
  todoCategory,
  isCategoryInput,
  setCategoryData,
  categoryData,
  setIsOpen,
  isEditing,
}) {
  const [detailsVisible, setDetailsVisible] = useState(false);

  return (
    <section className="absolute w-screen h-screen flex justify-center items-center backdrop-blur-xs bg-brand-bg/50">
      <div className="flex justify-center flex-col p-5 w-full h-full md:w-1/2 md:h-auto bg-brand-surface/85 relative">
        <button
          className="absolute top-4 right-4 p-1 rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100/50 transition-colors"
          aria-label="Close modal"
          onClick={() => setIsOpen(false)}
        >
          <IoMdClose className="text-2xl" />
        </button>
        <form
          className="flex flex-col gap-5 bg-brand-surface"
          onSubmit={addTodo}
        >
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="task"
              className="text-sm font-semibold text-gray-700"
            >
              Task Title
            </label>
            <input
              type="text"
              className="w-full p-2.5 border border-gray-300 rounded-lg bg-brand-surface/50 text-brand-text placeholder:text-brand-text/40 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Task Title"
              id="task"
            />
          </div>
          <button
            type="button"
            onClick={() => setDetailsVisible(!detailsVisible)}
            className="flex items-center justify-center gap-2 self-start py-1.5 px-3 rounded-md text-sm font-medium text-amber-800 hover:bg-amber-50 transition-colors"
          >
            {detailsVisible ? (
              <>
                <FaAngleUp className="text-base" /> Hide Details
              </>
            ) : (
              <>
                <FaAngleDown className="text-base" /> Add Details
              </>
            )}
          </button>

          {detailsVisible && (
            <div className="flex flex-col gap-4 border-t border-gray-100 pt-4 animate-fadeIn">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="category"
                  className="text-sm font-semibold text-gray-700"
                >
                  Category
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  id="category"
                  className="w-full p-2.5 border border-gray-300 rounded-lg bg-brand-surface focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-brand-text"
                >
                  <option value="No Category">No Category</option>
                  {todoCategory.map((category, index) => (
                    <option value={category} key={index}>
                      {category}
                    </option>
                  ))}
                  <option
                    value="add_new_option"
                    className="text-amber-700 font-medium"
                  >
                    + Create New
                  </option>
                </select>
              </div>

              <label htmlFor="description">Description</label>

              <textarea
                name="description"
                value={formData.description}
                id="description"
                className="w-full min-h-25 p-2.5 border border-gray-300 rounded-lg bg-brand-surface text-brand-text placeholder:text-brand-text/40focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-vertical font-sans leading-relaxed"
                placeholder="Add task description..."
                onChange={handleChange}
              ></textarea>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="startDate"
                    className="text-sm font-semibold text-gray-700"
                  >
                    Start Date
                  </label>
                  <input
                    className="w-full p-2.5 border border-gray-300 rounded-lg bg-brand-surface focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-brand-text"
                    type="date"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    id="startDate"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="dueDate"
                    className="text-sm font-semibold text-brand-text"
                  >
                    Due Date
                  </label>
                  <input
                    className="w-full p-2.5 border border-gray-300 rounded-lg bg-brand-surface focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-brand-text"
                    type="date"
                    name="dueDate"
                    value={formData.dueDate}
                    onChange={handleChange}
                    id="dueDate"
                  />
                </div>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-2 p-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200"
          >
            {isEditing ? "Update Task" : "Add Task"}
          </button>
        </form>
        {isCategoryInput && (
          <form
            className="mt-4 pt-4 border-t border-dashed border-gray-200 flex gap-2 items-end"
            onSubmit={addCategory}
          >
            <div className="flex flex-col gap-1.5 flex-1">
          <label htmlFor="new-category" className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
            New Category Name
          </label>
          <input
            type="text"
            id="new-category"
            placeholder="e.g. Work, Shopping..."
            value={categoryData}
            onChange={(e) => setCategoryData(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-lg bg-brand-surface focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-gray-900 text-sm"
          />
        </div>
        <button 
          type="submit" 
          className="p-2 px-4 bg-gray-800 hover:bg-gray-900 text-white text-sm font-medium rounded-lg h-9.5 transition-colors"
        >
          Create
        </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default TodoForm;

{
  /*

        <input type="radio" name="date" id=""  value="1"/><label htmlFor="">Today</label>
        <input type="radio" name="date" id=""  value="2"/><label htmlFor="">Tomorrow</label>
        <input type="radio" name="date" id=""  value="3"/><label htmlFor="">Set Date</label>
        */
}

{
  /*<button className="text-amber-800 font-bold">Add Subtask</button>
        <input type="text" name="subTask" value={formData.subTask} className=" p-2 border"/>
        <button className="border p-2 bg-yellow-600">Submit</button>*/
}
