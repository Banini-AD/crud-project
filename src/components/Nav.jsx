import TodoSearch from "./TodoSearch";
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
function Nav({ searchTodo, setSearchResult, setIsSearching}) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("selected-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("selected-theme", theme);
  }, [theme]);

  return (
    <nav className="flex justify-between items-center bg-brand-bg shadow shadow-brand-text p-2 w-[75vw] h-20">
      <p className="">Projects</p>
      <IoMenu size={30} className="lg:hidden" />
      {["light", "dark", "sepia"].map((t) => (
        <button
          key={t}
          onClick={() => setTheme(t)}
          className="px-3 py-1.4 rounded-lg border border-brand-text hidden"
        >
          {t}
        </button>
      ))}

      <section className="hidden lg:flex">
        <TodoSearch
          searchTodo={searchTodo}
          setIsSearching={setIsSearching}
          setSearchResult={setSearchResult}
        />
        <button className="bg-brand-accent">+ New Task</button>
      </section>
    </nav>
  );
}

export default Nav;
