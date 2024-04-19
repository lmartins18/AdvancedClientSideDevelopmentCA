import { useState, FC, ReactNode, createContext } from "react";

interface DropdownContextType {
    isOpen: boolean;
    toggleIsOpen: () => void;
}
export const DropdownContextProvider: FC<{ children: ReactNode }> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => setIsOpen(!isOpen);

    return (
        <DropdownContext.Provider value={{ isOpen, toggleIsOpen }}>
            {children}
        </DropdownContext.Provider>
    );
};

const defaultValue: DropdownContextType = {
    isOpen: false,
    toggleIsOpen: () => {},
};

export const DropdownContext = createContext(defaultValue);