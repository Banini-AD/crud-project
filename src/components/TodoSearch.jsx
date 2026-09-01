function TodoSearch({
  setSearchResult,
  searchTodo,
  setIsSearching,
}) {
  return (
    <div className="relative w-full max-w-md">
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
        className="w-full"
      >
        <input
          type="search"
          name="q"
          className="min-w-60 p-2.5 px-4 border border-brand-text/10 rounded-xl bg-brand-surface text-brand-text placeholder-brand-text/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all"
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
