/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect, useContext } from 'react';
import { RecipeModalItem } from "../components/RecipeDialogItem";
import { CategoriesDropDown, CuisinesDropDown, IngredientsDropdown } from "../components/Search/SubComponents"
import { SearchBar } from '../components/Search/SubComponents/SearchBar';
import noDataImg from "../img/no-data.svg";
import { Spinner } from "../components/Spinner";
import { RecipesContext } from '../contexts/recipes-context/RecipesContextProvider';
import uniqid from 'uniqid';
import { MealContext } from '../contexts/meal-context';
import { RecipePage } from '../components/RecipePage';
import { getUserCountry } from '../components/getUserCountry';
import { countryCuisineMap } from '../data/CountryCuisineMap';
import { Recipe } from '../Entities/Meal';


export const Search = () => {
    const { apiParams, changeApiParams } = useContext(RecipesContext);
    const { currentMeal } = useContext(MealContext);
    const [recipes, setRecipes] = useState<Recipe[] | null>(null);
    const modalBody = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(true);

    // To get the users cuisine based on ip location
    useEffect(() => {
        const getUserCuisine = async () => {
            const country = await getUserCountry();
            if (!country) return;

            const cuisine = countryCuisineMap[country];
            changeApiParams({ type: "filter", argument: `a=${cuisine}` });
        };
        getUserCuisine();
    }, [])

    // Change data on-screen when params change.
    useEffect(() => {
        const fetchData = async () =>
            await fetch(
                `https://www.themealdb.com/api/json/v1/1/${apiParams.type}.php?${apiParams.argument}`
            )
                .then((resp) => resp.json())
                .then((res: any) => {
                    // Dry this
                    let recipes: Recipe[] = [];
                    if (!res.meals) {
                        setRecipes(null);
                        return;
                    }
                    res.meals.forEach((meal: any) => {
                        recipes.push({
                            mealName: meal.strMeal.toString(),
                            mealImgSrc: meal.strMealThumb.toString(),
                        });
                    });
                    setRecipes(recipes);
                    setLoading(false);
                }).catch(() => { });
        fetchData();
    }, [apiParams]);


    const SearchBody = () =>
    (
        <>
            <div className="flex flex-col sm:flex-row">
                <CategoriesDropDown />
                <CuisinesDropDown />
                <IngredientsDropdown />
                <span className="flex flex-1 sm:flex-grow-[2]">
                    <SearchBar />
                </span>
            </div>
            {recipes === null ? (
                <div className="flex flex-col gap-6 w-44 mx-auto mt-32 text-center text-2xl">
                    <img src={noDataImg} alt="no data available" />
                    <p>No Recipes Found.</p>
                </div>
            ) : loading ? (
                <div className="m-auto">
                    <Spinner />
                </div>
            ) : (
                <div
                    id="modal-body"
                    ref={modalBody}
                    className="grid grid-flow-row sm:grid-cols-auto p-6 overflow-auto flex-wrap h-full scroll-smooth mb-1"
                >
                    {recipes.map((recipe) => (
                        <RecipeModalItem
                            mealName={recipe.mealName}
                            mealImgSrc={recipe.mealImgSrc}
                            key={uniqid()}
                        />
                    ))}
                </div>)
            }
        </>
    );

    return (
        <div className="flex flex-col flex-1 overflow-auto">
            {currentMeal
                ? <RecipePage meal={currentMeal} closeBtn />
                : <SearchBody />
            }
        </div >

    )
}