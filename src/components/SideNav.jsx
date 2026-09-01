import { LuPlus } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

function SideNav({ setIsOpen, openSideNav, setOpenSideNav }) {
  return (
    <div
      className={`h-screen lg:w-[25%] min-w-60 max-w-80 bg-brand-surface border-r border-brand-text/10 lg:flex lg:flex-col lg:justify-between p-6 max-md:fixed max-md:inset-y-0 max-md:right-0 max-md:z-40 max-md:w-[85%] max-md:max-w-sm max-md:shadow-[0_0_30px_rgba(15,23,42,0.18)] max-md:transition-transform max-md:duration-300 ${
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
        <IoMdClose size={30} onClick={() => setOpenSideNav(false)} className="lg:hidden"/>
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
