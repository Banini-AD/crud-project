import { IoMdClose } from "react-icons/io";
function TodoFull({ todo, setIsFullDisplay }) {
  return (
    <section className="fixed  z-100 inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm ">
      <button
        className="top-4 right-4 absolute"
        onClick={() => setIsFullDisplay(false)}
      >
        <IoMdClose size={30} />
      </button>
      <div className="">
        <h1 className="text-2xl font-bold mb-4 text-white">{todo.title}</h1>
        <span className="text-sm text-brand-text/60">{todo.category}</span>
        <span className="text-sm text-brand-text/60 ml-2">
          {todo.startDate}
        </span>
        <span className="text-sm text-brand-text/60 ml-2">{todo.dueDate}</span>
        <p className="text-white">{todo.description}</p>
      </div>
    </section>
  );
}

export default TodoFull;
