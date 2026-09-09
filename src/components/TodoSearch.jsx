function TodoSearch({
  setSearchResult,
  searchTodo,
  setIsSearching,
}) {
  return (
    <div className="relative w-full max-w-md  flex justify-center items-center">
      <form
        role="search"
        onChange={searchTodo}
        onFocus={() => {
          setIsSearching(true);
        }}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) {
            setIsSearching(false);
            setSearchResult([]);
          }
        }}
        className="w-full flex items-center justify-center"
      >
        <input
          type="search"
          name="q"
          className="min-w-60 p-2.5 px-4 border border-brand-text/10 rounded-xl bg-brand-surface text-brand-text placeholder-brand-text/40 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 focus:border-brand-accent transition-all"
          placeholder="Search through your tasks"
        />
      </form>
    </div>
  );
}

export default TodoSearch;
