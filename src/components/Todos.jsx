import React, { useEffect, useState } from "react";
import axios from "axios";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=12")
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-green-600">Todos</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {todos.map(todo => (
          <div key={todo.id} className={`p-5 rounded-lg shadow-md border ${todo.completed ? "bg-green-200 border-green-500" : "bg-white border-gray-300"}`}>
            <h2 className="text-lg font-semibold text-gray-800">{todo.title}</h2>
            <p className={`mt-2 px-3 py-1 rounded-full text-sm font-medium inline-block ${todo.completed ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>{todo.completed ? "Completed" : "Not Completed"}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Todos;
