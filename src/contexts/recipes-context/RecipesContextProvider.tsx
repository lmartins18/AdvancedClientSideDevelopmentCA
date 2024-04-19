import { useState, FC, ReactNode, createContext } from "react";
import { apiParams } from "../apiParams";

interface RecipesContextProps {
  apiParams: apiParams,
  changeApiParams: (param: apiParams) => void;
}

export const RecipesContext = createContext<RecipesContextProps>({
  apiParams: { type: "search", argument: "" },
  changeApiParams: (param: apiParams) => {}
});

export const RecipesContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [apiParams, setApiParams] = useState<apiParams>({
    type: "filter",
    argument: "",
  });

  // TODO: instead of just assigning a new value, accept 2 arguments, on for type "cusine | ingredient | category" and another for the value.
  const changeApiParams = (param: apiParams) => setApiParams(param);

  return (
    <RecipesContext.Provider
      value={{ apiParams, changeApiParams }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
