function TodoSearch({
  setSearchResult,
  searchTodo,
  setIsSearching,
}) {
  return (
    <div >
      <form
        role="search"
        onChange={searchTodo}
        onFocus={() => {
          setIsSearching(true);
        }}
        onBlur={(e) => {
          // 2. Prevent closing if the user clicked an item inside the form
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsSearching(false);
            setSearchResult([]);
          }
        }}
      >
        <input
          type="search"
          name="q"
          className=" p-2 border"
          placeholder="Search through your tasks"
        />
      </form>

      {/*isSearching && (
        <ul className=" bg-gray-400">
          {searchResult.length > 0 ? (
            searchResult.map((result, index) => (
              <li key={index} onClick={()=>{console.log(result.title)}}>{result.title}</li>
            ))
          ) : (
            <li className="">
              {emptySearchInput
                ? "Enter to search"
                : "No todo matches your result"}
            </li>
          )}
        </ul>
      )*/}
    </div>
  );
}

export default TodoSearch;
