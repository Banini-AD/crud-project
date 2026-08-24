import useTodo from "./hooks/useTodo";
import TodoItem from "./components/TodoItem";
import TodoForm from "./TodoForm";
import TodoSearch from "./TodoSearch";

function App() {
  const {
    todoList,
    formData,
    isSearching,
    searchResult,
    emptySearchInput,
    setIsSearching,
    //setSearchResult,
    handleChange,
    searchTodo,
    addTodo,
    editTask,
    deleteTodo,
    addCategory,
    todoCategory,
    isCategoryInput,
    setCategoryData,
    categoryData,
  } = useTodo();
  return (
    <div className="m-5">
      <h1 className="text-6xl font-black mb-3">Hi</h1>

      <TodoSearch
        searchResult={searchResult}
        searchTodo={searchTodo}
        setIsSearching={setIsSearching}
        isSearching={isSearching}
        emptySearchInput={emptySearchInput}
      />

      <TodoItem
        todoList={todoList}
        deleteTodo={deleteTodo}
        editTask={editTask}
        todoCategory={todoCategory}
      />

      <button className="border p-3 bg-blue-600 mb-4">Add New Task</button>
      <TodoForm
        addTodo={addTodo}
        handleChange={handleChange}
        formData={formData}
        addCategory={addCategory}
        isCategoryInput={isCategoryInput}
        todoCategory={todoCategory}
        setCategoryData={setCategoryData}
        categoryData={categoryData}
      />
    </div>
  );
}

export default App;
