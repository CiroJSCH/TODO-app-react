import { useContext, useState } from "react";
import { Button } from "@mui/material";
import { TaskContext } from "../context/TaskContext";
import TextField from "@mui/material/TextField";

const TaskForm = () => {
  const [name, setName] = useState("");
  const [errorName, setErrorName] = useState(false);
  const [errorNameDetail, setErrorNameDetail] = useState("");

  const [description, setDescription] = useState("");
  const [errorDescription, setErrorDescription] = useState(false);
  const [errorDescDetail, setErrorDescDetail] = useState("");

  const { createTask } = useContext(TaskContext);

  const nameHandler = (e) => {
    setName(e.target.value);
  };

  const descriptionHandler = (e) => {
    setDescription(e.target.value);
  };

  const submitHandler = () => {
    if (name === "") {
      setErrorName(true);
      setErrorNameDetail("This field is required");
    } else if (name.length > 30) {
      setErrorName(true);
      setErrorNameDetail("Max 30 characters");
    } else {
      setErrorName(false);
      setErrorNameDetail("");
    }

    if (description === "") {
      setErrorDescription(true);
      setErrorDescDetail("This field is required");
    } else if (description.length > 100) {
      setErrorDescription(true);
      setErrorDescDetail("Max 100 characters");
    } else {
      setErrorDescription(false);
      setErrorDescDetail("");
    }

    if (!errorName && !errorDescription) {
      if (name !== "" && description !== "") {
        createTask(name, description);
      }
    }
  };

  return (
    <div className="row d-flex flex-column align-items-center mt-5">
      <div className="col-lg-6 col-xs-12 mb-3 px-2 d-flex flex-column">
        <TextField
          id="outlined-basic-name"
          label="Task Name"
          variant="outlined"
          className="mb-3"
          onChange={nameHandler}
          value={name}
          error={errorName}
          helperText={errorNameDetail}
        />
        <TextField
          id="outlined-basic-description"
          label="Task Description"
          variant="outlined"
          multiline
          rows={4}
          onChange={descriptionHandler}
          value={description}
          error={errorDescription}
          helperText={errorDescDetail}
        />
        <Button
          className="mt-3 w-100"
          variant="contained"
          onClick={submitHandler}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default TaskForm;
