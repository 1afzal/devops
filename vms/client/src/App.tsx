import { useState, useEffect } from "react";
import type { Todo } from "./types";


function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isError, setIsError] = useState(false);
  const [isloading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const result = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const data = await result.json()
        setTodos(data)
      }
      catch (err) {
        console.log("error in fetching result");
        setIsError(true)
      }
      finally {
        console.log("set loading to false/off")
        setIsLoading(false);
      }
    }
    fetchTodos()
  },[])


  if (isError) return <p>Error in fetching todos</p>
  if (isloading) return <p>Loadinggg.........</p>
  return (
    <div>
      {todos.map((todo)=>(
        <li key={todo.id}>
          <span>
          {todo.id}

          {todo.title}
          </span>
        </li>
      ))}
    </div>
  )

}
export default App;