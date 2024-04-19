import { useContext } from "react";
import { RecipesContext } from "../../../../../contexts/recipes-context/RecipesContextProvider";

export const Cuisine = ({ cuisine }: { cuisine: string }) => {
  const { changeApiParams } = useContext(RecipesContext);
  const imgUrl = `${process.env.PUBLIC_URL}/img/flags/${cuisine}.svg`
  const fetchRecipes = () => {
    // Fetch recipes.
    changeApiParams({ type: "filter", argument: `a=${cuisine}` });
  };
  return (
    <p
      className={`flex gap-3 [&>*]:my-auto hover:bg-slate-200 hover:dark:bg-slate-600 hover:cursor-pointer px-2 items-center`}
      onClick={fetchRecipes}
    >
      <img
        src={imgUrl}
        alt={cuisine + " flag"}
        className="h-10 w-10"
        loading="lazy"
      />
      {cuisine}
    </p>
  );
};
