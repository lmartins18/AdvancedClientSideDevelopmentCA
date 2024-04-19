import { BrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { MealContextProvider } from "./contexts/meal-context/MealContextProvider";
import { RecipesContextProvider } from "./contexts/recipes-context";

import { ThemeContextProvider } from "./contexts/theme-context";
import { AppRoutes } from './pages/AppRoutes';

function App() {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <MealContextProvider>
          <RecipesContextProvider>
            <Layout>
              <AppRoutes />
            </Layout>
          </RecipesContextProvider>
        </MealContextProvider>
      </ThemeContextProvider >
    </BrowserRouter>
  );
}

export default App;
