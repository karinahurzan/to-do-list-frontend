import { Suspense } from "react";
import { selectIsLoading } from "../redux/todos/selectors";
import { useSelector } from "react-redux";
import Loader from "./Loader";

const Layout = ({ children }) => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <section className="py-4 h-full md:py-7 xl:py-10 ">
        <div className="max-w-sm relative mx-auto px-4 md:max-w-3xl md:px-8 xl:max-w-7xl xl:px-27 pb-20">
          {isLoading ? (
            <Loader />
          ) : (
            <Suspense fallback={<Loader />}>{children}</Suspense>
          )}
        </div>
      </section>
    </>
  );
};

export default Layout;
