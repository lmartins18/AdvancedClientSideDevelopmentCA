import { useContext } from "react";
import { RecipesContext } from "../../../contexts/recipes-context/RecipesContextProvider";
import { FaMagnifyingGlass } from "react-icons/fa6";


export const SearchBar = () => {
  const { changeApiParams: changeFilter } = useContext(RecipesContext);
  const search = (e: any) => {
    if (e.type === "click" || (e.type === "keyup" && e.key === "Enter")) {
      changeFilter({ type: "search", argument: `s=${e.target.value}` });
    }
  };
  return (
    <div className="relative m-auto flex flex-row flex-1 gap-1 p-1">
      <div className="absolute top-4 left-3 flex items-center pointer-events-none">
        <FaMagnifyingGlass />
    </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-full p-2 pl-10 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
        onKeyUp={search}
      />
      <button type="button" className="text-white bg-blue-600 hover:bg-blue-700 rounded p-2" onClick={search}>
        Go
      </button>
    </div>
  );
};
