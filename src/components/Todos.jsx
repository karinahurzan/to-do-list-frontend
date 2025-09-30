import Todo from "./Todo";

export default function Todods() {
  return (
    <ul>
      <li>
        <Todo text="Call mom" priority={10} />
      </li>
      <li>
        <Todo text="Call mom" priority={10} />
      </li>
    </ul>
  );
}
