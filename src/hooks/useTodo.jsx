import { useEffect, useState } from "react";

function useTodo() {
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

    e.target.value.length === 0
      ? (setSearchResult([]), setEmptySearchInput(true))
      : setEmptySearchInput(false);
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
  }, [todoList]);

  return {
    todoList,
    formData,
    isSearching,
    searchResult,
    emptySearchInput,
    setIsSearching,
    setSearchResult,
    handleChange,
    searchTodo,
    addTodo,
    editTask,
    deleteTodo,
  };
}

export default useTodo;
