import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, toggleTodo, setFilter } from "../Redux/actions";

export default function Todo() {
  const dispatch = useDispatch();
  const { todos, filter } = useSelector((state) => state);

  const filteredTodos = todos.filter((todo) =>
    filter === "COMPLETED" ? todo.completed : filter === "PENDING" ? !todo.completed : true
  );

  return (
    <div>
      <h2>Todo App</h2>
      <input type="text" id="todoInput" />
      <button onClick={() => dispatch(addTodo(document.getElementById("todoInput").value))}>
        Add Todo
      </button>

      <div>
        <button onClick={() => dispatch(setFilter("ALL"))}>All</button>
        <button onClick={() => dispatch(setFilter("COMPLETED"))}>Completed</button>
        <button onClick={() => dispatch(setFilter("PENDING"))}>Pending</button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ textDecoration: todo.completed ? "line-through" : "none", cursor: "pointer" }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
