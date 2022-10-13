import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskItem = ({ task, id }) => {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading${id}`}>
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
        <div className="accordion-body">
          {task.description}
        </div>
        <DeleteIcon style={{position: "relative", left: "47%", bottom: "5px", color: "red"}}/>
      </div>
    </div>
  );
};

export default TaskItem;

