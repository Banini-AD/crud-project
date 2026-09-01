import useTodo from "./hooks/useTodo";
import TodoForm from "./components/TodoForm";
import { useEffect, useState } from "react";
//import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Page from "./components/Page";

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
    isOpen,
    setIsOpen,
    isEditing,
    setIsEditing,
  } = useTodo();

  const [openSideNav, setOpenSideNav] = useState(false);

  useEffect(() => {
    console.log(openSideNav)
  }, [openSideNav]);

  return (
    <section className="flex relative min-h-screen bg-brand-bg">
      <SideNav setIsOpen={setIsOpen} openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} />

      <Page
        todoList={todoList}
        deleteTodo={deleteTodo}
        handleUndo={handleUndo}
        editTask={editTask}
        toastMessage={toastMessage}
        todoCategory={todoCategory}
        searchResult={searchResult}
        isSearching={isSearching}
        emptySearchInput={emptySearchInput}
        searchTodo={searchTodo}
        setIsSearching={setIsSearching}
        setSearchResult={setSearchResult}
        setIsOpen={setIsOpen}
        setOpenSideNav={setOpenSideNav}
      />

      {isOpen && (
        <TodoForm
          addTodo={addTodo}
          handleChange={handleChange}
          formData={formData}
          addCategory={addCategory}
          isCategoryInput={isCategoryInput}
          todoCategory={todoCategory}
          setCategoryData={setCategoryData}
          categoryData={categoryData}
          setIsOpen={setIsOpen}
          isEditing={isEditing}
        />
      )}
    </section>
  );
}

export default App;
