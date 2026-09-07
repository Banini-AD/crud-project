import TodoItem from "./TodoItem";
import Nav from "./Nav";
//import CalendarComponentfrom "react-calendar";
function Page({todoCategory,todoList,deleteTodo,handleUndo,editTask,toastMessage,searchResult,isSearching, emptySearchInput, searchTodo, setIsSearching, setSearchResult, setIsOpen, setOpenSideNav, setTodo, setIsFullDisplay, openMobileSearch, setOpenMobileSearch}) {
  return (
    <div className="flex-1 lg:ml-60 "> 
          <Nav
        searchTodo={searchTodo}
        setIsSearching={setIsSearching}
        setSearchResult={setSearchResult}
        setIsOpen={setIsOpen}
        setOpenSideNav={setOpenSideNav}
        openMobileSearch={openMobileSearch}
        setIsFullDisplay={setIsFullDisplay}
        setOpenMobileSearch={setOpenMobileSearch}
      />
      {/*<CalendarComponent />*/}
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
        setIsFullDisplay={setIsFullDisplay}
        setTodo = {setTodo}
      />
    </div>
  )
}

export default Page
