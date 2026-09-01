import TodoItem from "./TodoItem";
import Nav from "./Nav";
function Page({todoCategory,todoList,deleteTodo,handleUndo,editTask,toastMessage,searchResult,isSearching, emptySearchInput, searchTodo, setIsSearching, setSearchResult, setIsOpen, setOpenSideNav}) {
  return (
    <div className="flex-1"> 
          <Nav
        searchTodo={searchTodo}
        setIsSearching={setIsSearching}
        setSearchResult={setSearchResult}
        setIsOpen={setIsOpen}
        setOpenSideNav={setOpenSideNav}
      />
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
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default Page
