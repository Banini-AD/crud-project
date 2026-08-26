import { useState } from "react";
function TodoItem({ todoList, deleteTodo,handleUndo, toastMessage, editTask, todoCategory, searchResult, isSearching , emptySearchInput}) {
  const [selectedCat , setSelectedCat] = useState("all")
  //const [sortedTodo, setSortedTodo] = useState(todoList);
  
  const sortedTodo = isSearching && !emptySearchInput ? (searchResult): (selectedCat === "all" ? todoList : todoList.filter(todo => todo.category === selectedCat))

  console.log(toastMessage)


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
      <div className=" flex gap-2 my-4 ">
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
      {sortedTodo.length === 0 && (
        <>
          <h1 className="text-2xl mb-3 ">
            <span className="text-6xl mb-3">😢</span>
            <br />
            {isSearching && !emptySearchInput ? ('No todos match your search'): ("No todos added yet")}
          
          </h1>
          {(!isSearching) && (<button className="mb-3">Add Todo</button>)}
         
        </>
      )}

      {sortedTodo.length > 0 &&
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

        
        {toastMessage && <div className="">
          <span>{toastMessage || "Checking"}</span> <br/>
          <button className="p-4 bg-amber-400 mb-4 " onClick={handleUndo}>Undo Delete</button>
        </div>}
        
        
        
    </div>
  );
}

export default TodoItem;
