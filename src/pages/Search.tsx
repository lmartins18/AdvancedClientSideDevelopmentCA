import { CategoriesDropDown, CuisinesDropDown, IngredientsDropdown } from "../components/Sidenav/SubComponents"
import { SearchBar } from '../components/Sidenav/SubComponents/SearchBar';

export const Search = () => {
    return (
        <>
            <div className="flex flex-col sm:flex-row">
                <CategoriesDropDown />
                <CuisinesDropDown />
                <IngredientsDropdown />
                <SearchBar />
            </div>
        </>

    )
}