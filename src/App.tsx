import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MealContextProvider } from "./contexts/recipe-context/MealContextProvider";
import { RecipesDialogContextProvider } from "./contexts/recipes-dialog-context";

import { ThemeContextProvider } from "./contexts/theme-context";
import { AppRoutes } from './pages/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <MealContextProvider>
          <RecipesDialogContextProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </RecipesDialogContextProvider>
        </MealContextProvider>
      </ThemeContextProvider >
    </BrowserRouter>
  );
}

export default App;
