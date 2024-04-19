import { GiChefToque } from "react-icons/gi";
import { Meal } from "../Entities/Meal";
import { IngredientsList } from "./IngredientsList";
import { BiCameraMovie } from "react-icons/bi";
import { HrWithIcon } from "./HrWithIcon";
import { Suspense, useContext, useEffect, useRef } from "react";
import { MealContext } from "../contexts/meal-context";
import { lazy } from "react";
import { Spinner } from "./Spinner";
import { AiFillStar } from "react-icons/ai";

export const Recipe = ({ meal }: { meal?: Meal }) => {
  const recipeBody = useRef<HTMLDivElement>(null);
  const { currentMeal } = useContext(MealContext);
  const MealYoutubeIframe = lazy(() => import("./MealYoutubeIframe"));

  useEffect(() => {
    if (recipeBody.current) recipeBody.current.scrollTop = -10;
  }, [currentMeal]);
  return (
    <div
      id="recipe-body"
      className="h-full w-full px-6 pt-6 pb-2 bg-inherit dark:bg-inherit overflow-auto"
      ref={recipeBody}
    >

      <h1 data-test="recipe-title" className="text-xl text-inherit dark:text-inherit pb-6 underline underline-offset-8 text-center sm:text-start flex gap-3">
        {meal?.name}
        <AiFillStar className="my-auto hover:cursor-pointer hover:text-yellow-400" />
      </h1>

      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row whitespace-pre-wrap break-words">
          <div id="container">
            {meal?.mealThumb && (
              <img
                className="w-[24rem] h-[24rem] border-double border-8 border-slate-900 dark:border-slate-100 rounded object-fill"
                src={meal.mealThumb}
                alt={`${meal.name}`}
              />
            )}
            <div className="flex flex-col pt-6 justify-between">
              <ul className="list-disc px-6">
                <li>
                  <span className="inline-flex gap-1">
                    <p className="font-bold">Category:</p>
                    <p>{meal?.category}</p>
                  </span>
                </li>
                <li>
                  <span className="inline-flex gap-1">
                    <p className="font-bold">Cuisine:</p>
                    <p>{meal?.area}</p>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          {meal?.ingredients && (
            <IngredientsList ingredients={meal.ingredients} />
          )}
        </div>
        <HrWithIcon Icon={GiChefToque} />
        <p>{meal?.instructions}</p>
      </div>
      {meal?.youtube && (
        <>
          <HrWithIcon Icon={BiCameraMovie} />
          <Suspense fallback={<Spinner />}>
            <MealYoutubeIframe youtubeUrl={meal.youtube} />
          </Suspense>
        </>
      )}
    </div>
  );
};
