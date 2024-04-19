import { useState, FC, ReactNode, createContext } from "react";
import { Meal } from "../../Entities/Meal";

interface MealContextType {
  currentMeal: Meal | undefined;
  changeCurrentMeal: (meal: Meal | undefined) => void;
}

export const MealContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [meal, setMeal] = useState<Meal>();
  const changeCurrentMeal = (meal: Meal | undefined) => {
    setMeal(meal);
  };
  return (
    <MealContext.Provider value={{ currentMeal: meal, changeCurrentMeal }}>
      {children}
    </MealContext.Provider>
  );
};


const defaultValue: MealContextType = {
  currentMeal: undefined,
  changeCurrentMeal: (meal: Meal | undefined) => {
  },
};

export const MealContext = createContext(defaultValue);