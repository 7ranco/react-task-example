import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { addTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    // preventDefault cancela el comportamiento por defecto de un elemento
    e.preventDefault();
    addTask({
      title,
      description,
    });
    setTitle("");
    setDescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-lg">
        <h1 className="text-4xl text-center font-bold text-white mb-3">Crea tu tarea</h1>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        placeholder="Writte the title task please"
        value={title}
        className="bg-slate-300 p-3 w-full mb-2 text-xl"
        autoFocus
      />
      <textarea
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        placeholder="Writte the description please"
        value={description}
        className="bg-slate-300 p-3 w-full mb-2 text-xl"

      ></textarea>
      <button className="bg-white px-3 py-1 w-full font-bold text-xl text-black rounded">Save</button>
    </form>
    </div>
  );
};

export default TaskForm;
