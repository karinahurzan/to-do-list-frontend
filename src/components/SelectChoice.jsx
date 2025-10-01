import Select from "react-select";

export default function SelectChoice({
  placeholder,
  options,
  value,
  onChange,
}) {
  return (
    <div className="flex-1">
      <Select
        id="brands"
        placeholder={placeholder}
        options={options}
        value={value}
        onChange={onChange}
        styles={{
          placeholder: (base) => ({
            ...base,
            padding: 0,
            color: "var(--color-white)",
            fontFamily: "var(--font-family)",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "100%",
            textTransform: "uppercase",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }),
          singleValue: (base) => ({
            ...base,
            padding: 0,
            color: "var(--color-white)",
            fontFamily: "var(--font-family)",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "100%",
            textTransform: "uppercase",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }),
          control: (base) => ({
            ...base,
            cursor: "url('/cursor.webp') 15 15, pointer",
            color: "var(--color-white)",
            fontFamily: "var(--font-family)",
            fontWeight: 500,
            fontSize: "18px",
            lineHeight: "100%",
            textTransform: "uppercase",
            minHeight: "40px",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            backgroundColor: "var(--color-purple)",
            boxShadow: "none",
            border: "2px solid transparent",
            "&:hover": {
              boxShadow: "0 0 4px 0 var(--color-purple)",
              backgroundColor: "var(--color-dark-purple)",
              border: "2px solid var(--color-purple)",
              transition:
                "box-shadow 300ms ease-in-out, background-color 300ms ease-in-out, border 300ms ease-in-out",
            },
            "&:focus": {
              boxShadow: "0 0 4px 0 var(--color-purple)",
              backgroundColor: "var(--color-dark-purple)",
              border: "2px solid var(--color-purple)",
              transition:
                "box-shadow 300ms ease-in-out, background-color 300ms ease-in-out, border 300ms ease-in-out",
            },
          }),
          menu: (base) => ({
            ...base,
            cursor: "url('/cursor.webp') 15 15, pointer",
            borderRadius: "5px",
            backgroundColor: "var(--color-white)",
            padding: "9px 6px",
            border: "1px solid var(--color-purple)",
          }),
          option: (base, state) => ({
            ...base,
            fontFamily: "var(--font-kanit)",
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            textTransform: "capitalize",
            color: "var(--color-purple)",
            cursor: "url('/cursor.webp') 15 15, pointer",
            transition: "background-color 300ms ease-in-out",
            backgroundColor: state.isFocused
              ? "rgba(108, 99, 255, 0.2)"
              : state.isSelected
                ? "rgba(108, 99, 255, 0.2)"
                : "transparent",
          }),
          indicatorsContainer: (base, state) => ({
            ...base,
            svg: {
              color: " var(--color-white)",
              transform: state.selectProps.menuIsOpen
                ? "rotate(180deg)"
                : "rotate(0deg)",
              transition: "transform 0.3s ease",
            },
          }),
          indicatorSeparator: () => ({ display: "none" }),
        }}
      />
    </div>
  );
}
