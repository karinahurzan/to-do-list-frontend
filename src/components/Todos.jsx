import { useSelector } from "react-redux";
import Todo from "./Todo";
import { v4 as uuidv4 } from "uuid";
import { selectTodos } from "../redux/todos/selectors";

export default function Todos({ search }) {
  const todos = useSelector(selectTodos);

  const totalTodos = todos.filter((todo) =>
    todo.todo.toLowerCase().includes(search.toLowerCase())
  );

  if (totalTodos.length === 0)
    return (
      <>
        <svg className="mx-auto my-5 " width="215" height="170">
          <use href="/not-found.svg"></use>
        </svg>
        <p className="font-normal text-xl capitalize text-black text-center">
          Empty...
        </p>
      </>
    );

  return (
    <ul className="flex flex-col">
      {totalTodos.map((todo) => (
        <Todo
          key={uuidv4()}
          id={todo._id}
          text={todo.todo}
          priority={todo.priority}
          status={todo.status}
        />
      ))}
    </ul>
  );
}
