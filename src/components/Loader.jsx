import { BarLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex justify-center items-center">
      <BarLoader color="var(--color-purple" width={150} />
    </div>
  );
}
