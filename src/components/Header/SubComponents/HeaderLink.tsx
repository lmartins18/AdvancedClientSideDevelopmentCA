import { useLocation } from "react-router-dom";

export const HeaderLink = ({ path, name }: { path: string; name: string }) => {
    const location = useLocation().pathname;
    const className = location.toLowerCase() === path.toLowerCase()
        ? "block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500 hover:bg-blue-800 md:hover:bg-transparent"
        : "block py-2 px-3 rounded md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500  md:dark:hover:bg-transparent hover:bg-slate-700 md:hover:bg-transparent"

    return (
        <a href={path.toLowerCase()} className={className} >{name}</a>)
}