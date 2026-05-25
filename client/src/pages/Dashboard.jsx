import { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/tasks",
      {
        headers: {
          authorization: token
        }
      }
    );

    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post(
      "http://localhost:5000/api/tasks",
      { title },
      {
        headers: {
          authorization: token
        }
      }
    );

    setTitle("");
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold mb-5">
        TaskFlow
      </h1>

      <div className="flex gap-3 mb-6">
        <input
          className="border p-2 rounded"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          placeholder="Add task"
        />

        <button
          onClick={addTask}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      {tasks.map((task) => (
        <div
          key={task._id}
          className="border p-4 rounded mb-3"
        >
          {task.title}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
