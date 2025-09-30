import SearchField from "./SearchField";
import SelectChoice from "./SelectChoice";

export default function Filters() {
  return (
    <div className="flex flex-col gap-3 justify-center md:flex-row ">
      <SearchField />
      <div className="flex flex-row gap-3 justify-between w-full">
        <SelectChoice
          placeholder="Choose"
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
          ]}
        />
        <SelectChoice
          placeholder="Choose"
          options={[
            { value: "chocolate", label: "Chocolate" },
            { value: "strawberry", label: "Strawberry" },
            { value: "vanilla", label: "Vanilla" },
          ]}
        />
      </div>
    </div>
  );
}
