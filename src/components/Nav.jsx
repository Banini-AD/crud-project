import TodoSearch from "./TodoSearch";
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";

function Nav({ searchTodo, setSearchResult, setIsSearching, setIsOpen, setOpenSideNav }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("selected-theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("selected-theme", theme);
  }, [theme]);

  return (
    <nav className="flex justify-between items-center bg-brand-bg shadow-sm shadow-brand-text/30 px-6 h-20 border-b border-brand-text/10 md:justify-between">
      
      <div className="flex items-center gap-4 flex-row-reverse lg:flex-row justify-between w-full md:w-auto">
        <button className="p-1.5 rounded-lg hover:bg-brand-text/5 transition-colors md:hidden" aria-label="Open menu" >
          <IoMenu size={28} className="text-brand-text" onClick={() => setOpenSideNav(true)}/>
        </button>
        <p className="text-xl font-bold tracking-tight text-brand-text">Projects</p>
      </div>

{/*Md screen nv sizing */}
      <div className="hidden lg:hidden md:block">
          <TodoSearch
            searchTodo={searchTodo}
            setIsSearching={setIsSearching}
            setSearchResult={setSearchResult}
          />
        </div>

        <button className="p-1.5 rounded-lg hover:bg-brand-text/5 lg:hidden hidden md:block transition-colors" aria-label="Open menu" onClick={() => setOpenSideNav(true)}>
          <IoMenu size={28} className="text-brand-text" />
        </button>

      <div className="hidden lg:flex items-center gap-2 bg-brand-text/5 p-1 rounded-xl border border-brand-text/10">
        {["light", "dark", "sepia"].map((t) => (
          <button
            key={t}
            onClick={() => setTheme(t)}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold capitalize transition-all duration-150 ${
              theme === t
                ? "bg-brand-bg text-brand-text shadow-sm border border-brand-text/20 scale-105"
                : "text-brand-text/60 hover:text-brand-text hover:bg-brand-bg/50"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <section className="flex items-center gap-4">
        <div className="hidden lg:block">
          <TodoSearch
            searchTodo={searchTodo}
            setIsSearching={setIsSearching}
            setSearchResult={setSearchResult}
          />
        </div>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-brand-accent hover:opacity-90 active:scale-95 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-sm hover:shadow transition-all duration-150 whitespace-nowrap lg:block hidden"
        >
          + New Task
        </button>
      </section>
    </nav>
  );
}

export default Nav;
