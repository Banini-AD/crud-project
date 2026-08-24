import { useState } from "react";
function TodoItem({ todoList, deleteTodo, editTask, todoCategory }) {
  const [selectedCat , setSelectedCat] = useState("all")
  //const [sortedTodo, setSortedTodo] = useState(todoList);

  const sortedTodo = selectedCat === "all" ? todoList : todoList.filter(todo => todo.category === selectedCat)


  /*function sortTodos(title) {
    console.log(title);
    if (title === "all") {
      setSortedTodo(todoList);
      return;
    }

    const newSort = todoList.filter((todo) => todo.category === title);

    setSortedTodo(newSort);
  }*/
  return (
    <div>
      <div className=" flex gap-2">
        <button
          className="p-2 w-25 bg-gray-500 rounded-full"
          onClick={() => {
            setSelectedCat("all");
          }}
        >
          All
        </button>
        {todoCategory.map((category, index) => (
          <button
            className="p-2 bg-gray-500 rounded-full w-25"
            key={index}
            onClick={() => {
              setSelectedCat(category);
            }}
          >
            {category}
          </button>
        ))}
      </div>
      {todoList.length === 0 && (
        <>
          <h1 className="text-2xl mb-3 ">
            <span className="text-6xl mb-3">😢</span>
            <br />
            No todos added yet
          </h1>
          <button className="mb-3">Add Todo</button>
        </>
      )}

      {todoList.length > 0 &&
        sortedTodo.map((tsk, index) => (
          <div className="border p-4 flex gap-1 m-4" key={index}>
            <h2 className="text-2xl font-bold">{tsk.title}</h2>
            <p className="">{tsk.category}</p>
            <p className="">{tsk.date}</p>
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
  );
}

export default TodoItem;
