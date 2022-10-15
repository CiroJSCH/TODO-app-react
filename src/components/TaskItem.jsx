import React, { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { TaskContext } from "../context/TaskContext";
import Switch from '@mui/material/Switch';
import Complete from "./Complete";

const TaskItem = ({ task, id }) => {

  const { deleteTask, toggleComplete } = useContext(TaskContext);

  return (
    <div className="accordion-item">
      <h2 className={`accordion-header ${task.completed ? "opacity-50" : null}`} id={`heading${id}`}>
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${id}`}
          aria-expanded="false"
          aria-controls={`collapse${id}`}
        >
          {task.name}
        </button>
      </h2>
      <div
        id={`collapse${id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${id}`}
        data-bs-parent="#accordionExample"
      >
        <div className={`accordion-body ${task.completed ? "opacity-50" : null}`}>
          {task.description}
        </div>
        <div className="d-flex align-items-center justify-content-between border-top ps-2">
          <Complete toggleComplete={toggleComplete} task={task}/>
          <DeleteIcon className="mx-1" style={{color: "darkred", cursor: "pointer"}} onClick={() => deleteTask(task.id)}/>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
