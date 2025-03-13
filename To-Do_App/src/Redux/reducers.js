const initialState = {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    filter: "ALL",
  };
  
  const todoReducer = (state = initialState, action) => {
    let newTodos;
    switch (action.type) {
      case "ADD_TODO":
        newTodos = [...state.todos, { id: Date.now(), text: action.payload, completed: false }];
        break;
      case "DELETE_TODO":
        newTodos = state.todos.filter((todo) => todo.id !== action.payload);
        break;
      case "TOGGLE_TODO":
        newTodos = state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        );
        break;
      case "SET_FILTER":
        return { ...state, filter: action.payload };
      default:
        return state;
    }
    localStorage.setItem("todos", JSON.stringify(newTodos));
    return { ...state, todos: newTodos };
  };
  
  export default todoReducer;
  