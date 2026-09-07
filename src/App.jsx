import useTodo from "./hooks/useTodo";
import TodoForm from "./components/TodoForm";
import { useState } from "react";
//import Nav from "./components/Nav";
import SideNav from "./components/SideNav";
import Page from "./components/Page";
import TodoFull from "./components/TodoFull";

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
    isFullDisplay,
    setIsFullDisplay,
    todo,
    setTodo,
    openMobileSearch,
    setOpenMobileSearch
  } = useTodo();

  const [openSideNav, setOpenSideNav] = useState(false);


  return (
    <section className="flex relative min-h-screen bg-brand-bg pt-20">
      <SideNav setIsOpen={setIsOpen} openSideNav={openSideNav} setOpenSideNav={setOpenSideNav} setOpenMobileSearch={setOpenMobileSearch} />

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
        setTodo={setTodo}
        setIsFullDisplay={setIsFullDisplay}
        openMobileSearch={openMobileSearch}
        setOpenMobileSearch={setOpenMobileSearch}
      />

        {isFullDisplay && (
        <TodoFull todo={todo} setIsFullDisplay={setIsFullDisplay}/>)}



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
