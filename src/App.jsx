import { useState, useEffect } from "react";

function App() {
  // Initialize todoList state with data from localStorage if it exists, otherwise use an empty array
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todo-list"));
    return savedTodoList ? savedTodoList : [];
  });

  const [targetID, setTargetID] = useState(null);

  const [emptySearchInput, setEmptySearchInput] = useState(true);

  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  // Initialize form state to track the input field value
  const [formData, setFormData] = useState({ title: " " });

  // Updates form state dynamically when the user types into the input field
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Updates the specific field (title) using computed property names
    }));
  }

  function searchTodo(e) {
    const query = e.target.value.toLowerCase().trim();
    console.log(query);

    setSearchResult(() => {
      const result = todoList.filter((task) =>
        task?.title?.toLowerCase().includes(query),
      );
      return result;
    });

    e.target.value.length === 0 ?
      (setSearchResult([]), setEmptySearchInput(true)) : setEmptySearchInput(false);
  }

  // Adds a new task to the todoList array and resets the input field
  function addTodo(e) {
    e.preventDefault();
    if (targetID === null) {
      const newTodo = {
        id: Date.now(), //This adds an id to the taskList and helps with the deleteTodo function
        ...formData,
      }; // Creates a copy of the current form data
      const nextTodo = [...todoList, newTodo]; // Merges the new task into a new array with existing tasks
      setTodoList(nextTodo); // Updates the todoList state
    } else {
      setTodoList((prevTasks) =>
        prevTasks.map((task) =>
          task.id === targetID ? { ...task, ...formData } : task,
        ),
      );
    }

    setTargetID(null);
    setFormData({ title: "" }); // Resets the input field to empty
  }

  function editTask(tsk) {
    setTargetID(tsk.id);
    setFormData({ title: tsk.title });
  }

  // Deletes a task from the todoList array
  function deleteTodo(tsk) {
    const updatedTodoList = todoList.filter((item) => item.id !== tsk.id); // returns a new array without the task with that id
    setTodoList(updatedTodoList); // Assigns the new array to the todoList.
  }

  // Syncs the todoList state to localStorage every time the todoList changes
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }, [todoList]); // Note: removed setTodoList from dependencies as state setters are stable and unnecessary here

  return (
    <div className="m-5">
      <h1 className="text-6xl font-black">Hi</h1>

      <form
        role="search"
        onChange={searchTodo}
        onMouseEnter={() => {
          setIsSearching(true);
        }}
        onMouseLeave={() => {
          setIsSearching(false);
          searchResult([]);
        }}
      >
        <input
          type="search"
          name="q"
          className=" p-2 border"
          placeholder="Search through your tasks"
        />
      </form>

      {isSearching && (
        <ul className=" bg-gray-400">
          {searchResult.length > 0 ? (
            searchResult.map((result, index) => (
              <li key={index}>{result.title}</li>
            ))
          ) : (
            <li className="">
              {emptySearchInput
                ? "Enter to search"
                : "No todo matches your result"}
            </li>
          )}
        </ul>
      )}

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

      <button className="border p-3 bg-blue-600 mb-4">Add New Task</button>

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
  );
}

export default App;