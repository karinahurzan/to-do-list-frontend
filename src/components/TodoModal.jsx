import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

import { useEffect } from "react";

const validationSchema = Yup.object().shape({
  todo: Yup.string().trim().min(3, "Enter at least 3 characters"),
  priority: Yup.number()
    .min(1, "Priority must be at least 1")
    .max(10, "Priority cannot be more than 10"),
});

export default function TodoModal({
  text,
  priority,
  isOpen,
  onClose,
  onSubmit,
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (values) => {
    onSubmit(values);
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 w-full bg-black/50 flex justify-center items-center z-[9999]"
    >
      <div
        className="min-w-[200px] max-w-[350px] md:min-w-[400px] md:max-w-[450px] xl:min-w-[500px] xl:max-w-[550px] rounded-2xl bg-white py-5 px-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2.5">
          <h1 className="font-medium text-center block text-2xl uppercase text-black">
            New note
          </h1>
        </div>

        <Formik
          initialValues={{
            todo: text ?? "",
            priority: priority ?? "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ values }) => (
            <Form className="">
              <div className="flex mb-20 justify-center items-center gap-2.5 flex-nowrap flex-col">
                <Field name="todo">
                  {({ field }) => (
                    <input
                      {...field}
                      type="text"
                      placeholder="Input your note...*"
                      className="w-full max-h-10 border-1 border-[var(--color-purple)] outline-none py-3 px-4 rounded-[5px] !font-mono font-medium text-base placeholder:text-input text-purple hover:border-[rgba(108,99,255,0.4)]  hover:shadow-[0_0_1px_rgba(108,99,255,0.6)] transition duration-300 ease-in"
                    />
                  )}
                </Field>
                <ErrorMessage name="todo" />
                <Field name="priority">
                  {({ field }) => (
                    <input
                      {...field}
                      type="number"
                      min={1}
                      max={10}
                      placeholder="Input your note's priority..."
                      className="w-full max-h-10 border-1 border-[var(--color-purple)] outline-none py-3 px-4 rounded-[5px] !font-mono font-medium text-base placeholder:text-input text-purple hover:border-[rgba(108,99,255,0.4)]  hover:shadow-[0_0_1px_rgba(108,99,255,0.6)] transition duration-300 ease-in"
                    />
                  )}
                </Field>
              </div>{" "}
              <div className="flex justify-between flex-col gap-2.5 md:flex-row items-center w-full">
                <button
                  type="button"
                  onClick={onClose}
                  className="border border-purple rounded-[5px] py-2.5 px-6 font-medium text-lg !uppercase text-purple"
                >
                  Cancel
                </button>
                <button
                  disabled={values.todo.length < 3}
                  type="submit"
                  className="disabled:bg-[rgba(108,99,255,0.2)] enabled:bg-purple rounded-[5px] py-2.5 px-6 font-medium text-lg !uppercase text-white"
                >
                  Apply
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
