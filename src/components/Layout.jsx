import { Suspense } from "react";
// import { useSelector } from "react-redux";
// import Loader from "../Loader/Loader";
// import { selectAuthIsLoading } from "../../redux/auth/selectors";

const Layout = ({ children }) => {
  //   const isUserLoading = useSelector(selectAuthIsLoading);

  return (
    <>
      <section className="py-10 min-h-full md:py-15 xl:py-20">
        <div className="max-w-sm mx-auto px-4 md:max-w-3xl md:px-8 xl:max-w-7xl xl:px-27">
          {/* {isUserLoading ? (
            <Loader />
          ) : (
            <Suspense fallback={<Loader />}>{children}</Suspense>
          )} */}
          {children}
        </div>
      </section>
    </>
  );
};

export default Layout;
