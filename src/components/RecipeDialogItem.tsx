import { useContext } from "react";
import { MealContext } from "../contexts/meal-context";
import { MealIngredient } from "../Entities/Meal";

export const RecipeModalItem = ({
  mealName,
  mealImgSrc,
}: {
  mealName: string;
  mealImgSrc: string;
}) => {
  const { changeCurrentMeal } = useContext(MealContext);

  // TODO: change code below to use id instead of name.
  const fetchNewRecipe = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
      .then((resp) => resp.json())
      .then((res) => {
        const meal = res.meals[0];
        // TODO dry this
        let ingredients: MealIngredient[] = [];
        res.meals.forEach((meal: any) => {
          // Get ingredients
          for (var prop in meal) {
            if (Object.prototype.hasOwnProperty.call(meal, prop)) {
              // Check if property is ingredient.
              if (prop.startsWith("strIngredient")) {
                if (!meal[`${prop}`]) continue;
                var ingredientNum = prop.replace("strIngredient", "");
                ingredients.push({
                  name: meal[`${prop}`],
                  measure: meal[`strMeasure${ingredientNum}`],
                });
              }
            }
          }
        });
        changeCurrentMeal({
          id: meal.idMeal,
          name: meal.strMeal,
          drinkAlternate: meal.strDrinkAlternate,
          category: meal.strCategory,
          area: meal.strArea,
          instructions: meal.strInstructions,
          mealThumb: meal.strMealThumb,
          tags: meal.strTags,
          youtube: meal.strYoutube,
          // TODO fix this below.
          ingredients: ingredients,
          source: meal.strSource,
          imageSource: meal.strImageSource,
          creativeCommonsConfirmed: meal.strCreativeCommonsConfirmed,
          dateModified: meal.dateModified,
        });
      });
  };
  return (
    // TODO: Consider changin this to use mealId instead of mealName
    <div
      className="flex flex-col cursor-pointer w-fit h-fit p-6 m-auto"
      onClick={fetchNewRecipe}
      data-test="recipes-dialog-item"
    >
      {mealImgSrc && (
        <img
          className="w-64 sm:w-32 mb-3 border-double border-8 border-slate-900 dark:border-slate-100 rounded object-fill m-auto"
          src={mealImgSrc}
          alt={`${mealName}`}
        />
      )}
      <h1 className="text-inherit dark:text-slate-200 text-center line-clamp-1">
        {mealName}
      </h1>
    </div>
  );
};
