import { useState, FC, ReactNode, createContext } from "react";
import { apiParams } from "../apiParams";

interface RecipesContextProps {
  apiParams: apiParams,
  changeApiParams: (param: apiParams) => void;
}

export const RecipesContext = createContext<RecipesContextProps>({
  apiParams: { type: "search", argument: "" },
  changeApiParams: (param: apiParams) => { }
});

export const RecipesContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [apiParams, setApiParams] = useState<apiParams>({
    type: "filter",
    argument: "",
  });

  const changeApiParams = (param: apiParams) => {
    setApiParams(param)
  };

  return (
    <RecipesContext.Provider
      value={{ apiParams, changeApiParams }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
