import { useContext, useRef } from "react";
import { Button } from "@mui/material";
import { TaskContext } from "../context/TaskContext";

const TaskForm = () => {

  const refName = useRef(null);
  const refDescription = useRef(null);

  const { createTask }= useContext(TaskContext);

  const submitHandler = () => {
    createTask(refName.current.value, refDescription.current.value);
    refName.current.value = "";
    refDescription.current.value = "";
  }

  return (
    <div className="container mt-5">
      <div className="row d-flex flex-column d-flex align-items-center">
        <div className="form-floating col-lg-6 col-xs-12 mb-3 px-2">
          <input
            type="Name"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
            ref={refName}
          ></input>
          <label htmlFor="floatingInput">Task name</label>
        </div>
        <div className="form-floating col-lg-6 col-xs-12 px-2">
          <textarea
            type="description"
            className="form-control"
            id="floatingDescription"
            placeholder="Description"
            style={{ height: "7rem", resize: "none" }}
            ref={refDescription}
          ></textarea>
          <label htmlFor="floatingDescription">Task description</label>
          <Button className="mt-3 w-100" variant="contained" onClick={submitHandler}>Add Task</Button>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
