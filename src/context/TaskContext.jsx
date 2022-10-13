import React,{ useState } from "react";

export const TaskContext = React.createContext();

const TaskContextProvider = (props) => {

  const [tasks, setTasks] = useState([]);

  const createTask = (name, description) => {
    setTasks([...tasks, {name, description, id: tasks.length}]);
  }

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
