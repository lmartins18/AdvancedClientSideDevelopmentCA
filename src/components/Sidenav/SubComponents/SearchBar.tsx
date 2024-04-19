import { useContext } from "react";
import { RecipesDialogContext } from "../../../contexts/recipes-dialog-context/RecipesDialogContextProvider";
import { FaMagnifyingGlass } from "react-icons/fa6";


export const SearchBar = () => {
  const { toggleIsOpen, changeApiParams: changeFilter } = useContext(RecipesDialogContext);
  // TODO: handle type below.
  const search = (e: any) => {
    if (e.key === "Enter") {
      changeFilter({ type: "search", argument: `s=${e.target.value}` });
      toggleIsOpen();
    }
  };
  return (
    <div className="relative m-1 flex flex-col flex-grow-[2]">
      <div className="absolute top-3 left-3 flex items-center pointer-events-none">
        <FaMagnifyingGlass />
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
        onKeyUp={search}
      />
    </div>
  );
};
