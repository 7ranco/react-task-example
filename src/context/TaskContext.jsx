import { createContext, useState, useEffect } from "react";
import { tasks as json } from "../data/Task";

export const TaskContext = createContext();

export const TaskContextProvider = (props) => {
  const [tasks, setTask] = useState([]);  

  const addTask = (task) => {
    setTask([
      ...tasks,
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  };

  const dropTask = (taskId) => {
    setTask(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTask(json);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        dropTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};
