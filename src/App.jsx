import useTodo from "./hooks/useTodo";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import Nav from "./components/Nav";
import SideNav from "./components/SideNav";

function App() {
  const {
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
  } = useTodo();

  return (
    <section className="">
     
     <section className="flex">
      <SideNav/>

      <Nav
        searchTodo={searchTodo}
        setIsSearching={setIsSearching}
        setSearchResult={setSearchResult}
      />
     </section>
     

      <TodoItem
        todoList={todoList}
        deleteTodo={deleteTodo}
        handleUndo={handleUndo}
        editTask={editTask}
        toastMessage={toastMessage}
        todoCategory={todoCategory}
        searchResult={searchResult}
        isSearching={isSearching}
        emptySearchInput={emptySearchInput}
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
    </section>
  );
}

export default App;
