import TodoSearch from "./TodoSearch";
import { IoMenu } from "react-icons/io5";
import { useState, useEffect } from "react";
import { LuPlus } from "react-icons/lu";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useRef } from "react";

function Nav({
  searchTodo,
  setSearchResult,
  setIsSearching,
  setIsOpen,
  setOpenSideNav,
  openMobileSearch,
  setOpenMobileSearch
}) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("selected-theme") || "light";
  });

  const menuRef = useRef(null);
  useOutsideClick(menuRef, ()=>{setOpenMobileSearch(false)});

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("selected-theme", theme);
  }, [theme]);

  return (
    <>
    {openMobileSearch && (<div ref={menuRef} className="flex md:hidden bg-amber-800 w-full absolute top-0 left-0 right-0 h-20  items-center justify-center z-50 px-10">
        <TodoSearch
          searchTodo={searchTodo}
          setIsSearching={setIsSearching}
          setSearchResult={setSearchResult}
        />
      </div>)}
      
      <nav className="flex justify-between items-center bg-brand-bg shadow-sm shadow-brand-text/30 px-6 h-20 border-b border-brand-text/10 md:justify-between fixed lg:ml-70 left-0 top-0 right-0 ">
        <h1 className="text-3xl font-black tracking-tighter text-brand-text select-none lg:hidden">
          JUST<span className="text-brand-accent">DO</span>
        </h1>


        {/*Md screen nv sizing */}
        <div className="hidden lg:hidden md:block">
          <TodoSearch
            searchTodo={searchTodo}
            setIsSearching={setIsSearching}
            setSearchResult={setSearchResult}
          />
        </div>

        <button
          className="p-1.5 rounded-lg hover:bg-brand-text/5 lg:hidden transition-colors"
          aria-label="Open menu"
          onClick={() => setOpenSideNav(true)}
        >
          <IoMenu size={28} className="text-brand-text" />
        </button>

        {/*Large screen*/}

        <p className="text-xl font-bold tracking-tight text-brand-text hidden lg:block">
          Projects
        </p>

        <div className="hidden lg:flex items-center gap-2 bg-brand-text/5 p-1 rounded-xl border border-brand-text/10">
          <h3 className=" font-bold text-brand-text">Theme</h3>

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

        <section className=" items-center gap-4 hidden lg:flex">
          <div className="hidden lg:block">
            <TodoSearch
              searchTodo={searchTodo}
              setIsSearching={setIsSearching}
              setSearchResult={setSearchResult}
            />
          </div>

          <button
            onClick={() => {
              setIsOpen(true);
              setOpenSideNav(false);
            }}
            className="lg:flex items-center justify-center gap-2 w-full p-3 bg-brand-accent hover:opacity-95 active:scale-[0.98] text-white font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-150 group hidden"
          >
            <LuPlus className="text-lg group-hover:rotate-90 transition-transform duration-200" />
            <span className="hidden lg:block">Add New Task</span>
          </button>
        </section>
      </nav>
    </>
  );
}

export default Nav;
