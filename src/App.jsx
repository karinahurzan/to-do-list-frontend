import Filters from "./components/Filters";
import Header from "./components/Header";
import Layout from "./components/Layout";
import SearchForm from "./components/SearchField";
import SelectChoice from "./components/SelectChoice";
import Todods from "./components/Todos";

function App() {
  return (
    <>
      <Header />
      <Layout>
        <Filters />
        <Todods />
      </Layout>
    </>
  );
}

export default App;
