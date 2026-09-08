import { IoMdClose } from "react-icons/io";
import { HiOutlineCalendar, HiOutlineTag } from "react-icons/hi"; // Added for better visual anchors

function TodoFull({ todo, setIsFullDisplay }) {
  return (
    <section className="fixed inset-0 z-510 flex items-center justify-center bg-brand-text/60 p-4 backdrop-blur-lg transition-all">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-brand-bg  p-6 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-200 text-brand-text">
        
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 rounded-full p-1.5 text-brand-text/80  hover:bg-brand-text/10 hover:text-brand-text transition-colors focus:outline-none focus:ring-2 focus:ring-brand-text/70"
          onClick={() => setIsFullDisplay(false)}
          aria-label="Close details"
        >
          <IoMdClose size={24} />
        </button>

        {/* Category Tag */}
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-md bg-brand-accent/10 px-2.5 py-1 text-xs font-medium text-brand-accent/90 tracking-wide uppercase">
          <HiOutlineTag size={14} />
          {todo.category}
        </div>

        {/* Title */}
        <h1 className="pr-8 text-2xl font-bold tracking-tight text-brand-text sm:text-3xl">
          {todo.title}
        </h1>

        {/* Dates Meta */}
        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-brand-bg/10 pb-4 text-xs sm:text-sm text-brand-text">
          <div className="flex items-center gap-1.5">
            <HiOutlineCalendar size={16} className="text-brand-text/60" />
            <span>Starts: <span className="text-brand-text">{todo.startDate}</span></span>
          </div>
          <div className="flex items-center gap-1.5">
            <HiOutlineCalendar size={16} className="text-brand-text/60" />
            <span>Due: <span className="text-brand-text">{todo.dueDate}</span></span>
          </div>
        </div>

        <hr className="bg-brand-surface opacity-20" />

        {/* Description Body */}
        <div className="mt-5 max-h-[60vh] overflow-y-auto pr-1">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-brand-text/70">Description</h3>
          <p className="mt-1.5 text-base leading-relaxed text-brand-text whitespace-pre-line">
            {todo.description || "No description provided."}
          </p>
        </div>

        

      </div>
    </section>
  );
}

export default TodoFull;
