import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import uniqid from "uniqid";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  title: string;
  items: any[];
}

export const Dropdown = ({ icon: Icon, title, items, ...rest }: DropdownProps) => {
  const dataTestTitle = title.toLowerCase();
  const [isOpen, setIsOpen] = useState(false);
  const showItems = isOpen ? "block" : "hidden";
  const catMenu = useRef<any>(null);
  
  useEffect(() => {
    const closeOpenMenus = (e: any) => {
      if (catMenu.current && isOpen && !catMenu.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mouseup", closeOpenMenus);

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener("mouseup", closeOpenMenus);
    };
  }, [isOpen]);
  
  return (
    <>
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        data-test={`${dataTestTitle}-dropdown`}
        className="flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        ref={catMenu}
      >
        <Icon />
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <div
        className={`dropdown z-10 bg-white rounded-lg shadow dark:bg-gray-700 ${showItems}`}
        {...rest}
      >
        <ul
          className="flex h-52 flex-col overflow-auto mx-1"
          aria-labelledby="dropdownDefaultButton"
        >
          {items.map((item) => (
            <li
              
              data-test={`${dataTestTitle}-dropdown-item`}
              key={uniqid()}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
