import { useState } from "react";
import TodoModal from "./TodoModal";
import { createTodo, fetchTodos } from "../redux/todos/operations";
import { useDispatch } from "react-redux";

export default function AddNewTodo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();

  const updateCurrentTodo = async (values) => {
    const payload = {
      todo: values.todo,
      priority: Number(values.priority),
    };

    await dispatch(createTodo(payload));
    dispatch(fetchTodos());
    setIsModalOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="rounded-[100%] p-3.5 bg-purple hover:shadow-[0_0_4px_0_var(--color-purple)] border-2 border-purple hover:bg-dark-purple absolute right-8  bottom-5 transition duration-300 ease-in"
      >
        <svg className=" fill-white" width="24" height="24">
          <use href="/icons.svg#icon-plus"></use>
        </svg>
      </button>
      <TodoModal
        onSubmit={updateCurrentTodo}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
