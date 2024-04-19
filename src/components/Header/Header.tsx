import { ThemeToggleButton } from "./SubComponents";
import { Title } from "../Title";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { HeaderLink } from './SubComponents/HeaderLink';
import { Search } from '../../pages/Search';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => setIsOpen(!isOpen);
  return (
    <>
      <nav className="bg-slate-900 border-gray-200 px-2 sm:px-4 py-2.5 rounded-b">
        <div className="container-fluid flex flex-wrap items-center">
          <div id="nav-menu-button-container" className="flex flex-end"></div>
          <Title />
          <div id="nav-menu-button-container" className="flex flex-end ml-auto md:ml-3 text-white">
            <ThemeToggleButton />
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden" aria-controls="navbar-default" aria-expanded="false" onClick={toggleNavbar}>
              {isOpen ? <GrClose /> : <RxHamburgerMenu />}
            </button>
          </div>
          <div
            className={`w-full md:block md:w-auto ml-auto ${!isOpen && "hidden"}`}
            id="navbar-default"
          >
            <ul className="flex flex-col p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 bg-slate-800 md:bg-slate-900 border-slate-700 !text-white dark:hover:!text-sky-400">
              <li>
                <HeaderLink path={"/"} name={"Home"} />
              </li>
              <li>
                <HeaderLink path={"/search"} name={"Search"} />
              </li>
              <li>
                <HeaderLink path={"/random"} name={"Random"} />
              </li>
              <li>
                <HeaderLink path={"/contact"} name={"Contact"} />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
