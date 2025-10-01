import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CustomField from "./CustomField";

const validationSchema = Yup.object().shape({
  search: Yup.string().trim().min(3, "Enter at least 3 characters"),
});

export default function SearchField({ value, onSubmit, setSearch }) {
  return (
    <Formik
      initialValues={{ search: value }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        onSubmit(values.search);
        setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <div className="relative">
            <Field name="search">
              {({ field }) => (
                <input
                  {...field}
                  type="text"
                  value={value}
                  onChange={(event) => {
                    setSearch(event.target.value);
                  }}
                  placeholder="Search note..."
                  className="w-full max-h-10 border-1 border-[var(--color-purple)] outline-none py-3 px-4 rounded-[5px] !font-mono font-medium text-base placeholder:text-input text-purple hover:border-[rgba(108,99,255,0.4)]  hover:shadow-[0_0_1px_rgba(108,99,255,0.6)] md:min-w-[400px] xl:min-w-[700px] transition duration-300 ease-in"
                />
              )}
            </Field>
            <button
              type="submit"
              className="p-1 absolute right-[15px] bottom-[6px]"
            >
              <svg className="fill-purple " width="21" height="21">
                <use href="/icons.svg#icon-search"></use>
              </svg>
            </button>
          </div>
          <ErrorMessage name="search" component="div" className="" />
        </Form>
      )}
    </Formik>
  );
}
