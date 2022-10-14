import TaskItem from "./TaskItem";
import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

const TaskList = () => {
  
  const { tasks } = useContext(TaskContext);

  return (
    <div
      className="accordion row d-flex flex-column d-flex align-items-center mt-5"
      id="accordionList"
    >
      <div className="form-floating col-lg-6 col-xs-12 mb-3 px-2">
        {
          tasks.length === 0 && <h1>You don't have any tasks yet. Add one</h1>
        }
        {
          tasks.map((task, index) => {
            return <TaskItem key={index} id={index} task={task}/>
          })
        }
      </div>
    </div>
  );
};

export default TaskList;

