import { useEffect, useState, useRef } from "react";

function useTodo() {
  // Initialize todoList state with data from localStorage if it exists, otherwise use an empty array
  const [todoList, setTodoList] = useState(() => {
    const savedTodoList = JSON.parse(localStorage.getItem("todo-list"));
    return savedTodoList ? savedTodoList : [];
  });

  const [categoryData, setCategoryData] = useState("");

  const [isCategoryInput, setIsCategoryInput] = useState(false);

  const [todoCategory, setTodoCategory] = useState(() => {
    const savedTodoCategory = JSON.parse(localStorage.getItem("todo-category"));
    return savedTodoCategory ? savedTodoCategory : ["Personal", "Work"];
  });

  const [targetID, setTargetID] = useState(null);

  const [emptySearchInput, setEmptySearchInput] = useState(true);

  const [isSearching, setIsSearching] = useState(false);
  const [searchResult, setSearchResult] = useState([]);

  // Initialize form state to track the input field value
  const [formData, setFormData] = useState({
    title: "",
    category: "No Category",
    startDate: "",
    dueDate: "",
    description: "",
    //subTasks: [],
  });

  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [toastMessage, setToastMessage] = useState("");
  const timeoutRef = useRef(null);
  const deletedTaskRef = useRef(null);

  // Updates form state dynamically when the user types into the input field
  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "category") {
      if (value === "add_new_option") {
        setIsCategoryInput(true);
        return;
      }
      if (value === undefined) {
        return value === "No Category";
      }
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.toString(), // Updates the specific field (title) using computed property names
    }));
  }

  function addCategory(e) {
    e.preventDefault();
    setTodoCategory((prevData) => [...prevData, categoryData]);
    setCategoryData("");
    setIsCategoryInput(false);
  }

  function searchTodo(e) {
    const query = e.target.value.toLowerCase().trim();

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

    setIsOpen(false);
    setIsEditing(false);

    setTargetID(null);
    setFormData({
      title: "",
      category: "",
      startDate: "",
      dueDate: "",
      description: "",
      //subTasks: [],
    }); // Resets the input field to empty
  }

  function editTask(tsk) {
    setIsEditing(true);
    setIsOpen(true);
    setTargetID(tsk.id);
    setFormData({ title: tsk.title, category: tsk.category, startDate: tsk.startDate, dueDate: tsk.dueDate, description: tsk.description });
  }

  // Deletes a task from the todoList array
  function deleteTodo(tsk) {
    const taskToDelete = todoList.find((task) => task.id === tsk.id);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    deletedTaskRef.current = taskToDelete;

    const updatedTodoList = todoList.filter((item) => item.id !== tsk.id); // returns a new array without the task with that id
    setTodoList(updatedTodoList); // Assigns the new array to the todoList.

    const message = `Deleted "${taskToDelete.title}"`;

    setToastMessage(message);

    timeoutRef.current = setTimeout(() => {
      deletedTaskRef.current = null;
      setToastMessage("");
    }, 5000);
  }

  function handleUndo() {
    if (!deletedTaskRef.current) return;

    const retrievedTsk = deletedTaskRef.current;

    // Put the task back into the state
    setTodoList((prevTasks) => [...prevTasks, retrievedTsk]);

    // Clear the permanent deletion timer
    clearTimeout(timeoutRef.current);
    // Reset temporary variables
    deletedTaskRef.current = null;
    setToastMessage("");
  }

  // Syncs the todoList state to localStorage every time the todoList changes
  useEffect(() => {
    localStorage.setItem("todo-list", JSON.stringify(todoList));
  }, [todoList]);
  useEffect(() => {
    localStorage.setItem("todo-category", JSON.stringify(todoCategory));
  }, [todoCategory]);

  return {
    todoList,
    formData,
    isSearching,
    searchResult,
    setSearchResult,
    emptySearchInput,
    setIsSearching,
    handleChange,
    searchTodo,
    addTodo,
    editTask,
    deleteTodo,
    handleUndo,
    toastMessage,
    addCategory,
    todoCategory,
    isCategoryInput,
    setCategoryData,
    categoryData,
    isOpen,
    setIsOpen,
    isEditing,
  };
}

export default useTodo;
