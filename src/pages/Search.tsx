import { useState, useRef, useEffect, useContext } from 'react';
import { RecipeModalItem } from "../components/RecipeDialogItem";
import { CategoriesDropDown, CuisinesDropDown, IngredientsDropdown } from "../components/Search/SubComponents"
import { SearchBar } from '../components/Search/SubComponents/SearchBar';
import noDataImg from "../img/no-data.svg";
import { Spinner } from "../components/Spinner";
import { RecipesContext } from '../contexts/recipes-context/RecipesContextProvider';
import uniqid from 'uniqid';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { MealContext } from '../contexts/meal-context';
import { Recipe } from '../components/Recipe';

// TODO move this outta here.
interface recipe {
    mealName: string;
    mealImgSrc: string;
}

export const Search = () => {
    const { apiParams } = useContext(RecipesContext);
    const { currentMeal } = useContext(MealContext);
    const [recipes, setRecipes] = useState<recipe[] | null>(null);
    const modalBody = useRef<HTMLDivElement>(null);
    const [scroll, setScroll] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () =>
            await fetch(
                `https://www.themealdb.com/api/json/v1/1/${apiParams.type}.php?${apiParams.argument}`
            )
                .then((resp) => resp.json())
                // TODO this needs a type, same type as in Home component;
                .then((res: any) => {
                    // Dry this
                    let recipes: recipe[] = [];
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
                });
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
                ? <Recipe meal={currentMeal} />
                : <SearchBody />
            }
        </div >

    )
}