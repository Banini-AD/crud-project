function TodoSearch({searchResult, searchTodo, setIsSearching, isSearching, emptySearchInput}) {
  return (
    <div>
      <form
        role="search"
        onChange={searchTodo}
        onMouseEnter={() => {
          setIsSearching(true);
        }}
        onMouseLeave={() => {
          setIsSearching(false);
          searchResult([]);
        }}
      >
        <input
          type="search"
          name="q"
          className=" p-2 border"
          placeholder="Search through your tasks"
        />
      </form>
      
          {isSearching && (
        <ul className=" bg-gray-400">
          {searchResult.length > 0 ? (
            searchResult.map((result, index) => (
              <li key={index}>{result.title}</li>
            ))
          ) : (
            <li className="">
              {emptySearchInput
                ? "Enter to search"
                : "No todo matches your result"}
            </li>
          )}
        </ul>
      )}

    </div>
  )
}

export default TodoSearch
