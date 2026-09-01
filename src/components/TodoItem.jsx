import { useState } from "react";

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
}) {
  const [selectedCat, setSelectedCat] = useState("all");

  const sortedTodo =
    isSearching && !emptySearchInput
      ? searchResult
      : selectedCat === "all"
        ? todoList
        : todoList.filter((todo) => todo.category === selectedCat);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
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
            className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-150 whitespace-nowrap ${
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
        <div className="flex flex-col gap-4">
          {sortedTodo.map((tsk, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-brand-surface border border-brand-text/10 rounded-xl shadow-sm hover:shadow-md transition-shadow gap-4"
            >
              <div className="flex flex-col gap-1.5 max-w-xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-lg font-bold text-brand-text leading-tight">
                    {tsk.title}
                  </h2>
                  <span className="px-2 py-0.5 text-xs font-semibold bg-brand-accent/10 text-brand-accent rounded-md">
                    {tsk.category}
                  </span>
                </div>
                {tsk.description && (
                  <p className="text-sm text-brand-text/60 leading-relaxed line-clamp-2">
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
              <div className="flex items-center gap-2 self-end sm:self-center">
                <button
                  className="px-3 py-1.5 text-sm font-semibold text-brand-text/70 hover:bg-brand-text/5 rounded-lg border border-brand-text/10 transition-colors"
                  onClick={() => editTask(tsk)}
                >
                  Edit
                </button>
                <button
                  className="px-3 py-1.5 text-sm font-semibold text-red-600 bg-red-50 hover:bg-red-100 rounded-lg transition-colors"
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
