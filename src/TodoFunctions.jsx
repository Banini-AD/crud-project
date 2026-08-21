import {useState} from 'react';

function TodoFunctions({todoList, setTodoList}) {
 // Initialize form state to track the input field value
  const [formData, setFormData] = useState({ title: " " });
  const [targetID, setTargetID] = useState(null);


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
  return { addTodo, todoList, targetID, setTargetID };
}

export default TodoFunctions
