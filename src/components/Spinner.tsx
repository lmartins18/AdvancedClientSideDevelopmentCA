import { CgSpinner } from "react-icons/cg";
export const Spinner = () => (
  <div
    className="flex h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] m-auto"
    role="status"
  >
    <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
      <CgSpinner className="text-blue-600"/>
    </span>
  </div>
);
