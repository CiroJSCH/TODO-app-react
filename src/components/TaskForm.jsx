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
  const [errorDesDetail, setErrorDesDetail] = useState("");

  const { createTask } = useContext(TaskContext);

  const submitHandler = () => {
    let nameOk = false;
    let descriptionOk = false;

    if (name === "") {
      setErrorName(true);
      setErrorNameDetail("This field is required");
    } else if (name.length > 30) {
      setErrorName(true);
      setErrorNameDetail("Max 30 characters");
    } else {
      setErrorName(false);
      setErrorNameDetail("");
      nameOk = true;
    }

    if (description === "") {
      setErrorDescription(true);
      setErrorDesDetail("This field is required");
    } else if (description.length > 200) {
      setErrorDescription(true);
      setErrorDesDetail("Max 200 characters");
    } else {
      setErrorDescription(false);
      setErrorDesDetail("");
      descriptionOk = true;
    }

    if (nameOk && descriptionOk) {
      createTask(name, description);
      setName("");
      setDescription("");
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
          onChange={(e) => setName(e.target.value)}
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
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          error={errorDescription}
          helperText={errorDesDetail}
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

