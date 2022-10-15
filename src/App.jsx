import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Footer from "./components/Footer";
import "./styles/App.css";

function App() {

  return (
    <>
      <div className="container text-center mt-3 d-flex flex-column min-vh-100">
        <h1 style={{color: "darkblue"}}>Todo List</h1>
        <TaskForm />
        <TaskList />
      </div>
      <Footer />
    </>
  );
}

export default App;
