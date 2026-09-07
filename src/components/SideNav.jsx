import { LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { useState, useEffect } from "react";

function SideNav({ setIsOpen, openSideNav, setOpenSideNav, setOpenMobileSearch }) {
  const [theme, setTheme] = useState(() => {
      return localStorage.getItem("selected-theme") || "light";
    });
  
    useEffect(() => {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("selected-theme", theme);
    }, [theme]);
  return (
    <div
      className={`h-screen lg:w-70 bg-brand-surface border-r border-brand-text/10 flex flex-col justify-between p-6 fixed top-0 left-0 max-md:inset-y-0 z-60
        md:backdrop-blur-sm
        max-md:right-0 max-md:z-40 w-full max-md:shadow-[0_0_30px_rgba(15,23,42,0.18)] max-md:transition-transform max-md:duration-300 ${
        openSideNav
          ? "max-[50rem]:translate-x-0 max-[50rem]:opacity-100 backdrop-blur-sm"
          : "max-[50rem]:-translate-x-full max-[50rem]:opacity-0"
      }`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black tracking-tighter text-brand-text select-none">
          JUST<span className="text-brand-accent">DO</span>
        </h1>


        <button className="lg:hidden text-brand-text" onClick={() => setOpenSideNav(false)}>
          <IoMdClose size={30} />
        </button>
        </div>

        <button className="hover:text-brand-accent transition-colors cursor-pointer w-full text-center hidden max-md:block text-brand-text/90 font-bold text-2xl items-center justify-start flex-1" onClick={()=>{setOpenMobileSearch(true); setOpenSideNav(false)}}>Search </button>

        <div className="flex lg:hidden justify-center items-center gap-4 bg-brand-text/5 p-1 rounded-xl border border-brand-text/10">
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



        <button 
          onClick={() => {
            setIsOpen(true);
            setOpenSideNav(false);
          }}
          className="flex items-center justify-center gap-2 w-full p-3 bg-brand-accent hover:opacity-95 active:scale-[0.98] text-white font-semibold rounded-xl shadow-sm hover:shadow transition-all duration-150 group"
        >
          <LuPlus className="text-lg group-hover:rotate-90 transition-transform duration-200" />
          <span>Add New Task</span>


        </button>
      </div>

      <div className="text-xs text-brand-text/40 font-medium tracking-wide uppercase">
        © JustDo App
      </div>
    </div>
  );
}

export default SideNav;
