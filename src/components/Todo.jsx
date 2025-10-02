import Checkbox from "@mui/material/Checkbox";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, fetchTodos, updateTodo } from "../redux/todos/operations";
import { useState, useEffect } from "react";
import TodoModal from "./TodoModal";
import { selectFilters } from "../redux/todos/selectors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export default function Todo({ text, priority, id, status }) {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [checked, setChecked] = useState(status === "done");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setChecked(status === "done");
  }, [status]);

  const handleDeleteTodo = async () => {
    await dispatch(deleteTodo(id));
    dispatch(fetchTodos(filters));
  };

  const updateCurrentTodo = async (values) => {
    await dispatch(updateTodo({ todoId: id, payload: values }));
    dispatch(fetchTodos(filters));
  };

  const handleChangeStatus = async () => {
    const newStatus = !checked ? "done" : "undone";
    setChecked(!checked);
    await dispatch(updateTodo({ todoId: id, payload: { status: newStatus } }));
  };

  return (
    <>
      <li
        style={{ cursor: "url('/cursor.webp') 15 15, pointer" }}
        className="flex py-2 md:py-3 xl:py-4 justify-between items-center not-last:border-b not-last:border-b-purple"
        onPointerDown={() => setIsHovered(true)}
        onPointerMove={() => setIsHovered(true)}
        onPointerLeave={() => {
          if (window.matchMedia("(max-width: 770px)").matches) {
            setTimeout(() => setIsHovered(false), 3000);
          } else {
            setIsHovered(false);
          }
        }}
      >
        <div className="flex justify-center items-center gap-2.5 md:gap-6 xl:gap-10">
          <Checkbox
            {...label}
            checked={checked}
            onChange={handleChangeStatus}
            sx={{
              cursor: "url('/cursor.webp') 15 15, pointer",
              color: "var(--color-purple)",
              borderWidth: "1px",
              padding: "6px",
              "&.Mui-checked": { color: "var(--color-purple)" },
              "&.MuiCheckbox-root": { padding: 0 },
            }}
          />
          <div
            style={{
              textDecorationLine: checked ? "line-through" : "none",
              color: "var(--color-gray)",
            }}
            className="flex justify-center gap-2.5"
          >
            <p
              style={{ color: checked && "var(--color-gray)" }}
              className="font-medium text-black text-[15px] md:text-xl max-w-25 md:max-w-full uppercase"
            >
              {priority}
            </p>
            <p
              style={{ color: checked && "var(--color-gray)" }}
              className="font-medium text-black text-[15px] md:text-xl max-w-25 container-sm:max-w-full md:max-w-full uppercase truncate"
            >
              {text}
            </p>
          </div>
        </div>

        <div
          className="flex justify-center gap-2.5 transition duration-300 ease-in"
          style={{ opacity: isHovered ? 1 : 0 }}
        >
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex justify-center items-center"
          >
            <svg className="w-5 h-5 stroke-gray fill-none hover:stroke-purple transition duration-300 ease-in">
              <use href="/icons.svg#icon-pencil"></use>
            </svg>
          </button>
          <button
            onClick={handleDeleteTodo}
            className="flex justify-center items-center"
          >
            <svg
              className="w-5 h-5 stroke-gray hover:stroke-red transition duration-300 ease-in"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M3.87426 7.61505C3.80724 6.74386 4.49607 6 5.36983 6H12.6302C13.504 6 14.1928 6.74385 14.1258 7.61505L13.6065 14.365C13.5464 15.1465 12.8948 15.75 12.1109 15.75H5.88907C5.10526 15.75 4.4536 15.1465 4.39348 14.365L3.87426 7.61505Z" />
              <path d="M14.625 3.75H3.375" strokeLinecap="round" />
              <path d="M7.5 2.25C7.5 1.83579 7.83577 1.5 8.25 1.5H9.75C10.1642 1.5 10.5 1.83579 10.5 2.25V3.75H7.5V2.25Z" />
              <path d="M10.5 9V12.75" strokeLinecap="round" />
              <path d="M7.5 9V12.75" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </li>
      <TodoModal
        text={text}
        priority={priority}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={updateCurrentTodo}
      />
    </>
  );
}
