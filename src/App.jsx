import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles/App.css";

function App() {

  return (
    <div className="container text-center mt-3 d-flex flex-column justify-content-center">
      <h1 style={{color: "darkblue"}}>Todo List</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}

export default App;
