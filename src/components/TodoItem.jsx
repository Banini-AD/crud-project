import { useState } from "react";
import { LuPlus } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";

function TodoItem({
  todoList,
  deleteTodo,
  handleUndo,
  toastMessage,
  editTask,
  todoCategory,
  searchResult,
  isSearching,
  emptySearchInput,
  setIsOpen,
  setIsFullDisplay,
  setTodo,
}) {
  const [selectedCat, setSelectedCat] = useState("all");
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(null);

  const sortedTodo =
    isSearching && !emptySearchInput
      ? searchResult
      : selectedCat === "all"
        ? todoList
        : todoList.filter((todo) => todo.category === selectedCat);

  return (
    <div className="w-full max-w-4xl mx-auto p-4 ">
      <button
        onClick={() => {
          setIsOpen(true);
        }}
        className="items-center justify-center gap-2 p-3 bg-brand-accent hover:opacity-95 active:scale-[0.98] text-white font-semibold rounded-full shadow-sm hover:shadow transition-all duration-150 group fixed bottom-20 right-10 lg:hidden z-20"
      >
        <LuPlus
          className="text-lg group-hover:rotate-90 transition-transform duration-200"
          size={40}
        />
      </button>
      <div className="flex gap-2 my-6 overflow-x-auto pb-2 scrollbar-none">
        <button
          className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-150 ${
            selectedCat === "all"
              ? "bg-brand-accent text-white border-brand-accent shadow-sm"
              : "bg-brand-surface text-brand-text/70 border-brand-text/10 hover:bg-brand-text/5"
          }`}
          onClick={() => setSelectedCat("all")}
        >
          All
        </button>
        {todoCategory.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-150 whitespace-nowrap  ${
              selectedCat === category
                ? "bg-brand-accent text-white border-brand-accent shadow-sm"
                : "bg-brand-surface text-brand-text/70 border-brand-text/10 hover:bg-brand-text/5"
            }`}
            onClick={() => setSelectedCat(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {sortedTodo.length === 0 && (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <span className="text-6xl mb-4 select-none">😢</span>
          <h1 className="text-xl font-bold text-brand-text">
            {isSearching && !emptySearchInput
              ? "No tasks match your search"
              : "No tasks added yet"}
          </h1>
          {!isSearching && (
            <button
              className="mt-4 px-5 py-2 bg-brand-accent text-white text-sm font-semibold rounded-xl shadow-sm hover:opacity-90 transition-opacity"
              onClick={() => {
                setIsOpen(true);
              }}
            >
              Add Task
            </button>
          )}
        </div>
      )}

      {sortedTodo.length > 0 && (
        <div className="flex flex-col gap-4 ">
          {sortedTodo.map((tsk, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-brand-surface border border-brand-text/10 rounded-xl shadow-sm hover:shadow-md relative transition-shadow gap-4 max-sm:max-w-[90vw]"
            onClick={()=> moreOptionsOpen === tsk.id &&setMoreOptionsOpen(null)}>
              <div className="flex flex-col gap-1.5 max-w-xl max-sm:relative">
                <span
                  className="max-sm:flex items-center justify-center absolute top-0 right-0  cursor-pointer hover:bg-brand-text/20 transition-colors hidden"
                  onClick={() => {
                    moreOptionsOpen === tsk.id
                      ? setMoreOptionsOpen(null)
                      : setMoreOptionsOpen(
                          moreOptionsOpen === tsk.id ? null : tsk.id,
                        );
                  }}
                >
                  <BsThreeDots className="text-brand-text/40 " size={20} />
                </span>
                <div className="flex items-center gap-2 flex-wrap ">
                  <h2
                    className="text-lg font-bold text-brand-text leading-tight truncate max-w-[75%] cursor-pointer hover:underline"
                    onClick={() => {
                      setIsFullDisplay(true);
                      setTodo(tsk);
                    }}
                  >
                    {tsk.title}
                  </h2>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-brand-accent/10 text-brand-accent rounded-md">
                    {tsk.category}
                  </span>
                </div>
                {tsk.description && (
                  <p className="text-sm text-brand-text/60 leading-relaxed line-clamp-2 truncate max-w-full">
                    {tsk.description}
                  </p>
                )}
                {(tsk.startDate || tsk.dueDate) && (
                  <div className="flex items-center gap-3 text-xs text-brand-text/40 mt-1 font-medium">
                    {tsk.startDate && <span>Start: {tsk.startDate}</span>}
                    {tsk.dueDate && <span>Due: {tsk.dueDate}</span>}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div
                className={` items-center gap-2 self-end sm:self-center md:flex max-sm:absolute top-10 right-0 flex-col bg-brand-surface/90 p-4 rounded-b-lg max-sm:shadow-md max-sm:bg-brand-surface  md:bg-transparent md:p-0 md:flex-row ${moreOptionsOpen === tsk.id ? "flex z-60" : "max-sm:hidden"}`}
              >
                <button
                  className="px-3 py-1.5 text-sm font-semibold text-brand-text/70 hover:bg-brand-text/5 rounded-lg border border-brand-text/10 transition-colors w-full"
                  onClick={() => editTask(tsk)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1.5 text-sm font-semibold border border-brand-text/10  w-full text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
                  onClick={() => deleteTodo(tsk)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {toastMessage && (
        <div className="fixed bottom-6 right-6 flex items-center justify-between gap-4 p-4 bg-gray-900 text-white rounded-xl shadow-xl z-50 animate-fadeIn min-w-70">
          <span className="text-sm font-medium">{toastMessage}</span>
          <button
            className="px-3 py-1.5 text-xs font-bold bg-amber-400 text-gray-900 hover:bg-amber-300 rounded-lg transition-colors whitespace-nowrap shadow-sm"
            onClick={handleUndo}
          >
            Undo
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoItem;
