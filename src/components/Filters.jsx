import SearchField from "./SearchField";
import SelectChoice from "./SelectChoice";
import { useEffect, useState } from "react";

export default function Filters({ filters, onChangeFilters, setSearch }) {
  const [localFilters, setLocalFilters] = useState({
    statusType: filters.statusType || "",
    sortOrder: filters.sortOrder || "",
  });

  useEffect(() => {
    setLocalFilters({
      statusType: filters.statusType || "",
      sortOrder: filters.sortOrder || "",
    });
  }, [filters]);

  return (
    <div className="flex flex-col gap-3 justify-center md:flex-row ">
      <SearchField setSearch={setSearch} />
      <div className="flex flex-row gap-3 justify-between w-full">
        <SelectChoice
          placeholder={filters.statusType}
          value={filters.statusType}
          onChange={(selected) => {
            const updated = { ...localFilters, statusType: selected.value };
            setLocalFilters(updated);
            onChangeFilters(updated);
          }}
          options={[
            { value: "all", label: "all" },
            { value: "done", label: "done" },
            { value: "undone", label: "undone" },
          ]}
        />
        <SelectChoice
          placeholder="Priority"
          onChange={(selected) => {
            const updated = { ...localFilters, sortOrder: selected.value };
            setLocalFilters(updated);
            onChangeFilters(updated);
          }}
          value={filters.sortOrder}
          options={[
            { value: "asc", label: "From high to low" },
            { value: "desc", label: "From low to high" },
          ]}
        />
      </div>
    </div>
  );
}
