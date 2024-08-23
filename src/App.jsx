import TaskList from "./components/TakList";
import TaskForm from "./components/TakForm";
import Snackbar from "./components/Snackbar";

const App =() => {
  return(
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 rounded-lg shadow-md bg-white text-center">
        <div className="mb-6">
          <h1 className="text-2x1 font-semibold">Task Tracker</h1>
        </div>
        <div className="mb-4">
          <TaskForm/>
          <TaskList/>
        </div>
        <Snackbar/>
      </div>

    </div>
  )
}

export default App 