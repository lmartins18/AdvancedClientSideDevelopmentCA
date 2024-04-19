import { useContext } from "react";
import { RecipesContext } from "../../../../contexts/recipes-context/RecipesContextProvider";

interface DropdownStringItemProps {
  item: string;
  type: "ingredient" | "category";
}

export const DropdownStringItem = ({ item, type }: DropdownStringItemProps) => {
  const { changeApiParams: changeFilter } = useContext(RecipesContext);
  const fetchRecipes = () => {
    const filter = type === "ingredient" ? "i" : "c";
    // Fetch recipes.
    changeFilter({ type: "filter", argument: `${filter}=${item}` });
  };
  return (
    <p
      className={`flex gap-3 [&>*]:my-auto hover:bg-slate-200 hover:dark:bg-slate-600 p-2 cursor-pointer z-50`}
      onClick={fetchRecipes}
    >
      {item}
    </p>
  );
};
