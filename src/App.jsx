import { useEffect, useState } from "react";
import Filters from "./components/Filters";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Todos from "./components/Todos";
import { fetchTodos } from "./redux/todos/operations";
import { useDispatch, useSelector } from "react-redux";
import { selectFilters, selectTodos } from "./redux/todos/selectors";
import AddNewTodo from "./components/AddNewTodo";
import { setFilters } from "./redux/todos/todosSlice";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector(selectTodos);
  const filters = useSelector(selectFilters);
  console.log(todos);
  console.log(filters);

  useEffect(() => {
    dispatch(fetchTodos(filters));
  }, [filters, dispatch]);

  const handleSetFilters = (newFilters) => {
    dispatch(setFilters(newFilters));
  };

  const [search, setSearch] = useState("");

  return (
    <>
      <Header />
      <Layout>
        <Filters
          setSearch={setSearch}
          filters={filters}
          onChangeFilters={handleSetFilters}
        />
        <Todos search={search} />
        <AddNewTodo />
      </Layout>
    </>
  );
}

export default App;
