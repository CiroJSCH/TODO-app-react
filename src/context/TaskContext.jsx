import React, { useState, useEffect } from "react";

export const TaskContext = React.createContext();

const TaskContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (name, description) => {
    setTasks([...tasks, { name, description, id: tasks.length }]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, { name, description, id: tasks.length }]));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    localStorage.setItem("tasks", JSON.stringify(tasks.filter((task) => task.id !== id)));
  };

  useEffect(() => {
    const tasksInLocal = localStorage.getItem("tasks");
    if (tasksInLocal !== null) {
      const tasksArray = JSON.parse(tasksInLocal);
      setTasks(tasksArray);
    }
  }, [tasks]);

  return (
    <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
