import { Field } from "formik";

export default function CustomField({ value, name }) {
  return (
    <Field name={name}>
      {({ field }) => (
        <input
          {...field}
          type="text"
          value={value}
          placeholder="Search note..."
          className="w-full max-h-10 border-1 border-[var(--color-purple)] outline-none py-3 px-4 rounded-[5px] !font-mono font-medium text-base placeholder:text-input text-purple hover:border-[rgba(108,99,255,0.4)]  hover:shadow-[0_0_1px_rgba(108,99,255,0.6)] md:min-w-[400px] xl:min-w-[700px] transition duration-300 ease-in"
        />
      )}
    </Field>
  );
}
