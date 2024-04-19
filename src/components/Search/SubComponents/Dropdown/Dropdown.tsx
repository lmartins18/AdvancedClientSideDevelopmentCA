import { HTMLAttributes, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import uniqid from "uniqid";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  icon: IconType;
  title: string;
  items: any[];
  isOpen: boolean;
  toggleIsOpen: () => void;
}

export const Dropdown = ({ icon: Icon, title, items, isOpen, toggleIsOpen, ...rest }: DropdownProps) => {
  const dataTestTitle = title.toLowerCase();
  const showItems = isOpen ? "block" : "hidden";

  return (
    <div className="flex flex-col flex-1 sm:m-auto relative">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        data-test={`${dataTestTitle}-dropdown`}
        className="flex items-center w-full p-2 transition duration-75 rounded-lg group hover:bg-gray-100 dark:hover:bg-gray-700"
        type="button"
        onClick={toggleIsOpen}
      >
        <Icon />
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{title}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </button>
      <div
        className={`absolute dropdown z-10 bg-white rounded-lg shadow dark:bg-gray-700 w-full ${showItems} top-10`}
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
    </div>
  );
};
